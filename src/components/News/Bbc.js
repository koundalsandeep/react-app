import React from "react";

const Bbc = ({ item }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-image">
        <h5>{item.title}</h5>
        <img className="card-img-top" src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
        <p className="card-text">{item.description}</p>
      </div>

      <div className="card-action mt-1">
        <a href={item.url} className="" rel="noreferrer" target="_blank">
          Read article
        </a>
      </div>
    </div>
  </div>
);

export default Bbc;
