import React, { useState, useEffect } from "react";

export default function SchoolCatalog() {
    const [course, setCourse] = useState([]);
    const [filter, setFilter] = useState("");
    /*
    const filteredData = data.filter((item) => item.startsWith(filter));
    const [loading, setLoading] = useState(true);
    */

    useEffect(() => {
        fetch("/api/courses.json")
        .then((response) => response.json())
        .then((data) => setCourse(data))
    }, []);

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Search" />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead> 
        <tbody>
            {course.map((course) => (
            <tr>
                <td>{course.trimester}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>{course.semesterCredits}</td>
                <td>{course.totalClockHours}</td>
                <td><button>Enroll</button></td>
            </tr>
        ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
