import React, { useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import List from "./List";
import { motion, useInView } from "framer-motion";

function LandMind1() {

  const transition = {
    duration: 2,
  };

  const variant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };


  return (
    <div className="container flex sm:flex-row flex-col sm:mt-40 mt-20">
      <div className="sm:w-6/12 w-11/12 flex justify-center mx-auto order-last sm:order-first" >
        <motion.div initial="hidden" transition={transition} whileInView="visible" variants={variant}>
          <Card img="card1.png" />
        </motion.div>
      </div>
      <div className="sm:w-6/12 w-11/12 mx-auto my-8 sm:my-0">
        <p className="exo font-bold text-2xl sm:text-5xl text-white w-8/12 leading-snug sm:text-left text-center mx-auto sm:mx-0">1 cr of land mint price 3000 NFT’s</p>
        <div className="my-12">
          <List list={["1 Acre of digital land that you will own", "Walk around your land in the metaverse", "Invite friends and resell your land on opensea"]} />
        </div>
        <div className="flex sm:justify-start justify-center">
          <Button linear={true} text="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}

export default LandMind1;
