import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StackNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useState } from "react";
import Statusbar from "expo-status-bar";
export default function Homepage({ navigation }) {
  const [name, setName] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View>
        <View style={{ height: 50 }}>
          <TouchableOpacity
            style={{
              zIndex: 3,
              padding: 10,
              backgroundColor: "transparent",
            }}
          >
            <Icon name="bars" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <MapView
            initialRegion={{
              latitude: 6.9746,
              longitude: 4.8472,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider={PROVIDER_GOOGLE}
            style={{
              height: windowHeight,
              alignSelf: "stretch",
              width: windowWidth,
              zIndex: 1,
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  introtext: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "monospace",
    color: "white",
  },
  intro: {
    marginTop: 0,
    backgroundColor: "#1C62CA",
  },
});
