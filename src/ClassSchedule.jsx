import { useContext } from 'react';
import { AppContext } from './App';

// Class schedule component
export default function ClassSchedule() {

// context to access the enrolled classes and drop functionality
const { enrolledClasses } = useContext(AppContext);
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
            {/* Return the enrolled classes in the class schedule */}
            {enrolledClasses.map((item) => (
                <tr key={item.courseNumber}>
                    <td>{item.courseNumber}</td>
                    <td>{item.courseName}</td>
                    <td>
                        <button onClick={() => studentDrop(item)}>Drop</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
