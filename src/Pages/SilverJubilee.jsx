import ChatWoot from "../Components/Common/ChatWoot";
import HeroSection from "../Components/SilverJubilee/HeroSection";
import SelfPortal from "../Components/SilverJubilee/SelfPortal";
import SilverJubileePrice from "../Components/SilverJubilee/SilverJubileePrice";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function SilverJubilee() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SilverJubileePrice />
      <SelfPortal />
      <Footer />
      <ChatWoot />
    </>
  );
}
