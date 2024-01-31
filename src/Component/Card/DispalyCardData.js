import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DispalyCardData = ({ allData }) => {
  const { name, type, language, runtime } = allData;
  const imageUrl =
    allData.image && allData.image.medium
      ? allData.image.medium
      : "default_image_url";

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DispalyCardData;
