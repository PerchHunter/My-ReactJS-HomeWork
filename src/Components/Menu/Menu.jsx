import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import "./Menu.css";
import { Profile } from "../Application_Pages/Profile";
import { Home } from "../Application_Pages/Home";
import { Chats } from "../Application_Pages/Chats";

import { CHATLIST, ROUTES } from "./constants.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
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

      <Switch>
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
        <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
        <Route exact path={ROUTES.CHATS} render={() => <Chats />} />
        {/* CHAT - параметр URL */}
        <Route
          exact
          path={ROUTES.CHAT}
          render={() => <Chats chats={CHATLIST} />}
        />
        <Route path={ROUTES.NO_CHAT}>
          <h1>Такого чата не существует</h1>
        </Route>
        <Route path={ROUTES.NOT_FOUND}>
          <h1>404 Страница не найдена</h1>
        </Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND}></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
