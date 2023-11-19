import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../../utils/Colors";
import SubHeader from "../Home/SubHeader";
import moment from "moment";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";

export default function Booking({ hospital }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 8; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"),
        formattedDate: date.format("Do MMM"),
      });
    }
    setNext7Days(nextSevenDays);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeList(timeList);
  };

  const bookAppointment = () => {
    const data = {
      data: {
        Username: user?.firstName,
        Date: selectedDate,
        Time: selectedTime,
        Email: user?.primaryEmailAddress?.emailAddress,
        hospitals: hospital,
        Note: note,
      },
    };
    GlobalApi.createAppointment(data).then((resp) => console.log(resp));
  };

  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.darkGray }}>
        Book Appointment
      </Text>
      <SubHeader title="Day" seeAll={false} />
      <FlatList
        data={next7Days}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date
                ? { backgroundColor: Colors.secondary }
                : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                { fontFamily: "appfont" },
                selectedDate == item.date ? { color: Colors.black } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { fontFamily: "appfont-semi", fontSize: 16 },
                selectedDate == item.date ? { color: Colors.black } : null,
              ]}
            >
              {item.formattedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeader title="Time" seeAll={false} />
      <FlatList
        data={timeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              { paddingVertical: 16 },
              selectedTime == item.time
                ? { backgroundColor: Colors.secondary }
                : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                { fontFamily: "appfont" },
                selectedTime == item.time ? { color: Colors.black } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeader title="Note" seeAll={false} />
      <TextInput
        numberOfLines={3}
        onChangeText={(value) => setNote(value)}
        style={{
          backgroundColor: Colors.lightGray,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.secondary,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Write notes here"
      />
      <TouchableOpacity
        onPress={() => bookAppointment()}
        style={{
          padding: 13,
          backgroundColor: Colors.primary,
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontFamily: "appfont-semi",
            fontSize: 17,
          }}
        >
          Make Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.darkGray,
  },
});
