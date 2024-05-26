import { revalidatePath } from "next/cache"

export const getCollections = async()=>{
    revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
    return await collections.json()

}

export const getProducts = async()=>{
    revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await product.json()
}

export const getProductDetails = async(productId: string)=>{
    revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    return await product.json()
}

export const getRelatedProducts = async (productId: string) => {
    revalidatePath(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json()
  }