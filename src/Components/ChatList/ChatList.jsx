import faker from "faker";
import "./ChatList.css";

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";

export function NestedList() {
  const chatList = [
    { id: faker.datatype.uuid(), name: "VoFront", ava: "/img/1.jpg" },
    { id: faker.datatype.uuid(), name: "ReactJS", ava: "/img/2.jpg" },
    {
      id: faker.datatype.uuid(),
      name: "Discoveer | Животные| Фильмы",
      ava: "/img/3.jpg",
    },
    { id: faker.datatype.uuid(), name: "Naked Space", ava: "/img/4.jpg" },
    {
      id: faker.datatype.uuid(),
      name: "Из истории русской культуры",
      ava: "/img/5.jpg",
    },
    { id: faker.datatype.uuid(), name: "Bloody Animals", ava: "/img/6.jpg" },
    { id: faker.datatype.uuid(), name: "Почему?", ava: "/img/7.jpg" },
    { id: faker.datatype.uuid(), name: "InvestFuture", ava: "/img/8.jpg" },
    { id: faker.datatype.uuid(), name: "СберИнвестиции", ava: "/img/9.jpg" },
    { id: faker.datatype.uuid(), name: "Физика Просто", ava: "/img/10.jpg" },
    { id: faker.datatype.uuid(), name: "Real Nature", ava: "/img/11.jpg" },
  ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      className="chatList"
      sx={{
        width: "100%",
        bgcolor: "whitesmoke",
        paddingLeft: "30px",
        boxSizing: "border-box",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {chatList.map((chat) => {
        return (
          <ListItemButton key={chat.id}>
            <Avatar alt={chat.name} src={chat.ava} />
            <ListItemText primary={chat.name} />
          </ListItemButton>
        );
      })}

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Архив" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Избранное" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
