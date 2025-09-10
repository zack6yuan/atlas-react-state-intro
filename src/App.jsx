import { createContext, useState } from "react";

import Header from "./Header";
import SchoolCatalog from "./SchoolCatalog";
import ClassSchedule from "./ClassSchedule";

export const AppContext = createContext();

export default function App() {
  const [enroll, setEnroll] = useState(false);

    function studentEnroll() {
        setEnroll(true)
    }

    function studentDrop() {
        setEnroll(false);
    }

  return (
    <AppContext.Provider value={{ enroll, studentEnroll, studentDrop }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </AppContext.Provider>
  );
}
