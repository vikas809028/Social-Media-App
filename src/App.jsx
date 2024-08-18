import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");
  return (
    <div className="d-flex">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div>
        <Header></Header>
        {selectedTab == "Home" ? <PostList /> : <CreatePost />}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
