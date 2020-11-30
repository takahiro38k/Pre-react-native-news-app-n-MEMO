import React from 'react';
// ActivityIndicator => 読込中のアニメーション
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // 画面全体を覆い、中心にアニメーションを表示。
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // 半透明
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => {
  return (
    <View style={styles.container}>
      {/* ActivityIndicator
        https://docs.expo.io/versions/latest/react-native/activityindicator/ */}
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
