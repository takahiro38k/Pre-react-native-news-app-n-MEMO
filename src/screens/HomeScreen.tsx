import axios from "axios";
import Constants from "expo-constants";
// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import ListItem from "../components/ListItem";
// import dummyArticles from "../dummies/articles.json";
import ReactNativeMemo from "../../ReactNativeMemo";
import Loading from "../components/Loading";

// country=jp => 日本のnewsを取得
const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // AndroidではSafeAreaViewが有効にならないため、同様の効果を設定。
    // paddingTop: Platform.OS === 'android' ? 25 : 0
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

type Article = {
  title: string;
  author: string;
  // url: string;
  urlToImage: string;
};

// AppNavigator.tsxにおいて、Stack.Screenのcomponent propに指定されたことで、
// navigationというbuilt-inのpropsを使える。
// navigation.navigate("")で画面遷移先を指定できる(今回はonPressと組み合わせて使用)。
const HomeScreen: React.FC = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  // loadingの状態を管理
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // alert(Constants.manifest.extra.newsApiKey);

    // const timer = setTimeout(() => {
    //   setArticles(dummyArticles);
    // }, 2000);
    // return () => clearTimeout(timer);

    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);

    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  // <FlatList />で書き換え。
  // const items = articles.map((article, index) => {
  //   return (
  //     <ListItem
  //       imageUrl={article.urlToImage}
  //       title={article.title}
  //       author={article.author}
  //       key={index}
  //     />
  //   );
  // });

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}

      {/* 画面のscrollを実装。
        ScrollViewもscrollを実装できるが、FlatListの方が表示が早い模様。 */}
      <FlatList
        // articles => News Apiから取得した配列
        // https://newsapi.org/
        data={articles}
        // data(arr)の各要素をrenderItemで描画できる。
        // itemという規定のpropがあるので、分割代入して利用する。
        // map()と似た処理。
        renderItem={({ item }: { item: Article }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            // onPress => tapした時のevent
            // navigate()
            //   1st param => 画面遷移先。AppNavigator.tsxのStack.Screenのnameで指定した値。
            //   2nd param => 遷移先のcomponentに渡す値。
            // ==============================
            // Passing parameters to routes
            // https://reactnavigation.org/docs/params/
            // ==============================
            // { article: item } => 下記のようなイメージ。
            //   const article = { urlToImage: xxx, title: xxx, author: xxx }
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        // map()でいうところのkey attr。
        // renderItemと違い、paramの分割代入が不用な点に注意。
        keyExtractor={(item, index) => index.toString()}
      />

      {/* position: "absolute" の設定によって、最前面に表示される。 */}
      {loading && <Loading />}

      {/*
        <ScrollView>
          <ReactNativeMemo />
        </ScrollView>
      */}
    </SafeAreaView>
  );
};

export default HomeScreen;
