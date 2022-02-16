import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardItem({ product, onAddToCartClicked, cardInfo }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '332px' }}>
      <Link to={'/product/' + cardInfo.id}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={cardInfo.image} alt="Shoes" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardInfo.info}
            </Typography>
            <Typography component="p" mt={2}>
              {cardInfo.price}&euro;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={onAddToCartClicked}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
