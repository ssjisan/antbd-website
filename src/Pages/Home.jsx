import Navbar from "../Layout/Navbar/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Package from "../Components/Home/Package";
import FirstPackage from "../Components/Home/FirstPackage";
import Matrix from "../Components/Common/Matrix";
import SwitchingRequest from "../Components/Home/SwitchingRequest";
import CheckCoverage from "../Components/Home/CheckCoverage";
import HappyclientSlider from "../Components/Common/HappyclientSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Matrix/>
      <FirstPackage/>
      <Package />
      <SwitchingRequest/>
      <HappyclientSlider/>
      <CheckCoverage/>
      <WhatsAppButton />
    </>
  );
}
