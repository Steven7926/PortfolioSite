import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className = "flex flex-col">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;