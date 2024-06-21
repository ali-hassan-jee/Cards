import React from "react";
import { data } from "./Components/data";
import { Cards } from "./Components/Cards";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <Cards
            key={product.id}
            url={product.url}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
