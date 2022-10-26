import React from 'react';
import "./dayView.css"

export default function dayView() {
  return (
    <div className="dayView-table">
      <table className="headers">
        <tr>
          <th>Exercise</th>
          <th>Weight(kg)</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Complete</th>
        </tr>
        <tr>
          <td>Bench press</td>
          <td>100</td>
          <td>4</td>
          <td>15</td>
          <td>{<input type="checkbox"/>}</td>
        </tr>
      </table>
    </div>
  );
}
