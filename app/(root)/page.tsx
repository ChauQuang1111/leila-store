import Collections from "@/components/Collections";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home(){
  return(
    <>
    <Image src="/banner.jpg" alt="banner" width={2000} height={500} className="w-screen" />
    <Collections />
    <ProductList />
    </>
);
}

export const dynamic="force-dynamic";