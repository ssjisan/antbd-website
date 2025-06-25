import PropTypes from "prop-types";

export const Menu = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.25 14.48H3.75C3.55109 14.48 3.36032 14.559 3.21967 14.6996C3.07902 14.8403 3 15.0311 3 15.23C3 15.4289 3.07902 15.6197 3.21967 15.7603C3.36032 15.901 3.55109 15.98 3.75 15.98H20.25C20.4489 15.98 20.6397 15.901 20.7803 15.7603C20.921 15.6197 21 15.4289 21 15.23C21 15.0311 20.921 14.8403 20.7803 14.6996C20.6397 14.559 20.4489 14.48 20.25 14.48Z"
          fill={color}
        />
        <path
          d="M20.25 10.48H3.75C3.55109 10.48 3.36032 10.401 3.21967 10.2603C3.07902 10.1197 3 9.92889 3 9.72998C3 9.53107 3.07902 9.3403 3.21967 9.19965C3.36032 9.059 3.55109 8.97998 3.75 8.97998H20.25C20.4489 8.97998 20.6397 9.059 20.7803 9.19965C20.921 9.3403 21 9.53107 21 9.72998C21 9.92889 20.921 10.1197 20.7803 10.2603C20.6397 10.401 20.4489 10.48 20.25 10.48Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const About = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_310_770)">
          <path
            d="M10 14.1667V9.16667"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="0.833333"
            cy="0.833333"
            rx="0.833333"
            ry="0.833333"
            transform="matrix(1 0 0 -1 9.16667 7.5)"
            fill={color}
          />
          <path
            d="M1.66667 10C1.66667 6.07163 1.66667 4.10744 2.88706 2.88706C4.10745 1.66667 6.07163 1.66667 10 1.66667C13.9284 1.66667 15.8926 1.66667 17.113 2.88706C18.3333 4.10744 18.3333 6.07163 18.3333 10C18.3333 13.9284 18.3333 15.8926 17.113 17.1129C15.8926 18.3333 13.9284 18.3333 10 18.3333C6.07163 18.3333 4.10745 18.3333 2.88706 17.1129C1.66667 15.8926 1.66667 13.9284 1.66667 10Z"
            stroke={color}
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_310_770">
            <rect width={size} height={size} fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Contact = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.36465 4.43014L8.9055 5.39925C9.39358 6.27382 9.19765 7.42111 8.42892 8.18983C8.42892 8.18983 7.49648 9.12229 9.18709 10.8129C10.8777 12.5035 11.8102 11.5711 11.8102 11.5711C12.5789 10.8023 13.7262 10.6064 14.6007 11.0945L15.5699 11.6353C16.8905 12.3724 17.0464 14.2244 15.8856 15.3852C15.1881 16.0827 14.3337 16.6254 13.3891 16.6612C11.799 16.7215 9.09856 16.3191 6.38975 13.6102C3.68093 10.9014 3.27851 8.20102 3.33879 6.61091C3.3746 5.66633 3.91733 4.81186 4.61483 4.11436C5.77562 2.95357 7.62764 3.10953 8.36465 4.43014Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const Coverage = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_310_789)">
          <path
            d="M10.0003 18.3334C6.07195 18.3334 4.10777 18.3334 2.88738 17.113C1.66699 15.8926 1.66699 13.9285 1.66699 10.0001C1.66699 6.07171 1.66699 4.10753 2.88738 2.88714C4.10777 1.66675 6.07195 1.66675 10.0003 1.66675C13.9287 1.66675 15.8929 1.66675 17.1133 2.88714C18.3337 4.10752 18.3337 6.07171 18.3337 10.0001C18.3337 13.9285 18.3337 15.8926 17.1133 17.113C15.8929 18.3334 13.9287 18.3334 10.0003 18.3334Z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M4.58301 7.29768C4.58301 5.79854 5.88884 4.58325 7.49967 4.58325C9.11051 4.58325 10.4163 5.79854 10.4163 7.29768C10.4163 8.78507 9.48544 10.5207 8.03304 11.1414C7.69446 11.2861 7.30489 11.2861 6.96631 11.1414C5.51391 10.5207 4.58301 8.78507 4.58301 7.29768Z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M11.6674 11.6666L17.084 17.0833M11.6674 11.6666L5.3291 18.0049M11.6674 11.6666L18.0063 5.32764"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.33366 7.50008C8.33366 7.96032 7.96056 8.33341 7.50033 8.33341C7.04009 8.33341 6.66699 7.96032 6.66699 7.50008C6.66699 7.03984 7.04009 6.66675 7.50033 6.66675C7.96056 6.66675 8.33366 7.03984 8.33366 7.50008Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_310_789">
            <rect width={size} height={size} fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Help = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 15V10C17.5 6.87522 17.5 5.31283 16.7042 4.21756C16.4472 3.86383 16.1362 3.55276 15.7824 3.29576C14.6872 2.5 13.1248 2.5 10 2.5C6.87522 2.5 5.31283 2.5 4.21756 3.29576C3.86383 3.55276 3.55276 3.86383 3.29576 4.21756C2.5 5.31283 2.5 6.87522 2.5 10V15"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M18.3333 12.9167V14.5833"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.66666 12.9167V14.5833"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.66667 11.5372C6.66667 10.9002 6.66667 10.5817 6.52105 10.3602C6.44778 10.2488 6.35051 10.1567 6.237 10.0913C6.01143 9.96127 5.70677 9.99131 5.09745 10.0514C4.07073 10.1526 3.55736 10.2032 3.18948 10.4804C3.00329 10.6206 2.84698 10.7994 2.73038 11.0056C2.5 11.4129 2.5 11.9496 2.5 13.023V14.3277C2.5 15.3904 2.5 15.9218 2.73498 16.3321C2.82293 16.4857 2.93317 16.6242 3.0618 16.7428C3.40544 17.0595 3.90703 17.1584 4.91023 17.3562C5.6162 17.4954 5.96918 17.565 6.2297 17.4184C6.32583 17.3643 6.4108 17.2911 6.47977 17.2028C6.66667 16.9637 6.66667 16.5898 6.66667 15.842V11.5372Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M13.3333 11.5372C13.3333 10.9002 13.3333 10.5817 13.479 10.3602C13.5522 10.2488 13.6495 10.1567 13.763 10.0913C13.9886 9.96127 14.2932 9.99131 14.9026 10.0514C15.9293 10.1526 16.4426 10.2032 16.8105 10.4804C16.9967 10.6206 17.153 10.7994 17.2696 11.0056C17.5 11.4129 17.5 11.9496 17.5 13.023V14.3277C17.5 15.3904 17.5 15.9218 17.265 16.3321C17.1771 16.4857 17.0668 16.6242 16.9382 16.7428C16.5946 17.0595 16.093 17.1584 15.0898 17.3562C14.3838 17.4954 14.0308 17.565 13.7703 17.4184C13.6742 17.3643 13.5892 17.2911 13.5202 17.2028C13.3333 16.9637 13.3333 16.5898 13.3333 15.842V11.5372Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export const Login = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.99996"
          cy="5"
          r="3.33333"
          stroke={color}
          strokeWidth="1.5"
        />
        <ellipse
          cx="9.99996"
          cy="14.1667"
          rx="5.83333"
          ry="3.33333"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export const Package = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_310_786)">
          <path
            d="M5 6.66667C5 4.30965 5 3.13113 5.73223 2.3989C6.46447 1.66667 7.64298 1.66667 10 1.66667C12.357 1.66667 13.5355 1.66667 14.2678 2.3989C15 3.13113 15 4.30965 15 6.66667V13.3333C15 15.6904 15 16.8689 14.2678 17.6011C13.5355 18.3333 12.357 18.3333 10 18.3333C7.64298 18.3333 6.46447 18.3333 5.73223 17.6011C5 16.8689 5 15.6904 5 13.3333V6.66667Z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M15 16.25C16.1668 16.25 16.7502 16.25 17.1958 16.0229C17.5878 15.8232 17.9065 15.5045 18.1063 15.1125C18.3333 14.6668 18.3333 14.0834 18.3333 12.9167V7.08333C18.3333 5.91656 18.3333 5.33317 18.1063 4.88752C17.9065 4.49552 17.5878 4.17681 17.1958 3.97707C16.7502 3.75 16.1668 3.75 15 3.75"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M4.99996 16.25C3.83318 16.25 3.2498 16.25 2.80415 16.0229C2.41214 15.8232 2.09343 15.5045 1.8937 15.1125C1.66663 14.6668 1.66663 14.0834 1.66663 12.9167V7.08333C1.66663 5.91656 1.66663 5.33317 1.8937 4.88752C2.09343 4.49552 2.41214 4.17681 2.80415 3.97707C3.2498 3.75 3.83318 3.75 4.99996 3.75"
            stroke={color}
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_310_786">
            <rect width={size} height={size} fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Services = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6666 12.0833C11.6666 10.7026 12.7859 9.58334 14.1666 9.58334C15.5473 9.58334 16.6666 10.7026 16.6666 12.0833C16.6666 13.464 15.5473 14.5833 14.1666 14.5833C12.7859 14.5833 11.6666 13.464 11.6666 12.0833Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M3.33335 7.91667C3.33335 9.29738 4.45264 10.4167 5.83335 10.4167C7.21407 10.4167 8.33335 9.29738 8.33335 7.91667C8.33335 6.53596 7.21407 5.41667 5.83335 5.41667C4.45264 5.41667 3.33335 6.53596 3.33335 7.91667Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M14.1321 7.5L14.1321 1.66667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.79871 12.5L5.79871 18.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.1321 18.3333L14.1321 16.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.79871 1.66667L5.79871 3.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

Menu.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
About.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Contact.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Coverage.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Help.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Login.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Package.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Services.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
