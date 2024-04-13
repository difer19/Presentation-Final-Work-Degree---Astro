import React from "react";
import {Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <Image
      isZoomed
      height={props.height}
      width={props.width} 
      alt={props.alt}
      src={props.url}
    />
  );
}
