import React from "react";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #000000;
    color: #eeeeee
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
