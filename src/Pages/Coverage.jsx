import Navbar from "../Layout/Navbar/Navbar";
import CoverageCompo from "../Components/Coverage/CoverageCompo";
import Footer from "./../Layout/Footer/Footer";
import NeedHelp from "../Components/Home/NeedHelp";

export default function Coverage() {
  return (
    <>
      <Navbar />
      <CoverageCompo />
      <NeedHelp />
      <Footer />
    </>
  );
}
