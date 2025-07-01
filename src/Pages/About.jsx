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

export default function About() {
  return (
    <>
      <Navbar />
      <Herosection />
      <MdMessage />
      <HappyclientSlider />
      <Vision />
      <SwitchingRequest />
      <Mission />
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
