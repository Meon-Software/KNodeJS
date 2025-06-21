const MeonCat = ({ width = 30, height = 30 }) => (
  <svg width={width} height={height} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#8cc84b" />
    <path d="M30,35 Q40,25 50,35 Q60,25 70,35" stroke="white" strokeWidth="3" fill="none" />
    <circle cx="40" cy="45" r="3" fill="white" />
    <circle cx="60" cy="45" r="3" fill="white" />
    <path d="M45,60 Q50,65 55,60" stroke="white" strokeWidth="2" fill="none" />
    <path d="M35,75 L65,75" stroke="white" strokeWidth="2" />
  </svg>
);

export default MeonCat;
