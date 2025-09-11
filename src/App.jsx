import { createContext, useState } from "react";

import Header from "./Header";
import SchoolCatalog from "./SchoolCatalog";
import ClassSchedule from "./ClassSchedule";

// context provider -- AppContext
// solves prop drilling, so that data can be passed through components
export const AppContext = createContext();

export default function App() {
  // useState --> initial value (false)
  const [enroll, setEnroll] = useState(false);
  // useState --> initial value ([] (empty array))
  const [enrolledClasses, setEnrolledClasses] = useState([])
  
    function studentEnroll(course) {
        // add class to the enrolledClasses array
        // spread operator --> takes the previous classes, and creates a new array with the new item added
        setEnroll(true);
        setEnrolledClasses(beforeState => [...beforeState, course]);
    }

    function studentDrop(course) {
        // removes class from the enrolledClasses array
        // compare the course to drop with the courses in the enrolledClasses list
        setEnroll(false);
        setEnrolledClasses(beforeState => {
            return beforeState.filter(
                enrolledClasses => enrolledClasses !== course
            );
        })
    }

// Context provider --> solves prop drilling --> wraps components
// Data is accessible by any component defined in the context
  return (
    <AppContext.Provider value={{ enroll, studentEnroll, studentDrop, enrolledClasses }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </AppContext.Provider>
  );
}
