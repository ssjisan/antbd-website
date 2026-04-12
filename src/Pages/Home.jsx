import Navbar from "../Layout/Navbar/Navbar";
import Package from "../Components/Home/Package";
import Matrix from "../Components/Common/Matrix";
import CheckCoverage from "../Components/Home/CheckCoverage";
import HappyclientSlider from "../Components/Common/HappyclientSlider";
import NeedHelp from "../Components/Home/NeedHelp";
import Footer from "../Layout/Footer/Footer";
import FaQ from "../Components/Common/FaQ";
import ChatWoot from "../Components/Common/ChatWoot";
import WhatsAppWidget from "../Components/Common/WhatsApp";
import HeroSection3rd from "../Components/Home/HeroSection3rd";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection3rd />
      <CheckCoverage />
      <Matrix />
      <Package />
      <HappyclientSlider />
      <FaQ />
      <NeedHelp />
      <Footer />
      <ChatWoot />
      <WhatsAppWidget />
    </>
  );
}
