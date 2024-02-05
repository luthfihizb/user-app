import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import UserCard from "../components/UserCard";

export default function UserList() {
  const colorScheme = "dark";
  const { theme } = useMaterial3Theme({ sourceColor: "#EAC348" });

  const [users, setUsers] = useState([]);
  const getUserList = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: theme[colorScheme].background }}>
      <Text
        variant="headlineMedium"
        style={{ color: theme[colorScheme].onBackground, fontFamily: "Roboto Serif", marginBottom: "16px" }}
      >
        Users
      </Text>
      <ScrollView contentContainerStyle={{ gap: "16px" }}>
        <UserCard users={users} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "16px",
  },
});
