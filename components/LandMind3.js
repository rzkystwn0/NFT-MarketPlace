import React from "react";
import Button from "./Button";
import Card from "./Card";
import List from "./List";

function LandMind3() {
  return (
    <div className="container my-20 ">
      <p className="exo font-bold  text-white text-center text-2xl sm:text-5xl">! Acre + 4000 Sq ft Of Land Metavarce House</p>
      <div className="grid sm:grid-cols-3 grid-cols-1 mt-16 ">
        <div>
          <Card img="card3.png" cls="mx-auto" />
        </div>
        <div>
          <Card img="card4.png" cls="mt-24 mx-auto" />
        </div>
        <div>
          <Card img="card5.png" cls="mx-auto sm:mt-0 mt-20" />
        </div>
      </div>
      <p className="exo font-bold  text-white text-center text-2xl sm:text-5xl my-20">400 NFTs</p>
      <div className="mx-auto w-11/12 sm:w-6/12 ">
        <List list={["1 Acre of land +4000 sq feet metaverse house", "Walk around your house and land on the metaverse", "Invite friends to your house and sell your house on opensea"]} />
      </div>
      <div className="flex justify-center mt-12" >
        <Button linear={true} text="Connect Wallet" />
      </div>
    </div>
  );
}

export default LandMind3;
