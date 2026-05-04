import { useTranslation } from 'react-i18next';
import HAG from '../assets/equipo/sub/1.png';
import Alexis from '../assets/equipo/sub/2.png';
import Melania from '../assets/equipo/sub/5.png';
import Ramiro from '../assets/equipo/sub/8.png';
import Nicolas from '../assets/equipo/sub/6.png';
import Patricio from '../assets/equipo/sub/7.png';
import Digna from '../assets/equipo/sub/3.png';
import Francisco from '../assets/equipo/sub/4.png';


// import HAG from '../assets/equipo/mundial/1.png';
// import Alexis from '../assets/equipo/mundial/2.png';
// import Melania from '../assets/equipo/mundial/5.png';
// import Ramiro from '../assets/equipo/mundial/8.png';
// import Nicolas from '../assets/equipo/mundial/6.png';
// import Patricio from '../assets/equipo/mundial/7.png';
// import Digna from '../assets/equipo/mundial/3.png';
// import Francisco from '../assets/equipo/mundial/4.png';


// Base member data with IDs only (language-agnostic data)
const baseMembers = [
  {
    id: 1,
    gridPosition: { row: 1, col: 2 },
    photo: HAG,
    linkedin: "https://www.linkedin.com/in/hag74/",
    email: "hector.garcia@sertic.com.ar"
  },
  {
    id: 7,
    gridPosition: { row: 2, col: 1 },
    photo: Digna,
    linkedin: "https://www.linkedin.com/in/digna-m-b5352a1b5/",
    email: "digna.martinez@sertic.com.ar"
  },
  {
    id: 4,
    gridPosition: { row: 4, col: 2 },
    photo: Alexis,
    linkedin: "https://www.linkedin.com/in/alexis-rabbia-4456b2122/",
    email: "alexis.rabbia@sertic.com.ar"
  },
  {
    id: 5,
    gridPosition: { row: 2, col: 2 },
    photo: Melania,
    linkedin: "https://www.linkedin.com/in/melania-quilici-037a8185/",
    email: "melania.quillici@sertic.com.ar"
  },
  {
    id: 3,
    gridPosition: { row: 3, col: 2 },
    photo: Ramiro,
    linkedin: "https://www.linkedin.com/in/ramiro-lemos-b1392418/",
    email: "ramiro.lemos@sertic.com.ar"
  },
  {
    id: 2,
    gridPosition: { row: 3, col: 1 },
    photo: Nicolas,
    linkedin: "https://www.linkedin.com/in/nicolaseroman/",
    email: "nicolas.romar@sertic.cloud"
  },
  {
    id: 6,
    gridPosition: { row: 2, col: 3 },
    photo: Patricio,
    linkedin: "https://www.linkedin.com/in/patricio-ramiro-saez-de-arregui-24025a64/",
    email: "patricio.saez@sertic.com.ar"
  },
  {
    id: 8,
    gridPosition: { row: 3, col: 3 },
    photo: Francisco,
    linkedin: "https://www.linkedin.com/in/franciscomizzau/",
    email: "francisco.mizzau@sertic.com.ar"
  }
];

// Hook to get translated team members
export const useTeamMembers = () => {
  const { t } = useTranslation();
  
  return baseMembers.map(member => {
    const translations = t(`teamMembers.${member.id}`, { returnObjects: true });
    return {
      ...member,
      name: translations.name || '',
      role: translations.role || '',
      bio: translations.bio || '',
      experience: translations.experience || '',
      education: translations.education || '',
      achievements: translations.achievements || []
    };
  });
};

// Default export for backward compatibility
export const teamMembers = baseMembers.map(member => ({
  id: member.id,
  name: "", // Will be filled by useTeamMembers hook
  role: "",
  bio: "",
  experience: "",
  education: "",
  gridPosition: member.gridPosition,
  photo: member.photo,
  linkedin: member.linkedin,
  email: member.email,
  achievements: []
}));
