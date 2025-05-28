import { useState, useEffect } from "react";
import axios from "axios";
export default function Main() {
  const [actresses, setActresses] = useState([]);
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      const response = res.data;
      setActresses(response);
    });
  }, []);
  return (
    <div className="container">
      <h1>ACTRESSES</h1>

      <div className="row">
        {actresses.map((actress) => {
          return (
            <>
              <div className="col-4">
                <div className="card">
                  <img src={actress.image} alt="" />
                  <div className="card-body">{actress.name}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
