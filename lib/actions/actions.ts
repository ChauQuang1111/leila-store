export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`,{cache: "no-cache"})
  return await collections.json();
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,{cache: "no-cache"})
  return await collection.json();
}

export const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {cache: "no-cache"});
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
}

export const getProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, {cache: "no-cache"});
    if (!response.ok) {
      if (response.status === 404) {
        // Product not found, return null or handle as needed
        return null;
      }
      throw new Error('Failed to fetch product details');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product details for ID: ${productId}`, error);
    // Return null in case of any error
    return null;
  }
}


export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`, {cache: "no-cache"})
  return await searchedProducts.json();
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`, {cache: "no-cache"})
  return await orders.json();
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`, {cache: "no-cache"});
  
  return await relatedProducts.json();
}
