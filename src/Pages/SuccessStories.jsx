import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import ChatWoot from "../Components/Common/ChatWoot";
import WhatsAppWidget from "../Components/Common/WhatsApp";
import AllSuccessStories from "../Components/SuccessStories/SuccessStories";

export default function SuccessStories() {
  return (
    <>
      <Navbar />
      <AllSuccessStories />
      <Footer />
      <ChatWoot />
      <WhatsAppWidget />
    </>
  );
}
