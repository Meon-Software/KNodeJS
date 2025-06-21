const MeonCat = ({ width = 30, height = 30 }) => (
  <svg width={width} height={height} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#121212" stroke="#8cc84b" strokeWidth="1" />
    <circle cx="50" cy="50" r="45" fill="#222" />
    
    {/* Orelhas */}
    <path d="M35,25 Q40,15 45,25" stroke="#8cc84b" strokeWidth="3" fill="none" />
    <path d="M65,25 Q70,15 75,25" stroke="#8cc84b" strokeWidth="3" fill="none" />
    
    {/* Rosto */}
    <circle cx="40" cy="45" r="5" fill="#8cc84b" />
    <circle cx="60" cy="45" r="5" fill="#8cc84b" />
    
    {/* Boca */}
    <path d="M45,65 Q50,70 55,65" stroke="#8cc84b" strokeWidth="2" fill="none" />
    
    {/* Bigodes */}
    <path d="M40,60 L20,55" stroke="#8cc84b" strokeWidth="1" />
    <path d="M40,63 L20,63" stroke="#8cc84b" strokeWidth="1" />
    <path d="M40,66 L20,71" stroke="#8cc84b" strokeWidth="1" />
    <path d="M60,60 L80,55" stroke="#8cc84b" strokeWidth="1" />
    <path d="M60,63 L80,63" stroke="#8cc84b" strokeWidth="1" />
    <path d="M60,66 L80,71" stroke="#8cc84b" strokeWidth="1" />
  </svg>
);

export default MeonCat;
