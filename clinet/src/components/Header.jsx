import React from "react";

import { AppBar, Toolbar, Box, InputBase, styled } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
  Search,
} from "@mui/icons-material";

import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)`
  background: #f5f5f5;
  box-shadow: none;
`;
const SearchWrapper = styled(Box)`
  background: #eaf1fb;
  margin-left: 80px;
  border-radius: 8px;
  min-width: 690px;
  max-width: 720px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100%;
  }
`;

const OptionsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  & > svg {
    margin-left: 20px;
  }
`;

export default function Header({toggleDrawer}) {
  return (
    <StyledAppBar position="static">
    <Toolbar>
      <MenuIcon color="action" onClick={toggleDrawer} />
      <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
      <SearchWrapper>
        <Search color="action" />
        <InputBase />
        <Tune color="action" />
      </SearchWrapper>

      <OptionsWrapper>
        <HelpOutlineOutlined color="action" />
        <SettingsOutlined color="action" />
        <AppsOutlined color="action" />
        <AccountCircleOutlined color="action" />
      </OptionsWrapper>
    </Toolbar>
  </StyledAppBar>
  );

}
