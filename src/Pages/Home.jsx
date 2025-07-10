import Navbar from "../Layout/Navbar/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Package from "../Components/Home/Package";
import FirstPackage from "../Components/Home/FirstPackage";
import Matrix from "../Components/Common/Matrix";
import SwitchingRequest from "../Components/Home/SwitchingRequest";
import CheckCoverage from "../Components/Home/CheckCoverage";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import NeedHelp from "../Components/Home/NeedHelp";
import Footer from "../Layout/Footer/Footer";
import FaQ from "../Components/Common/FaQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CheckCoverage />
      <Matrix />
      <FirstPackage />
      <Package />
      <SwitchingRequest />
      <HappyclientSlider />
      <FaQ />
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
