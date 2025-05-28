import { useState, useEffect } from "react";
import axios from "axios";
export default function Main() {
  useEffect(
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      const Response = res.data;
      console.log(Response);
    })
  );
  return (
    <div className="container">
      <h1>ACTRESSES</h1>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img src="" alt="#" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
