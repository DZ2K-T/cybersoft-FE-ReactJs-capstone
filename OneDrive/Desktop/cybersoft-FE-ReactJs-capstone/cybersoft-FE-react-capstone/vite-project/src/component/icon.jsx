import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUser } from "@fortawesome/free-regular-svg-icons"; // Regular icon
import { faCoffee, faTv } from "@fortawesome/free-solid-svg-icons";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Icon = ({ icon, size = "1x", color }) => {
  return <FontAwesomeIcon icon={icon} size={size} style={color} />;
};
export const Icons = {
  solid: {
    coffee: faCoffee,
    user: faUser,
  },
  regular: {
    file: faFile,
  },
  brands: {
    facebook: faFacebook,
  },
};
export default Icon;
