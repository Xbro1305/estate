import React, { useState } from "react";
import "./App.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import img from "../../images/photo_2024-09-04_20-35-52.jpg";
import titleImg from "../../images/titleimg.jpg";

export const App = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API_URL;
  const [res, setRes] = useState({
    title: "1-BR Marina Living",
    date: "2021-07-01",
    images: [img, img, img, img, img, img],
    titleImg,
  });

  // axios(api + id)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       setRes(response.data);
  //     }
  //   })
  //   .catch((err) => navigate("/404"));

  return (
    <div className="main">
      <img src={res.titleImg} className="titleImg" alt={res.title} />
      <div className="title">
        <h1>{res.title}</h1>
        <h2>
          <ul>
            <li>{res.date}</li>
          </ul>
        </h2>
      </div>
      <div className="images">
        {res.images.map((img, i) => (
          <figure
            className="imgWrapper"
            style={{ backgroundImage: `url(${img})` }}
          >
            <img key={i} src={img} alt={res.title} />
          </figure>
        ))}
      </div>
    </div>
  );
};
