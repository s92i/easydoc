import { View, FlatList, Image, Dimensions } from "react-native";
import React from "react";

export default function Slider() {
  const sliderList = [
    {
      id: 1,
      name: "Slider 1",
      image:
        "https://hms.harvard.edu/sites/default/files/media/800-Doctors-Talking-GettyImages-1421919753.jpg",
    },
    {
      id: 2,
      name: "Slider 2",
      image:
        "https://cdn.dribbble.com/users/7931944/screenshots/17100454/for_post.png",
    },
  ];

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item?.image }}
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
