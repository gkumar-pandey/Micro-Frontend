import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <>
      <Card style={{ width: "300px" }}>
        <div className="p-1" style={{ widht: "200px", height: "200px" }}>
          <Card.Img
            variant="top"
            style={{ height: "100%", width: "100%" }}
            src={image}
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
