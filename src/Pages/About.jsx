import Herosection from "../Components/About/Herosection";
import Vision from "../Components/About/Vision";
import Mission from "../Components/About/Mission";
import Navbar from "./../Layout/Navbar/Navbar";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import Footer from "../Layout/Footer/Footer";
import MdMessage from "../Components/About/MdMessage";
import NeedHelp from "../Components/Home/NeedHelp";
import LicensingMemberships from "../Components/About/LicensingMemberships";
import Timeline from "../Components/About/Timeline";
import TechnicalDifferentiators from "../Components/About/TechnicalDifferentiators";
import ChatWoot from "../Components/Common/ChatWoot";

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
      <Mission />
      <LicensingMemberships/>
      <NeedHelp />
      <Footer />
      <ChatWoot/>
    </>
  );
}
