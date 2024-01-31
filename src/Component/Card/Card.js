import React, { useEffect, useState } from "react";
import DispalyCardData from "./DispalyCardData";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((allData) => (
          <div className="col-md-4" key={allData.show.id}>
            <DispalyCardData allData={allData.show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
