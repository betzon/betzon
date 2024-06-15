import Image from "next/image";
import React from "react";

export default function ImageBackground({ source, middleComponent }) {
  return (
    <>
      <Image
        src={source}
        fill
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
      {middleComponent}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor:
            "rgba(0, 0, 0, 0.8)" /* Adjust the opacity value here */,
        }}
      />
    </>
  );
}
