import Herosection from "../Components/About/Herosection";
import Vision from "../Components/About/Vision";
import Mission from "../Components/About/Mission";
import Navbar from "./../Layout/Navbar/Navbar";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import Footer from "../Layout/Footer/Footer";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import MdMessage from "../Components/About/MdMessage";
import SwitchingRequest from "../Components/Home/SwitchingRequest";
import NeedHelp from "../Components/Home/NeedHelp";
import LicensingMemberships from "../Components/About/LicensingMemberships";
import Timeline from "../Components/About/Timeline";
import TechnicalDifferentiators from "../Components/About/TechnicalDifferentiators";

export default function About() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Timeline/>
      <TechnicalDifferentiators/>
      <MdMessage />
      <HappyclientSlider />
      <Vision />
      <SwitchingRequest />
      <Mission />
      <LicensingMemberships/>
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
