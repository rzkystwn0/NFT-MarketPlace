import Head from "next/head";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
import List from "../components/List";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import LandMind1 from "../components/LandMind1";
import LandMind2 from "../components/LandMind2";
import LandMind3 from "../components/LandMind3";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT MarketPlace</title>
      </Head>
      <NavBar />
      <Hero />
      <LandMind1 />
      <LandMind2 />
      <LandMind3 />
    </>
  );
}
