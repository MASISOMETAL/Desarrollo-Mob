import { Button, Image, StyleSheet, Text, View, ScrollView } from "react-native";

import Card from "../components/Card";
import React from "react";

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.tit}>Tambien tenemos... </Text>
        <Card style={styles.containerStyle}>
          <Text style={styles.tit2}>Pan</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/pan.png")}
          />
          <Button
            title="QUIERO COMPRAR"
            onPress={() => {
              navigation.navigate("Detalle");
            }}
          />
        </Card>
        <Card style={styles.containerStyle}>
          <Text style={styles.tit2}>Semita</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/semita.png")}
          />
          <Button
            title="QUIERO COMPRAR"
            onPress={() => {
              navigation.navigate("Detalle");
            }}
          />
        </Card>
        <Card style={styles.containerStyle}>
          <Text style={styles.tit2}>Empanadas</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/empanadas.png")}
          />
          <Button
            title="QUIERO COMPRAR"
            onPress={() => {
              navigation.navigate("Detalle");
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default CategoryBreadScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#AAC9F0",
  },
  containerStyle: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#808080",
    marginTop: 10,
    elevation: 10,
    width: 200,
    height: 180,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 80,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  tit: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
  tit2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C28451",
  },
});
