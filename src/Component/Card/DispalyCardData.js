import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const DispalyCardData = ({ allData }) => {
  const { name, type, language, runtime } = allData;
  const imageUrl =
    allData.image && allData.image.medium
      ? allData.image.medium
      : "default_image_url";

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          marginBottom: "1rem",
          borderColor: "#0dcaf0",
          backgroundColor: "#9FA6B2",
        }}
      >
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {type} and {language}
          </Card.Text>
          <Card.Title>Runtime: {runtime}</Card.Title>
          <Link to={`/summary/${allData.id}`}>
            <Button
              style={{
                backgroundColor: "#0dcaf0",
                borderColor: "#0dcaf0",
                color: "black",
              }}
            >
              Show Summary
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DispalyCardData;
