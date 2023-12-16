import React, { useState } from "react";

import Home from "./Home";
import Live from "./Live";
import Reels from "./Reels";
import Shows from "./Shows";
import Explore from "./Explore";
import SavedVideos from "./SavedVideos";
import style from "../../../styles/Video.module.css";

export default function Videos({ selectedLink }) {
  return (
    <div className={style.FeedContainer}>
      {selectedLink === "Home" && (
        <Home />
      )}
      {selectedLink === "Live" && (
        <Live />
      )}
      {selectedLink === "Reels" && (
        <Reels />
      )}
      {selectedLink === "Shows" && (
        <Shows />
      )}
      {selectedLink === "Explore" && (
        <Explore />
      )}
      {selectedLink === "Saved Videos" && (
        <SavedVideos />
      )}
    </div>
  );
}