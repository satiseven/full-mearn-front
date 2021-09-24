import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
w-full
max-w-2xl
flex
items-center
flex-row
lg:pr-12
lg:pl-12
justify-between

`}
`;
export function Navbar() {
  return <NavbarContainer></NavbarContainer>;
}
