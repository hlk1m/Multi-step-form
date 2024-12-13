import React from "react";
import styled from "styled-components";
import sdsds from "./assets/images/bg-sidebar-desktop.svg";

const Wrap = styled.nav`
  background-image: url("/assets/images/bg-sidebar-desktop.svg");
  width: 50vw;
  height: 500px;
`;

function Nav() {
  return <Wrap></Wrap>;
}

export default Nav;
