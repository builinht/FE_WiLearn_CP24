import * as React from "react";
import {
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Paper,
  ListItemIcon,
} from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
const settings = [
  {
    name: "Profile",
    link: "/profile",
    icon: <AccountBoxIcon />,
  },
  // {
  //   name: "Dashboard",
  //   link: "/dashboard",
  //   icon: <DashboardIcon />,
  // },
  {
    name: "Logout",
    link: "/",
    icon: <LogoutIcon />,
  },
];
export default function AvatarUser() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
    console.log("logout complete");
  };

  const navigateToProfile = (e) => {
    e.preventDefault();
    console.log("profile loaded");
    navigate("profile");
  };
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="User Avatar"
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Paper elevation={0} sx={{ width: "100%", maxWidth: "100%" }}>
          {settings.map((setting) => (
            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              <Link
                onClick={
                  setting.name === "Logout" ? handleLogout : navigateToProfile
                }
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <ListItemIcon>
                  {setting.icon}
                  <Typography textAlign="center" paddingLeft={2}>
                    {setting.name}
                  </Typography>
                </ListItemIcon>
              </Link>
            </MenuItem>
          ))}
        </Paper>
      </Menu>
    </>
  );
}
