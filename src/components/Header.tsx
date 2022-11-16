import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>
          <Link to="/">운동일지</Link>
        </h1>
      </div>
      <div className="header-menu">
        <button>
          <Link to="/newpost">추가하기</Link>
        </button>
      </div>
    </>
  );
};

export default Header;
