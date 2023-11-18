import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../../utils/Colors";
import SubHeader from "./SubHeader";

export default function Categories() {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  if (!categoryList) return null;

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeader title="Doctor speciality" />
      <FlatList
        data={categoryList}
        numColumns={4}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        renderItem={({ item, index }) =>
          index < 4 && (
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() =>
                navigation.navigate("hospital-doctor-list-screen", {
                  categoryName: item?.attributes?.Name,
                })
              }
            >
              <View
                style={{
                  backgroundColor: Colors.secondary,
                  padding: 15,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{
                    uri: item?.attributes?.Icon?.data[0]?.attributes?.url,
                  }}
                  style={{ height: 30, width: 30 }}
                />
              </View>
              <Text>{item?.attributes?.Name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
