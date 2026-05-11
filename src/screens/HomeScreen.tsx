import React, {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    FlatList,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from "react-native";


import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import ProductCard from "../components/ProductCard";
import ScreenContainer from "../components/ScreenContainer";

import {
    getEmail,
    removeToken,
} from "../storage/auth.storage";
import Loading from "../components/ Loading";
import api from "../utils/axios";

export default function HomeScreen({
  navigation,
}: any) {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  const [email, setEmail] =
    useState("");

  useEffect(() => {
    loadEmail();
    fetchProducts();
  }, []);

  const loadEmail = async () => {
    const savedEmail =
      await getEmail();

    if (savedEmail) {
      setEmail(savedEmail);
    }
  };

  const fetchProducts =
    async () => {
      try {
        setError("");

        const response =
          await api.get("/products");

        setProducts(
          response.data.products
        );
      } catch (error) {
        setError(
          "Gagal mengambil data"
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts();
  };

  const logout = async () => {
    await removeToken();

    navigation.replace("Login");
  };

  const renderItem = useCallback(
    ({ item }: any) => {
      return (
        <ProductCard
          item={item}
          onPress={() =>
            navigation.navigate(
              "Detail",
              {
                product: item,
              }
            )
          }
        />
      );
    },
    []
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
      />
    );
  }

  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginBottom: 8,
          }}
        >
          {email}
        </Text>

        <TouchableOpacity
          onPress={logout}
          style={{
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "red",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>

        <FlatList
          data={products}
          keyExtractor={(item: any) =>
            item.id.toString()
          }
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyState />
          }
          refreshControl={
            <RefreshControl
              refreshing={
                refreshing
              }
              onRefresh={
                onRefresh
              }
            />
          }
        />
      </View>
    </ScreenContainer>
  );
}