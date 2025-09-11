import Navbar from "../Layout/Navbar/Navbar";
import CoverageCompo from "../Components/Coverage/CoverageCompo";
import Footer from "./../Layout/Footer/Footer";
import NeedHelp from "../Components/Home/NeedHelp";
import ChatWoot from "../Components/Common/ChatWoot";

export default function Coverage() {
  return (
    <>
      <Navbar />
      <CoverageCompo />
      <NeedHelp />
      <Footer />
      <ChatWoot/>
    </>
  );
}
