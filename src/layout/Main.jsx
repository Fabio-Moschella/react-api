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
              <div className="col-4 my-3">
                <div className="card h-100 g-2 ">
                  <img className="card-img" src={actress.image} alt="" />

                  <div className="card-body ">
                    <div className="card-title mb-3">
                      <h1 className="fs-2 fw-bold">{actress.name}</h1>
                    </div>
                    <div className="card-subtitle mb-3">
                      {actress.birth_year}
                    </div>
                    <div className="card-text mb-3 ">{actress.nationality}</div>

                    <div className="card-text mb-3">{actress.biography}</div>
                    <div className="card-text ">{actress.awards}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
