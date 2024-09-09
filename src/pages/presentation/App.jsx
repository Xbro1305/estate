import React, { useState } from "react";
import "./App.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const App = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = process.env.REACT_APP_BASE_URL;
  const [res, setRes] = useState();

  axios(api + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    presentation_id: id,
  }).then((response) => {
    setRes(response.data);
    console.log(response);
  });
  // .catch((err) => navigate("/404"));

  return (
    res && (
      <div className="main">
        {/* <img src={res.titleImg} className="titleImg" alt={res.title} /> */}
        <div className="title">
          <h1>{res.title}</h1>
          <h2>
            <ul>
              <li>{res.created_at_str}</li>
            </ul>
          </h2>
        </div>
        <div className="images">
          {res.photo_urls.map((img, i) => (
            <figure
              className="imgWrapper"
              style={{ backgroundImage: `url(${img})` }}
            >
              <img key={i} src={img} alt={res.title} />
            </figure>
          ))}
        </div>
      </div>
    )
  );
};
