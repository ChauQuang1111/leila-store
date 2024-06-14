import { revalidatePath } from "next/cache";

export const getCollections = async () => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections.json();
}

export const getCollectionDetails = async (collectionId: string) => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json();
}

export const getProducts = async () => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return await products.json();
}

export const getProductDetails = async (productId: string) => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json();
}

export const getSearchedProducts = async (query: string) => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json();
}

export const getOrders = async (customerId: string) => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json();
}

export const getRelatedProducts = async (productId: string) => {
  revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
  
  return await relatedProducts.json();
}
