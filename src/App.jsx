import { createContext, useState } from "react";

import Header from "./Header";
import SchoolCatalog from "./SchoolCatalog";
import ClassSchedule from "./ClassSchedule";

// context provider -- AppContext
export const AppContext = createContext();

export default function App() {
  // useState --> initial value (false)
  const [enroll, setEnroll] = useState(false);
  // useState --> initial value ([] (empty array))
  const [enrolledClasses, setEnrolledClasses] = useState([])

    function studentEnroll(course) {
        // add class to the enrolledClasses array
        // spread operator --> takes the previous classes, and creates a new array with the new item added
        setEnrolledClasses(previous => [...previous, course])
    }

    function studentDrop() {
        setEnroll("false");
    }

// Context provider --> solves prop drilling
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
