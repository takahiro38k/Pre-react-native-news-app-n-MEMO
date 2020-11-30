import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";
// import {StackNavigationProp} from "@react-navigation/stack";
// import {RootStackParamList} from "../types/navigation";
// import {RouteProp} from "@react-navigation/native";
// import {State} from "../types/state";
// import {User} from "../types/user";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "flex-start",
  },
});

// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Clip">;
//   route: RouteProp<RootStackParamList, "Clip">;
// };

const ClipScreen = ({ navigation }) => {
  // const ClipScreen: React.FC<Props> = ({navigation, route}: Props) => {
  const user = useSelector((state) => state.user); // as User;
  // const user = useSelector((state: State) => state.user); // as User;
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={user.clips}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ClipScreen;
