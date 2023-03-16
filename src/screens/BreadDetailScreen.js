import { Button, Image, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import React from "react";

const BreadDetailScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tit}>Ficha del producto </Text>
      <Card style={styles.containerStyle}>
        <Text style={styles.tit2}>Empanada</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/empanadas.png")}
        />
        <Text style={styles.tit3}>Composicion: Harina de trigo, agua, sal, carne, cebolla, arveja, arroz, aceite, color betacaroteno 1%</Text>
        <Text style={styles.tit3}>Vida util: Congeladas (a 18 grados) 90 dias a partir de la fecha de elaboracion. Una vez freidas: 48 horas</Text>
        <Text style={styles.tit3}>Uso previsto: Producto alimenticio para consumo humano</Text>
      </Card>
    </View>
  );
};

export default BreadDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#AAC9F0",
  },
  containerStyle: {
    backgroundColor: "white",
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#808080",
    marginTop: 10,
    elevation: 10,
    width: 300,
    height: 550,
    alignContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 170,
    height: 140,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  tit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  tit2: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#C28451",
  },
  tit3: {
    marginTop: 30,
    fontSize: 15,
    color: "#000000",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginRight: 10,
  },
});
