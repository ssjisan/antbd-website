import PropTypes from "prop-types";

export const ArrowLeft = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Bullet = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.8284 4.19083L16.4508 2.99L17.1227 5.7375L20.0195 5.765L19.4023 8.525L22 9.775L20.2152 12L22 14.225L19.4023 15.475L20.0195 18.235L17.1227 18.2625L16.4508 21.01L13.8284 19.8092L12 22L10.1716 19.8092L7.54919 21.01L6.87734 18.2625L3.98051 18.235L4.59766 15.475L2 14.225L3.78477 12L2 9.775L4.59766 8.525L3.98051 5.765L6.87734 5.7375L7.54919 2.99L10.1716 4.19083L12 2Z"
          fill={color}
        />
        <path
          d="M8 12.3127L10.4748 15L16 9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ArrowRight = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const ArrowDown = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const PriceTag = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8305 8.6998L15.3005 4.1698C14.3505 3.2198 13.0405 2.7098 11.7005 2.7798L6.70046 3.0198C4.70046 3.1098 3.11046 4.6998 3.01046 6.6898L2.77046 11.6898C2.71046 13.0298 3.21046 14.3398 4.16046 15.2898L8.69046 19.8198C10.5505 21.6798 13.5705 21.6798 15.4405 19.8198L19.8305 15.4298C21.7005 13.5798 21.7005 10.5598 19.8305 8.6998ZM9.50046 12.3798C7.91046 12.3798 6.62046 11.0898 6.62046 9.4998C6.62046 7.9098 7.91046 6.6198 9.50046 6.6198C11.0905 6.6198 12.3805 7.9098 12.3805 9.4998C12.3805 11.0898 11.0905 12.3798 9.50046 12.3798Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Support = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z"
          fill={color}
        />
        <path
          d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
          fill={color}
        />
        <path
          d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const UpTime = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.25C10.21 8.25 8.75 9.71 8.75 11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5C15.25 9.71 13.79 8.25 12 8.25ZM13 11.18C13 11.79 12.67 12.37 12.15 12.68L11.38 13.14C11.26 13.21 11.13 13.25 10.99 13.25C10.74 13.25 10.49 13.12 10.35 12.89C10.14 12.53 10.25 12.07 10.61 11.86L11.37 11.4C11.45 11.35 11.49 11.27 11.49 11.19V10.26C11.49 9.85 11.83 9.51 12.24 9.51C12.65 9.51 13 9.84 13 10.25V11.18Z"
          fill={color}
        />
        <path
          d="M18.5408 4.17063L13.0408 2.11062C12.4708 1.90063 11.5408 1.90063 10.9708 2.11062L5.47078 4.17063C4.41078 4.57063 3.55078 5.81063 3.55078 6.94063V15.0406C3.55078 15.8506 4.08078 16.9206 4.73078 17.4006L10.2308 21.5106C11.2008 22.2406 12.7908 22.2406 13.7608 21.5106L19.2608 17.4006C19.9108 16.9106 20.4408 15.8506 20.4408 15.0406V6.94063C20.4508 5.81063 19.5908 4.57063 18.5408 4.17063ZM12.0008 16.2506C9.38078 16.2506 7.25078 14.1206 7.25078 11.5006C7.25078 8.88062 9.38078 6.75063 12.0008 6.75063C14.6208 6.75063 16.7508 8.88062 16.7508 11.5006C16.7508 14.1206 14.6208 16.2506 12.0008 16.2506Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Flash = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.15588 12.9142H9.24588V20.1142C9.24588 21.1742 10.5659 21.6742 11.2659 20.8742L18.8359 12.2742C19.4959 11.5242 18.9659 10.3542 17.9659 10.3542H14.8759V3.15425C14.8759 2.09425 13.5559 1.59425 12.8559 2.39425L5.28588 10.9942C4.63588 11.7442 5.16588 12.9142 6.15588 12.9142Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const ArrowUp = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5119 8.43056C11.7928 8.18981 12.2072 8.18981 12.4881 8.43056L19.4881 14.4306C19.8026 14.7001 19.839 15.1736 19.5695 15.4881C19.2999 15.8026 18.8264 15.839 18.5119 15.5694L12 9.98781L5.48811 15.5694C5.17361 15.839 4.70014 15.8026 4.43057 15.4881C4.161 15.1736 4.19743 14.7001 4.51192 14.4306L11.5119 8.43056Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Close = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6.00003L6 18M5.99995 5.99998L17.9999 17.9999"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const Search = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Wifi = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0909 12.5884C18.9309 12.5884 18.7709 12.5384 18.6309 12.4284C14.6009 9.31844 9.39091 9.31844 5.36091 12.4284C5.03091 12.6784 4.56091 12.6184 4.31091 12.2984C4.06091 11.9684 4.12091 11.4984 4.44091 11.2484C9.03091 7.69844 14.9609 7.69844 19.5409 11.2484C19.8709 11.4984 19.9309 11.9684 19.6709 12.2984C19.5409 12.4884 19.3209 12.5884 19.0909 12.5884Z"
          fill={color}
        />
        <path
          d="M22 9.10844C21.84 9.10844 21.68 9.05844 21.54 8.94844C15.74 4.46844 8.25001 4.46844 2.46001 8.94844C2.13001 9.19844 1.66001 9.13844 1.41001 8.81844C1.15001 8.49844 1.21001 8.01844 1.54001 7.76844C7.89001 2.85844 16.1 2.85844 22.46 7.76844C22.79 8.01844 22.85 8.48844 22.59 8.81844C22.45 9.00844 22.22 9.10844 22 9.10844Z"
          fill={color}
        />
        <path
          d="M17.2096 16.2413C17.0496 16.2413 16.8896 16.1913 16.7496 16.0813C13.8696 13.8513 10.1396 13.8513 7.24958 16.0813C6.91958 16.3313 6.44958 16.2713 6.19958 15.9513C5.94958 15.6213 6.00958 15.1513 6.32958 14.9013C9.76958 12.2413 14.2196 12.2413 17.6596 14.9013C17.9896 15.1513 18.0496 15.6213 17.7896 15.9513C17.6496 16.1413 17.4296 16.2413 17.2096 16.2413Z"
          fill={color}
        />
        <path
          d="M14.5992 19.9005C14.4392 19.9005 14.2792 19.8505 14.1392 19.7405C12.8392 18.7305 11.1492 18.7305 9.84919 19.7405C9.51919 19.9905 9.04919 19.9305 8.79919 19.6105C8.54919 19.2805 8.60919 18.8105 8.92919 18.5605C10.7892 17.1205 13.1892 17.1205 15.0492 18.5605C15.3792 18.8105 15.4392 19.2805 15.1792 19.6105C15.0492 19.7905 14.8292 19.9005 14.5992 19.9005Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Submit = ({ size, color }) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1391 2.95907L7.10914 5.95907C1.03914 7.98907 1.03914 11.2991 7.10914 13.3191L9.78914 14.2091L10.6791 16.8891C12.6991 22.9591 16.0191 22.9591 18.0391 16.8891L21.0491 7.86907C22.3891 3.81907 20.1891 1.60907 16.1391 2.95907ZM16.4591 8.33907L12.6591 12.1591C12.5091 12.3091 12.3191 12.3791 12.1291 12.3791C11.9391 12.3791 11.7491 12.3091 11.5991 12.1591C11.3091 11.8691 11.3091 11.3891 11.5991 11.0991L15.3991 7.27907C15.6891 6.98907 16.1691 6.98907 16.4591 7.27907C16.7491 7.56907 16.7491 8.04907 16.4591 8.33907Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
ArrowLeft.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
ArrowUp.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
ArrowDown.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Close.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Search.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
PriceTag.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Support.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
UpTime.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Flash.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Wifi.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Submit.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Bullet.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
