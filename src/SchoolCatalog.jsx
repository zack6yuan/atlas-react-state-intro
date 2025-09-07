import { useState, useEffect } from "react";

export default function SchoolCatalog() {
  /*
    state --> component's memory, causes UI to update when changed
    declare state using destructuring + useState hook
    syntax --> [state, function updating the value] = useState(initial value)
*/
  const [course, setCourse] = useState([]);
  const [filter, setFilter] = useState("");

  // fetch data from api with useEffect
  useEffect(() => {
    fetch("/api/courses.json")
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, []);

  // filter data based on filter value
  const filteredData = course.filter((item) =>
    item.toString().startsWith(filter),
  );

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
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
          {filteredData.map((item) => (
            <tr key={item.courseNumber}>
              <td>{item.trimester}</td>
              <td>{item.courseNumber}</td>
              <td>{item.courseName}</td>
              <td>{item.semesterCredits}</td>
              <td>{item.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
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
