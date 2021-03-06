import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

type Props = {
  cardInfo: {
    id: number;
    quantity: number,
    title: string,
    info: string,
    price: number,
    image: string,
    size: string,
    color: string,
    discount: number,
    inventory: number,
  };
  // eslint-disable-next-line react/no-unused-prop-types
  onAddToCartClicked: () => void;
}

export default function CardItem({ cardInfo }: Props) {
  const dispatch = useDispatch();
  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '332px',
    }}
    >
      <Link to={`/product/${cardInfo.id}`}>
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
              {cardInfo.price}
              &euro;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(
              addToCart({
                id: cardInfo.id,
                quantity: 1,
                title: cardInfo.title,
                info: cardInfo.info,
                price: cardInfo.price,
                image: cardInfo.image,
                size: cardInfo.size,
                color: cardInfo.color,
                discount: cardInfo.discount,
                inventory: cardInfo.inventory,
              }),
            );
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
