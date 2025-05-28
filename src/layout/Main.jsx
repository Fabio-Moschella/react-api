import { useState, useEffect } from "react";
import axios from "axios";
export default function Main() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      const responseActress = res.data;
      setActresses(responseActress);
    });
  }, []);
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      const responseActor = res.data;
      setActors(responseActor);
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

                  <div className="card-body bg-light ">
                    <div className="card-title mb-3">
                      <h1 className="fs-2 fw-bold text-info">{actress.name}</h1>
                    </div>
                    <div className="card-subtitle mb-3 text-info">
                      {actress.birth_year}
                    </div>
                    <div className="card-text mb-3  text-info">
                      {actress.nationality}
                    </div>

                    <div className="card-text mb-3 text-info">
                      {actress.biography}
                    </div>
                    <div className="card-text  text-info mb-3">
                      {actress.awards}
                    </div>
                    <div className="card-text  text-info">
                      {actress.death_year}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {actors.map((actor) => {
          return (
            <>
              <div className="col-4 my-3">
                <div className="card h-100 g-2 ">
                  <img className="card-img" src={actor.image} alt="" />

                  <div className="card-body bg-light ">
                    <div className="card-title mb-3">
                      <h1 className="fs-2 fw-bold text-info">{actor.name}</h1>
                    </div>
                    <div className="card-subtitle mb-3 text-info">
                      {actor.birth_year}
                    </div>
                    <div className="card-text mb-3  text-info">
                      {actor.nationality}
                    </div>

                    <div className="card-text mb-3 text-info">
                      {actor.biography}
                    </div>
                    <div className="card-text  text-info mb-3">
                      {actor.awards}
                    </div>
                    <div className="card-text  text-info">
                      {actor.death_year}
                    </div>
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
