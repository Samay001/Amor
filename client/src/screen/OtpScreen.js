import React, { useState } from "react";
import {View,Text,Image,TextInput,TouchableOpacity,Dimensions} from"react-native";
import back from "../../assets/images/backPage.png";

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleInputChange = (index, value) => {
    if (index < 4) {
      let newOtp = otp.split("");
      newOtp[index] = value;
      setOtp(newOtp.join(""));
    }

    if (index < 3 && value !== "") {
      refs[index + 1].focus();
    }
  };

  const refs = Array(4)
    .fill(0)
    .map((_, index) => React.createRef());

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1, backgroundColor: "#FFC7DD", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("register")}
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          top: 60,
          left: 20,
        }}
      >
        <Image resizeMode="cover" source={back} />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: screenWidth * 0.3,
        }}
      >
        Enter Verification Code
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#696969",
          fontFamily: "gilmerLight",
          marginTop: 10,
        }}
      >
        We have sent code to your cuchd.in mail
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#696969",
          fontFamily: "gilmerBold",
          marginTop: 10,
        }}
      >
        21bcs2xx2@cuchd.in
      </Text>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (refs[index] = ref)}
              style={{
                width: screenWidth * 0.12,
                height: screenWidth * 0.12,
                borderWidth: 1,
                borderRadius: 8,
                textAlign: "center",
                fontSize: screenWidth * 0.06,
                marginHorizontal: screenWidth * 0.02,
              }}
              maxLength={1}
              value={otp[index]}
              onChangeText={(value) => handleInputChange(index, value)}
              keyboardType="numeric"
            />
          ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("userInfo")}
        style={{
          width: screenWidth * 0.75,
          height: screenWidth * 0.15,
          backgroundColor: "#FF397A",
          borderRadius: screenWidth * 0.075,
          marginTop: screenWidth * 1.1,
        }}
      >
        <Text
          style={{
            fontSize: screenWidth * 0.06,
            color: "white",
            textAlign: "center",
            fontFamily: "gilmerBold",
            lineHeight: screenWidth * 0.15,
          }}
        >
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
