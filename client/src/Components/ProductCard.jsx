import React from 'react';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';

const ProductCard = ({item}) => {
    return (
      
        <Card>
          <CardHeader avatar={
            <Avatar sx={{bgcolor:'secondary.main'}}>{item.name[0].toUpperCase()}</Avatar>
          }
          title={item.name}
          titleTypographyProps={{
            sx:{
                fontWeight:'bold',
                color:'primary.main'
            }
          }}
          ></CardHeader>
          <CardMedia
            component="img"
            height="140"
            image={item.pictureUrl}
            sx={{objectFit:'contain', bgcolor:'primary.light'}}
          />
          <CardContent>
            <Typography gutterBottom color='secondary' variant="h5">
              Rs.{(item.price/ 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.brand} / {item.type}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      
    );
};

export default ProductCard;