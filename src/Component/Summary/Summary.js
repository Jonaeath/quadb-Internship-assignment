import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BookingFrom from "./BookingFrom";

const SquareBox = {
  border: "1px solid #0dcaf0",
  marginLeft: "50px",
  marginRight: "50px",
  padding: "10px",
  borderRadius: "8px",
};

const Summary = () => {
  const { id } = useParams();

  const [showData, setShowData] = useState(null);
  const [mBookingFrom, setBookingForm] = useState(false);

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
      });
  }, [id]);

  if (!showData) {
    return <div>Loading...</div>;
  }

  const { name, summary } = showData;

  const handleBookTicket = () => {
    setBookingForm(true);
  };

  const handleCloseForm = () => {
    setBookingForm(false);
  };

  return (
    <div style={{ ...SquareBox }}>
      <h2>Movie Nmae: {name}</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />

      <Button
        style={{
          backgroundColor: "#0dcaf0",
          borderColor: "#0dcaf0",
          color: "black",
        }}
        onClick={handleBookTicket}
      >
        Book a Movie Ticket
      </Button>

      {mBookingFrom && (
        <BookingFrom movieName={name} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default Summary;
