import { EmptyState, ErrorState, Loading, ScreenContainer } from '@atoms'
import { useThemeMode } from '@hooks'
import { HomeHeader, ProductCard } from '@molecules'
import { getEmail } from '@storage'
import { api } from '@utils'
import React, { useCallback, useEffect, useState } from 'react'

import { FlatList, RefreshControl, View } from 'react-native'

export default function HomeScreen({ navigation }: any) {
  const { colors } = useThemeMode()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    loadEmail()
    fetchProducts()
  }, [])

  const loadEmail = async () => {
    const savedEmail = await getEmail()

    if (savedEmail) {
      setEmail(savedEmail)
    }
  }

  const fetchProducts = async () => {
    try {
      setError('')

      const { data } = await api.get('/products')

      setProducts(data.products)
    } catch (error) {
      setError('Gagal mengambil data')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const onRefresh = () => {
    setRefreshing(true)
    fetchProducts()
  }

  const renderItem = useCallback(({ item }: any) => {
    return (
      <ProductCard
        item={item}
        onPress={() =>
          navigation.navigate('Detail', {
            product: item,
          })
        }
      />
    )
  }, [])

  if (loading) return <Loading />

  return (
    <ScreenContainer>
      <HomeHeader navigation={navigation} email={email} />

      {error && <ErrorState message={error} />}

      <FlatList
        data={products}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyState />}
        ItemSeparatorComponent={
          <View style={{ height: 4, backgroundColor: colors.placeholder }} />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </ScreenContainer>
  )
}
