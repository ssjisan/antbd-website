import HeroSection from "../Components/Packages/HeroSection";
import NeedHelp from "../Components/Home/NeedHelp";
import PackagesPlan from "../Components/Packages/PackagesPlan";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import ChatWoot from "../Components/Common/ChatWoot";

export default function Package() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PackagesPlan />
      <NeedHelp />
      <Footer />
      <ChatWoot />
    </>
  );
}
