import React from "react";

const Gurdian = ({ item }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-image">
        <h5>{item.webTitle}</h5>
        <img
          className="card-img-top"
          src={item && item.fields && item.fields.thumbnail ? item.fields.thumbnail : ''}
          alt={item.webTitle}
        />
        <span className="card-title">Gurdian News</span>
        <p className="card-text">{item.description}</p>
      </div>

      <div className="card-action mt-1">
        <a href={item.webUrl} className="" rel="noreferrer" target="_blank">
          Read article
        </a>
      </div>
    </div>
  </div>
);

export default Gurdian;
