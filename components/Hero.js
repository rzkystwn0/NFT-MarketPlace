import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Hero() {
  const initial = {
    y: 100,
    opacity: 0,
  };

  const animate = {
    y: 0,
    opacity: 1,
  };

  const transition = {
    duration: 2,
  };

  return (
    <div className="">
      <div className="sm:top-0 sm:left-0 sm:right-0 sm:mt-auto mt-36">
        <div className="container sm:flex">
          <div className="sm:w-6/12 flex items-center mx-3">
            <div className="my-6">
              <motion.div initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
                <h1 className="exo font-bold sm:text-7xl text-3xl text-white leading-snug text-center sm:text-left">
                  Discover Rare Collections Of Art & <span className="bg-gradient-to-r from-[#DF25E1] to-[#5117F4] px-4">NFT’s</span>
                </h1>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                <p className="text-white DM-Sans sm:text-2xl sm:w-auto w-10/12 my-6  text-xs text-center sm:text-left mx-auto ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              </motion.div>
              <div className="flex justify-between w-11/12 sm:mx-0 mx-auto sm:w-5/12">
                <Button linear={true} text="Explore" />
                <Button text="Create" />
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 bg-gradient-to-bl from-[#DD24E1] to-[#5117F4] sm:h-screen py-3 sm:pt-16">
            <motion.div initial={initial} animate={animate} transition={transition}>
              <img src="hero.png" alt="hero" className="mx-auto w-[260px] sm:w-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
