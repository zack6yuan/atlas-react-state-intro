import { useState, useEffect, useContext } from "react";
import { AppContext } from "./App";

// define number of items that are shown on the page
const PAGE_SIZE = 5;

export default function SchoolCatalog() {
  /*
    state --> component's memory, causes UI to update when changed
    declare state using destructuring + useState hook
    syntax --> [state, function updating the value] = useState(initial value)
*/
  const [course, setCourse] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const { studentEnroll  } = useContext(AppContext);

  /*
    fetch data from api with useEffect
    .then --> fetch happens asynchronously
    api response --> JSON data
    setCourse() --> update state of "course"
  */
  useEffect(() => {
    fetch("/api/courses.json")
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, []);

  // filter data based on filter value
  const filteredData = course.filter((item) => item.courseName.toLowerCase().startsWith(filter));

  // sort data on click of the header

  // array slice method --> selects a subset of the course array
  // PAGE_SIZE ---> how many items are displayed on the page, defined at the top
  const currentPage = filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  /*
    disable buttons for previous and next
    first page --> previous disabled
    last page --> next disabled
  */
  const hasMore = filteredData.length > page * PAGE_SIZE;
  const hasLess = page > 1;

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
          {currentPage.map((item) => (
            <tr key={item.courseNumber}>
              <td>{item.trimester}</td>
              <td>{item.courseNumber}</td>
              <td>{item.courseName}</td>
              <td>{item.semesterCredits}</td>
              <td>{item.totalClockHours}</td>
              <td>
                <button onClick={studentEnroll}>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={!hasLess} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!hasMore} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

