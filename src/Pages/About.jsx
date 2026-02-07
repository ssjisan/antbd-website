import Herosection from "../Components/About/Herosection";
import Vision from "../Components/About/Vision";
import Mission from "../Components/About/Mission";
import Navbar from "./../Layout/Navbar/Navbar";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import Footer from "../Layout/Footer/Footer";
import MdMessage from "../Components/About/MdMessage";
import NeedHelp from "../Components/Home/NeedHelp";
import LicensingMemberships from "../Components/About/LicensingMemberships";
import ChatWoot from "../Components/Common/ChatWoot";

export default function About() {
  return (
    <>
      <Navbar />
      <Herosection />
      <MdMessage />
      <Vision />
      <Mission />
      <LicensingMemberships />
      {/* <HappyclientSlider /> */}
      <NeedHelp />
      <Footer />
      <ChatWoot />
    </>
  );
}
