import * as React from "react";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Menu.css";
import { a11yProps, TabPanel } from "./utils";

export function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <Link to="/" className="reactRouterLink">
                Домашняя страница
              </Link>
            }
            {...a11yProps(0)}
            style={{ padding: "12px 16px" }}
          />
          <Tab
            label={
              <Link to="/profile" className="reactRouterLink">
                Профиль
              </Link>
            }
            style={{ padding: "12px 16px" }}
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Link to="/chats" className="reactRouterLink">
                Чаты
              </Link>
            }
            style={{ padding: "12px 16px" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}
