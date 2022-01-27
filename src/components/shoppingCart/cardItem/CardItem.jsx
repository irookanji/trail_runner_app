import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '332px' }}>
      <Link to={'/product/' + props.cardInfo.id}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={props.cardInfo.image} alt="Shoes" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.cardInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.cardInfo.info}
            </Typography>
            <Typography component="p" mt={2}>
              {props.cardInfo.price}&euro;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
