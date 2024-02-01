import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div style={{ ...SquareBox }}>
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Summary;
