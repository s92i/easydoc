import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../../utils/Colors";
import SubHeader from "./SubHeader";

export default function Categories() {
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
      <SubHeader title={"Doctor speciality"} />
      <FlatList
        data={categoryList}
        numColumns={4}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        renderItem={({ item, index }) =>
          index < 4 && (
            <View style={{ alignItems: "center" }}>
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
            </View>
          )
        }
      />
    </View>
  );
}
