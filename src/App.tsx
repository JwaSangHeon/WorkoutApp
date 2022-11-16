import React from "react";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
