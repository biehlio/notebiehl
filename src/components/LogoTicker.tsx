"use client";

import Ticker from "framer-motion-ticker";
import React from "react";

export default function LogoTicker() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];

  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
      className="py-10"
    >
      <Ticker
        duration={15}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: "5px",
              height: "50px",
              width: "200px",
            }}
          />
        ))}
      </Ticker>
    </div>
  );
}
