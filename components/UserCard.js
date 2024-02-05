import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Card, Divider } from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

export default function UserCard({ users }) {
  const colorScheme = "dark";
  const { theme } = useMaterial3Theme({ sourceColor: "#EAC348" });

  const openMap = (lat, lng) => {
    Linking.openURL(`https://maps.google.com/?q=${lat},${lng}`);
  };

  const userViews = [];
  users.map((user) => {
    userViews.push(
      <Card style={{ backgroundColor: theme[colorScheme].surface }}>
        <TouchableOpacity onPress={() => openMap(user.address.geo.lat, user.address.geo.lng)}>
          <View style={styles.card}>
            <Card.Cover source={{ uri: `https://picsum.photos/id/2${user.id}/500` }} style={styles.cover} />
            <Card.Content style={{ paddingVertical: "10px", flex: 1 }}>
              <View>
                <View style={{ flexDirection: "row", gap: "6px", alignItems: "center" }}>
                  <Text
                    variant="titleLarge"
                    style={{ color: theme[colorScheme].onSurface, fontFamily: "Roboto Serif" }}
                  >
                    {user.name}
                  </Text>
                  <Text
                    variant="titleSmall"
                    style={{ color: theme[colorScheme].onSurfaceDisabled, fontFamily: "Roboto Serif" }}
                  >
                    ({user.id})
                  </Text>
                </View>
                <Text
                  variant="bodyMedium"
                  style={{ color: theme[colorScheme].onSurfaceDisabled, fontFamily: "Roboto Serif" }}
                >
                  {user.username}
                </Text>
              </View>
              <Divider style={{ marginVertical: "8px" }} />
              <View style={{ gap: "2px" }}>
                <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurface }}>
                  {user.email}
                </Text>
                <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurface }}>
                  {user.address.street}, {user.address.city}
                </Text>
                <View style={{ flexDirection: "row", gap: "4px" }}>
                  <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurfaceDisabled }}>
                    ZIP
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurface }}>
                    {user.address.zipcode}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: "4px" }}>
                  <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurfaceDisabled }}>
                    Geo
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme[colorScheme].onSurface }}>
                    {user.address.geo.lat}, {user.address.geo.lng}
                  </Text>
                </View>
              </View>
            </Card.Content>
          </View>
        </TouchableOpacity>
      </Card>
    );
  });

  return userViews;
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cover: {
    aspectRatio: "1 / 1",
    height: "100%",
  },
});
