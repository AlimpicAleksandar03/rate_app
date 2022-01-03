import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Text from "./Text";
const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 10,
  },
  language: {
    backgroundColor: "#0366d6",
    padding: 5,
    borderRadius: 5,
    maxWidth: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const abbreviateNumber = (n) => (n < 1000 ? n : `${(n / 1000).toFixed(1)}k`);

const RepositoryItem = ({
  fullName,
  description,
  ratingAverage,
  stargazersCount,
  language,
  forksCount,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={{ marginBottom: 20, backgroundColor: "white" }}>
      <View style={[{ display: "flex", flexDirection: "row", padding: 10 }]}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.logo} />
        <View style={{ margin: 5 }}>
          <Text>{fullName}</Text>
          <Text>{description}</Text>
          <View style={styles.language}>
            <Text style={{ color: "white" }}>{language}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text fontWeight="bold">{abbreviateNumber(stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text fontWeight="bold">{abbreviateNumber(forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text fontWeight="bold">{abbreviateNumber(reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text fontWeight="bold">{abbreviateNumber(ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};
export default RepositoryItem;
