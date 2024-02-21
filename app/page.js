"use client";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./globals.css";
import Hero from "./components/Hero";
import NavbarItems from "./components/NavbarItems";
import BoxCircle from "./components/BoxCircle";
import Video from "./components/Video";

const Page = () => {
  return (
    <div className=" bg-black flex justify-between">
      <div id="mainPage" className="flex-1 flex flex-col">
        <div className="w-full h-full">
          <Navbar />

          <div className="w-[600px] h-[600px] rounded-full  bg-[#45cfc811] blur-2xl absolute top-[-150px] left-[-270px]"></div>
          <div className="w-[600px] h-[600px] rounded-full  bg-[#45cfc809] blur-2xl fixed top-[-50px] right-[-100px]"></div>
          <Hero />
          <NavbarItems />
          <BoxCircle />
          <Video />
        </div>
      </div>
      {/* <Banner /> */}
    </div>
  );
};

export default Page;
