import HappyclientSlider from "../Components/Common/HappyclientSlider";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import FirstPackage from "../Components/Home/FirstPackage";
import NeedHelp from "../Components/Home/NeedHelp";
import PackagesPlan from "../Components/Packages/PackagesPlan";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Package() {
  return (
    <>
      <Navbar />
      <FirstPackage />
      <PackagesPlan />
      <HappyclientSlider />
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
