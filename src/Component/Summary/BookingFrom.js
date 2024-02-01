import React from "react";

const BookingFrom = ({ movieName, movieLanguage, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #0dcaf0",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <h3>Book a Movie Ticket</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name:
            <input type="text" value={movieName} readOnly />
          </label>
          <label>
            Movie Language:
            <input type="text" value={movieLanguage} readOnly />
          </label>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#0dcaf0",
              borderColor: "#0dcaf0",
              color: "black",
            }}
          >
            Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFrom;
