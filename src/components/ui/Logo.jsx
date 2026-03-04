import logo2a from '../../assets/logo2a.png'
import logo_blanco from '../../assets/logo_blanco.png'

export const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-11',
    lg: 'h-12'
  };
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizes[size]} flex items-center justify-center`}>
        <img 
          src={logo_blanco}
          alt="SerTIC Tech Solutions" 
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>
  );
};
