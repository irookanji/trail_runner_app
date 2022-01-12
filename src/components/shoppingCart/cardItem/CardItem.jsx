import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.cardInfo.image}
          alt="Shoes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.cardInfo.info}
          </Typography>
          <Typography mt={2}>{props.cardInfo.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
