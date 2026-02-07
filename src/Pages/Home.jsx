import Navbar from "../Layout/Navbar/Navbar";
// import HeroSection from "../Components/Home/HeroSection";
import Package from "../Components/Home/Package";
import FirstPackage from "../Components/Home/FirstPackage";
import Matrix from "../Components/Common/Matrix";
import CheckCoverage from "../Components/Home/CheckCoverage";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import NeedHelp from "../Components/Home/NeedHelp";
import Footer from "../Layout/Footer/Footer";
import FaQ from "../Components/Common/FaQ";
import ChatWoot from "../Components/Common/ChatWoot";
import HeroSection2nd from "../Components/Home/HeroSection2nd";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection2nd />
      <CheckCoverage />
      <Matrix />
      <FirstPackage />
      <Package />
      <HappyclientSlider />
      <FaQ />
      <NeedHelp />
      <Footer />
      <ChatWoot />
    </>
  );
}
