import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v12.0',
      });
    };

    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) return;
      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      document.body.appendChild(js);
    };

    loadFacebookSDK();

    // Close popup when clicking outside
    const handleClickOutside = (event) => {
      const widget = document.querySelector('.chat-widget');
      const popup = document.getElementById('chatPopup');
      if (!widget?.contains(event.target) && popup?.classList.contains('active')) {
        popup.classList.remove('active');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleChatPopup = () => {
    const popup = document.getElementById('chatPopup');
    popup?.classList.toggle('active');
  };

  const openWhatsApp = () => {
    const phoneNumber = '+8801787863140';
    const message = encodeURIComponent('Hello! I have a question.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openMessenger = () => {
    const pageId = 'your_facebook_page_id';
    window.open(`https://m.me/${pageId}`, '_blank');
  };

  return (
    <>
      <div className="chat-widget">
        <div className="chat-button" onClick={toggleChatPopup}>
          <img
            src="https://img.icons8.com/color/48/000000/chat.png"
            alt="Chat Icon"
          />
        </div>
        <div className="chat-popup" id="chatPopup">
          <div className="chat-option" onClick={openWhatsApp}>
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp.png"
              alt="WhatsApp Icon"
            />
            <span>WhatsApp</span>
          </div>
          <div className="chat-option" onClick={openMessenger}>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-messenger.png"
              alt="Messenger Icon"
            />
            <span>Messenger</span>
          </div>
        </div>
      </div>

      {/* Facebook SDK root and customer chat plugin */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="your_facebook_page_id"
        theme_color="#007bff"
        logged_in_greeting="Hi! How can we assist you today?"
        logged_out_greeting="Hi! How can we assist you today?"
      ></div>
    </>
  );
}
