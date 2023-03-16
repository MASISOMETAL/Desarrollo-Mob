import { Button, Image, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.tit}>PANADERIA "¿Qué mira, bobo? Andá pa allá" </Text>
        <Card style={styles.containerStyle}>
        <Text style={styles.tit}>Cookies</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/cookie.png")}
          />
        </Card>
        <Card style={styles.containerStyle}>
        <Text style={styles.tit}>Facturas</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/factura.png")}
          />
        </Card>
        <Card style={styles.containerStyle}>
        <Text style={styles.tit}>Pan Dulce</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/pan-dulce.png")}
          />
        </Card>
        <Button
          title="Mas productos"
          onPress={() => {
            navigation.navigate("Mas productos");
          }}
        />
      </View>
    );
  };

export default CategoriesScreen;

const styles = StyleSheet.create({
        mainContainer: {
              flex: 1,
              flexWrap: 'wrap',
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#AAC9F0"
        },
        containerStyle: {
              padding: 10,
              backgroundColor: 'white',
              borderWidth:0,
              marginBottom:30,
              marginLeft:10,
              marginRight:10,
              borderColor:'#808080',
              marginTop:10,
              elevation: 10,
              width: 200,
              height: 150,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
          },
          tinyLogo: {
            width: 100,
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          },
          tit:{
            fontSize: 15,
            fontWeight: 'bold',
            color: "#C28451"
          },
});
