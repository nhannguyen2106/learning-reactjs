import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "../common/Button";

const ProductItem = ({ image, name, price }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ "object-fit": "fill" }}
          height="300"
          image={image}
          alt={name}
        />
        <CardContent style={{ "text-align": "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ "font-weight": "700" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" font-weight="800">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button title="Add to cart" />
      </CardActions>
    </Card>
  );
};

ProductItem.propTypes = {};

export default ProductItem;
