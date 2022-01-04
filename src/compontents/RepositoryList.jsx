import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const renderItem = ({ item }) => (
  <RepositoryItem
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    forksCount={item.forksCount}
    stargazersCount={item.stargazersCount}
    ratingAverage={item.ratingAverage}
    reviewCount={item.reviewCount}
    ownerAvatarUrl={item.ownerAvatarUrl}
  />
);

const RepositoryList = () => {
  const { data, error, loading } = useRepositories();
  if (loading) return <Text>loading..</Text>;
  return (
    <FlatList
      data={data.repositories.edges.map(({ node }) => node)}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;
