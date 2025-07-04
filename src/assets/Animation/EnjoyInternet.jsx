import  { useEffect, useRef } from "react";

export default function EnjoyInternet() {
  const finallyRef = useRef(null);
  const enjoyRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (finallyRef.current && enjoyRef.current) {
        finallyRef.current.classList.remove("bounce-finally");
        enjoyRef.current.classList.remove("bounce-enjoy");

        // Force reflow
        void finallyRef.current.offsetWidth;

        finallyRef.current.classList.add("bounce-finally");
        enjoyRef.current.classList.add("bounce-enjoy");
      }
    };

    animate(); // run once at start
    const interval = setInterval(animate, 4000); // every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "356px",
        width: "100%",
        height: "296px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 220 246"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // ⬅️ Center the SVG
          width: "220px",
          height: "246px",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.72">
          <rect
            x="48.8535"
            y="0.000976562"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="25.1035"
            y="25.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="25.1035"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="25.1035"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="224.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.104"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.104"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.729"
            y="175.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="150.104"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="224.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="200.104"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="200.729"
            y="175.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="75.1035"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="199.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="224.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.104"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="200.104"
            y="100.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="150"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="25.1035"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.104"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="75"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="125.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="0.103516"
            y="174.999"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.104"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="150.104"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="200.104"
            y="50.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="50.1016"
            y="25.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="75.1035"
            y="25.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="125.104"
            y="25.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="175.102"
            y="25.001"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="100.729"
            y="25.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="125.729"
            y="50.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="200.729"
            y="75.625"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="200.729"
            y="125.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="25.7285"
            y="150.625"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="25.7285"
            y="175.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="75.7285"
            y="200.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="150.729"
            y="225.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="50.7266"
            y="225.624"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="150.729"
            y="25.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="74.4805"
            y="0.625972"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="74.4805"
            y="0.625972"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="25.7285"
            y="50.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="25.7285"
            y="100.626"
            width="18.7499"
            height="18.7499"
            rx="4.37497"
            fill="white"
            stroke="#F1F1F1"
            strokeWidth="1.24999"
          />
          <rect
            x="98.8535"
            y="0.000976562"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="123.854"
            y="0.000976562"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
          <rect
            x="148.854"
            y="0.000976562"
            width="19.9999"
            height="19.9999"
            rx="4.99996"
            fill="#D1D7E0"
            fillOpacity="0.32"
          />
        </g>
      </svg>
      <div
  style={{
    maxWidth: "356px",
    width: "100%",
    height: "296px",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* ...existing animated buttons and content here... */}

  {/* 👉 New circle div with image */}
  <div className="image-wrapper">
    <img src="/3.png" alt="Decorative" className="circle-image" />
  </div>
</div>

      <div
        style={{
          width: "152px",
          height: "100px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Finally */}
        <div ref={finallyRef} className="static-finally">
          Finally
        </div>

        {/* Connected */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "24px",
            borderRadius: "6px",
            border: "1px solid #C9CFD4",
            background: "#031E21",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: "#FFF",
            zIndex: 100,
          }}
        >
          Connected...
        </div>

        {/* & Enjoy */}
        <div ref={enjoyRef} className="static-enjoy">
          & Enjoy.
        </div>
      </div>
    </div>
  );
}
