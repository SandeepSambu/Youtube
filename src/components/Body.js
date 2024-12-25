import { Outlet, ScrollRestoration } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default Body;
