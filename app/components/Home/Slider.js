import { View, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

export default function Slider() {
  const [sliderList, setSliderList] = useState();

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider()
      .then((resp) => {
        setSliderList(resp.data.data);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item?.attributes?.Image?.data?.attributes?.url }}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
              borderRadius: 10,
              margin: 2,
            }}
          />
        )}
      />
    </View>
  );
}
