import React, { FC } from "react";
import { IcChip, IcTooltip, SlottedSVG } from "@ukic/react";

import "@ukic/fonts/dist/fonts.css";
import "@ukic/react/dist/core/core.css";
import "@ukic/react/dist/core/normalize.css";

const Tooltip: FC = () => (
  <IcTooltip target="small-chip" label="An espresso-based drink">
    <IcChip id="small-chip" label="Americano" size="small">
      <SlottedSVG
        slot="icon"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
      </SlottedSVG>
    </IcChip>
  </IcTooltip>
);
export default Tooltip;
