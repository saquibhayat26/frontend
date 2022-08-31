import React from "react";

import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to={"/"}>
        <p className="go-back">GO BACK!</p>
      </Link>
    </div>
  );
}

export default Notfound;
