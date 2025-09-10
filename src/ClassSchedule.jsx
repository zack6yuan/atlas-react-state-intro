import { useState, useContext } from 'react';
import { AppContext } from './App';

export default function ClassSchedule() {

const { studentDrop } = useContext(AppContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OS1000</td>
            <td>Fundamentals of Open Source Operating Systems</td>
            <td>
              <button onClick={studentDrop}>Drop</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
