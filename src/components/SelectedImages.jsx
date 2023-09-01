import { Close } from "@mui/icons-material";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import React from "react";

export const SelectedImages = ({ item }) => {
  return (
    <Card sx={{ height: "20vh", width: "10vw", zIndex: 9 }}>
      <CardMedia
        component="img"
        image={item}
        sx={{ height: "20vh", width: "10vw" }}
      />
    </Card>
  );
};

{
  /* <div style={{ height: "20vh", width: "10vw" }} id={item}>
<CardActions
  sx={{ zIndex: 10, display: "flex", justifyContent: "end" }}
  onClick={onClick}
>
  <IconButton color="error">
    <Close />
  </IconButton>
</CardActions>
<Card sx={{ height: "20vh", width: "10vw", zIndex: 9 }}>
  <CardMedia
    component="img"
    image={item}
    sx={{ height: "20vh", width: "10vw" }}
  />
</Card>
</div> */
}
