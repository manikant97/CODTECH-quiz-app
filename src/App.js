import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestInfo from "./components/test-info/test-info";
import StartTest from "./components/start-test/start-test";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TestInfo />}></Route>
        <Route path="/start-test" element={<StartTest/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
