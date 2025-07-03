import React from "react";
import Button from "../components/reuseable/Button";
import { Link } from "react-router-dom";

const Sidebar = ({ handleToggle }) => {
  return (
    <div
      //   style={{
      //     background: "rgba(255, 255, 255, 0.7)",
      //   }}
      className=" bg-[#f2f7f8] min-h-[80vh] fixed w-full flex items-center justify-center"
    >
      <div className=" flex flex-col items-center  gap-5 ">
        <nav>Save</nav>
        <Link onClick={handleToggle} to="/invest">
          {" "}
          <nav>Invest</nav>
        </Link>
        <Link onClick={handleToggle} to="/stories">
          {" "}
          <nav>Stories</nav>
        </Link>
        <nav>FAQs</nav>
        <nav>Resources</nav>
        <Button borderColor="#122231" title="Sign In" />
        <Button
          title="Create free account"
          bgColor="#122231"
          textColor="#fff"
        />
      </div>
    </div>
  );
};

export default Sidebar;
