import HappyclientSlider from "../Components/Common/HappyclientSlider";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import HeroSection from "../Components/Packages/HeroSection";
import NeedHelp from "../Components/Home/NeedHelp";
import PackagesPlan from "../Components/Packages/PackagesPlan";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Package() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <PackagesPlan />
      <HappyclientSlider />
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
