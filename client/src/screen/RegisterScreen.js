import React,{useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import logo from "../../assets/images/logo.png";
import lineLogin from "../../assets/images/lineLogin.png";
// import { useFonts } from "expo-font";

const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const handleRegister = () => {
    navigation.navigate("otp");
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#ffc7dd",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffc7dd",
            width: 360,
            height: 800,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              width: 220,
              height: 225,
              top: 0,
              left: 70,
            }}
            source={logo}
          />
          <Text
            style={{
              position: "absolute",
              top: 150,
              marginTop: 0,
              fontSize: 12,
              textAlign: "center",
              fontFamily: "gilmerLight",
              color: "black",
            }}
          >
            Where infinite love unfolds
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 130,
              marginTop: 50,
              fontSize: 25,
              fontFamily: "gilmerBold",
              color: "black",
              textAlign: "center",
            }}
          >
            Sign Up and Unlock the Door to Your Heart’s Desires
          </Text>
          <View
            style={{
              position: "relative",
              width: 400,
              height: 553,
              top: 10,
              left: 0,
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 400,
                height: 600,
                top: 130,
                left: 0,
                backgroundColor: "#f4f4f4",
                borderRadius: 35,
              }}
            />

            <View
              style={{
                position: "absolute",
                width: 236,
                top: 150,
                left: 80,
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: "gilmerBold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Sign Up
              </Text>
            </View>

            <View
              style={{
                top: 190,
                left: 40,
                width: "80%",
                padding: 20,
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: "#f2ebee",
                  borderColor: "#f2ebee",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginBottom: 15,
                  paddingLeft: 10,
                }}
                placeholder="Enter your @cuchd.in email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: "#f2ebee",
                  borderColor: "#f2ebee",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginBottom: 15,
                  paddingLeft: 10,
                }}
                placeholder="Enter your Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: "#f2ebee",
                  borderColor: "#f2ebee",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginBottom: 15,
                  paddingLeft: 10,
                }}
                placeholder="Enter your Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: "#f2ebee",
                  borderColor: "#f2ebee",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginBottom: 15,
                  paddingLeft: 10,
                }}
                placeholder="Confirm your Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            
              <TouchableOpacity
                style={{
                  top: 15,
                  backgroundColor: "#ff397a",
                  padding: 10,
                  borderRadius: 25,
                }}
                onPress={handleRegister}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                    fontFamily: "gilmerBold",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
              <View style={{ width: 149, height: 1 }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 160,
                    height: 11,
                    top: 50,
                    left: 60,
                  }}
                  source={lineLogin}
                />
              </View>
              <View style={{ width: 249, height: 15 }}>
                <Text
                  style={{
                    position: "absolute",
                    width: 249,
                    top: 100,
                    left: 30,
                    fontFamily: "gilmerRegular",
                    fontSize: 14,
                  }}
                >
                  <Text style={{ color: "black" }}>
                    Already have a account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                  >
                    <Text
                      style={{
                        fontFamily: "gilmerBold",
                        color: "#ff397a",
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
              <View style={{ width: 263, height: 37 }}>
                <Text
                  style={{
                    position: "absolute",
                    width: 263,
                    top: 150,
                    left: 10,
                    fontFamily: "gilmerRegular",
                    fontSize: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#727272",
                      textDecorationLine: "underline",
                    }}
                  >
                    By creating this account, you agree to our
                  </Text>
                  <Text>&nbsp;</Text>
                  <Text
                    style={{
                      color: "#ff397a",
                      textDecorationLine: "underline",
                    }}
                  >
                    Privacy Policy and Cookie Policy
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;
