import Footer from "@/components/Footer";
import LangDropdown from "@/components/LanguageDropdown";
import NavBar from "@/components/NavBar";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import Home from "@/components/sections/Hero";
import SideBar from "@/components/SideBar";

import logo from "@/assets/smilearn_full_logo.png";
import leftEllipse from "@/assets/ellipses_left.png";
import rightEllipse from "@/assets/ellipses_right.png";

function LandingPage() {
  return (
    <div className="relative" id="home">
      <div className="absolute">
        <div className="bg-navbar fixed z-20 flex w-full items-center justify-between px-10 py-5">
          <img
            src={logo}
            className="logo w-[200px] md:w-[341px]"
            alt="Smilearn Full Logo"
          />
          <NavBar />
          <div>
            <LangDropdown display="hidden" />
            <SideBar />
          </div>
        </div>
        <div className="mt-32">
          <Home />
          <div id="about"></div>
          <div>
            <About />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="download">
            <div className="mt-20 flex flex-col-reverse md:flex-row">
              <Download />
              <Categories />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="z-10">
        <div>
          <div>
            <img src={leftEllipse} />
          </div>
          <div className="mt-32 flex justify-end">
            <img src={rightEllipse} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
