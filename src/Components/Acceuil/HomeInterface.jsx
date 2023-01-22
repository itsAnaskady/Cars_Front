import React from "react";
import "./style/HomeInterface.css";

import { motion } from "framer-motion/dist/framer-motion";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function HomeInterface() {
  const myRef = useRef(null);
  const executeScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home">
        <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={{ opacity: 1.1, y: 95 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileFocus={{ backgroundColor: "#dfc482" }}
          className="Dev-Card"
        ></motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 60 }}
          transition={{ type: "spring", duration: 2, stiffness: 50 }}
        >
          <span>Location</span> Voiture
        </motion.h1>
        <Typewriter
          options={{
            strings: [
              "IDRISS BOUGARRANI",
              "YASSINE BOUFNICHEL",
              "ANAS BENKADI",
              "MOUHSIN EL MAJDOUBY",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <motion.div
          style={{ zIndex: 2 }}
          initial={{ y: 0, scale: 1 }}
          animate={{ y: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 50, repeat: Infinity }}
          onClick={executeScroll}
        >
          <KeyboardDoubleArrowDownIcon
            style={{
              fill: "#ffffff",
              fontSize: "3rem",
              marginTop: "100px",
              zIndex: 2,
              cursor: "pointer",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}

export default HomeInterface;
