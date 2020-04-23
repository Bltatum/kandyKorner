import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location_name">{location.name} Location</h3>
    <div className="location_address">Adress: {location.address}</div>
    <div className="location_squareFeet">Sq.Ft.: {location.squareFeet}</div>
    <div className="location_handicapAcc">
      Handicap Accessible: {location.handicapAcc === "true" ? "YES" : "NO"}
    </div>
  </section>
);
