import React from "react";
import satData
 from "./satData";
const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data) => (
        <tr key = {data.id}>
          <td>{data.name}</td>
          <td>{data.satelliteType}</td>
          <td>{data.launchDate}</td>

{/* I am not sure if I got this one correct.  it looks so clean and I love it but still not
          certain I get this right */}

          <td>{data.operational ? "Active" : "Inactive "}</td>
        </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;