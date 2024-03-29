import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Service(props) {
  const { name, description, img } = props.service;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
        />

        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
