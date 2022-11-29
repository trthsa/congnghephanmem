import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import {
  Description,
  LocalShipping,
  People,
  QrCode,
  ShoppingCart
} from "@mui/icons-material";

type Anchor = "top" | "left" | "bottom" | "right";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  interface ITongQuanItemList {
    icon: any;
    title: string;
  }
  const tongquan: ITongQuanItemList[] = [
    { icon: <SpeedIcon />, title: "Trang chủ" },
    { icon: <ShoppingCart />, title: "Đơn hàng" },
    { icon: <QrCode />, title: "Sản phẩm" },
    { icon: <People />, title: "Người dùng" },
    { icon: <LocalShipping />, title: "Nhập kho" },
    { icon: <Description />, title: "Báo cáo" }
  ];
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {tongquan.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
