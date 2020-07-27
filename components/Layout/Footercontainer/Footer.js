import React from "react";
import Footertop from "./Footercomponents/Footertop";
import Footerbottom from "./Footercomponents/Footerbottom";

export default function Footer() {
  return (
    <div>
      <div className="footer__container_wrapper">
        <Footertop />
        <Footerbottom />
      </div>
    </div>
  );
}
