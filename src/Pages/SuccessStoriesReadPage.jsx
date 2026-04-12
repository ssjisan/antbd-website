import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import ChatWoot from "../Components/Common/ChatWoot";
import WhatsAppWidget from "../Components/Common/WhatsApp";
import SuccessStoriesDetails from "../Components/SuccessStories/SuccessStoriesDetails";

export default function SuccessStoriesReadPage() {
  return (
    <>
      <Navbar />
      <SuccessStoriesDetails />
      <Footer />
      <ChatWoot />
      <WhatsAppWidget />
    </>
  );
}
