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

export function ChatList({ chats }) {
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
      {/* {chats.map((chat) => {
        return (
          <Link to={ROUTES.CHAT}>
            <ListItemButton key={chat.id}>
              <Avatar alt={chat.name} src={chat.avatar} />
              <ListItemText primary={chat.name} />
            </ListItemButton>
          </Link>
        );
      })} */}

      {chats.map((chat) => {
        console.log(chat.id);
        return (
          <ListItemButton key={chat.id}>
            <Avatar alt={chat.name} src={chat.avatar} />
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
