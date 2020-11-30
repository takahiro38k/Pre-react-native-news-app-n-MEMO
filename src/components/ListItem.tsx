import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    // 子el(フレックスアイテム)を横並び
    flexDirection: "row",
  },
  leftContainer: {
    // backgroundColor: "red",
    width: 100,
  },
  rightContainer: {
    // backgroundColor: "blue",
    // 幅を描画可能エリアに合わせる。
    flex: 1,
    padding: 10,
    // elを等間隔で配置
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

type Props = {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
};

const ListItem = ({ imageUrl, title, author, onPress }: Props) => {
  return (
    // ####TouchableOpacity
    //   touchに反応するeventを実装するためのwrapper。
    //   https://reactnative.dev/docs/touchableopacity
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {/* ####!!
          付与対象を必ずbooleanで判定する。付けなくても問題ないことも多い？ */}
        {!!imageUrl && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: imageUrl,
            }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        {/* numberOfLines => 表示行数を指定。超過分は ... 表示。 */}
        <Text style={styles.text} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
