import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <LeftSidebar />
        <Header />
        <Content />
        <RightSidebar />
      </Router>
    </div>
  );
}

export default App;
