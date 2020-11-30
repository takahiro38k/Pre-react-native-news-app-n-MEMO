import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";

import { RouteProp } from "@react-navigation/native";

import { addClip, deleteClip } from "../store/actions/user";
import { RootStackParamList } from "../types/navigation";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "flex-start",
  },
});

type Props = {
  route: RouteProp<RootStackParamList, "Article">;
};

// Passing parameters to routes
// https://reactnavigation.org/docs/params/
const ArticleScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { clips } = user;
  const isClipped = () => {
    // reduxのstateのURLに対象の記事があるか(すでにclipされた記事か)判定。
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />

      {/* ClipButton実装前の仮のbutton */}
      {/* ============================== */}
      {/* <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
      </TouchableOpacity> */}
      {/* ============================== */}

      {/* WebView
        https://docs.expo.io/versions/latest/sdk/webview/
        renderLoading
        https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md#renderloading */}
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        // loading中に表示するcomponentを指定。
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  );
};

export default ArticleScreen;
