import { Header } from "@/components/header";
import { Products } from "@/components/products";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}
