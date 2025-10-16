import logo2a from '../../assets/logo2a.png'
import logo_blanco from '../../assets/logo_blanco.png'

export const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizes[size]} flex items-center justify-center`}>
        { /* si queremos poner el mismo formato que el boton del chatbot
        cambiamos la clase de arriba por la siguiente
        
        <div className={`${sizes[size]} flex items-center justify-center 
                      bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-xl`}>

        */}


        <img 
          src={logo_blanco}
          alt="SerTIC Tech Solutions" 
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        SerTIC Tech Solutions
      </span>
    </div>
  );
};
