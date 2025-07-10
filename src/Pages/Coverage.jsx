import Navbar from "../Layout/Navbar/Navbar";
import CoverageCompo from "../Components/Coverage/CoverageCompo";
import Footer from "./../Layout/Footer/Footer";
import NeedHelp from "../Components/Home/NeedHelp";
import WhatsAppButton from "../Components/Common/WhatsAppButton";

export default function Coverage() {
  return (
    <>
      <Navbar />
      <CoverageCompo />
      <NeedHelp />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
