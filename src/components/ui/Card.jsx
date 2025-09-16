export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 
      border border-slate-700/50 
      ${hover ? 'hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};