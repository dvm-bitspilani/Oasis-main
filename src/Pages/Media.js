import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import MediaCard from "../Components/MediaCard";
import SponzCSS from "../styles/Sponz.module.css";
import { partners } from "../MediaPartners.js";

function Partners() {
  const cards = partners.map((partner) => {
    return (
      <MediaCard name={partner.Name} link={partner.Link} img={partner.Logo} />
    );
  });

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };
  return (
    <div className={SponzCSS.container}>
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
      <div className={SponzCSS.title}>MEDIA PARTNERS</div>
      {cards}
    </div>
  );
}

export default Partners;
