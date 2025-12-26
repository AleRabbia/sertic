export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      {...props}
      className={`
        bg-gradient-to-br from-sertic-dark/50 to-sertic-black/50 backdrop-blur-sm rounded-2xl p-8 
        border border-sertic-gray/50 
        ${hover ? 'hover:border-sertic-cyan/50 transition-all duration-300 hover:transform hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
