import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Summary;
