import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "lightcoral",
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 17,
    backgroundColor: "pink",
  },

  // ==============================
  columnContainer: {
    height: 100,
    backgroundColor: "gainsboro",
    // 画面の最大幅で表示
    flex: 1,
    // flexDirection: "column", // default
  },
  rowContainer: {
    height: 100,
    backgroundColor: "gainsboro",
    // 画面の最大幅で表示
    flex: 1,
    flexDirection: "row",
  },
  box1: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  box2: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
  },
  box3: {
    width: 20,
    height: 20,
    backgroundColor: "green",
  },
});

const ReactNativeMemo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* ************************************************************ */}
        {/* ************************************************************ */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>########Flexbox</Text>
        </View>
        {/* ************************************************************ */}
        <Text style={styles.subTitle}>
          {`####column
{
  flex: 1,
  // flexDirection: "column,
}`}
        </Text>

        <Text>default</Text>
        {/* ####SafeAreaView
        スマホのsafe area(バッテリーや電波の表示エリア)を避けて表示。 */}
        <SafeAreaView style={styles.columnContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>alignItems: "center"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { alignItems: "center" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>alignItems: "flex-end"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { alignItems: "flex-end" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "center"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { justifyContent: "center" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "flex-end"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { justifyContent: "flex-end" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-between"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { justifyContent: "space-between" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-around"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { justifyContent: "space-around" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-evenly"</Text>
        <SafeAreaView
          style={[styles.columnContainer, { justifyContent: "space-evenly" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        {/* ************************************************************ */}
        <Text style={styles.subTitle}>
          {`####row
{
  flex: 1,
  flexDirection: "row",
}`}
        </Text>

        <Text>default</Text>
        <SafeAreaView style={styles.rowContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>alignItems: "center"</Text>
        <SafeAreaView style={[styles.rowContainer, { alignItems: "center" }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>alignItems: "flex-end"</Text>
        <SafeAreaView style={[styles.rowContainer, { alignItems: "flex-end" }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "center"</Text>
        <SafeAreaView
          style={[styles.rowContainer, { justifyContent: "center" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "flex-end"</Text>
        <SafeAreaView
          style={[styles.rowContainer, { justifyContent: "flex-end" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-between"</Text>
        <SafeAreaView
          style={[styles.rowContainer, { justifyContent: "space-between" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-around"</Text>
        <SafeAreaView
          style={[styles.rowContainer, { justifyContent: "space-around" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>

        <Text>justifyContent: "space-evenly"</Text>
        <SafeAreaView
          style={[styles.rowContainer, { justifyContent: "space-evenly" }]}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReactNativeMemo;
