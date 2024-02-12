import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Component/Head/Header";
import Welcome from "@/Component/Main/Welcome";
import Information from "@/Component/Main/Information";
import Coffees from "@/Component/Main/Coffees";
import Contact from "@/Component/Main/Contact";
import Footer from "@/Component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header>
        <Header />
      </Header>
      <main className={`${styles.main} ${inter.className}`}>
        <Welcome />
        <Information />
        <Coffees />
        <Contact />
      </main>
      <footer><Footer /></footer>
    </>
  );
}
