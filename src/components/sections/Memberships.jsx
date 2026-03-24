import { useTranslation } from "react-i18next";
import LogoMarquee from "../ui/LogoMarquee";
import { memberships } from "../../data/memberships";

const Memberships = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
          {t('home.membershipsTitle')}
        </h2>
        <p className="text-gray-400 mt-2">
          {t('home.membershipsSubtitle')}
        </p>
      </div>

      <LogoMarquee items={memberships} speed={45} />
    </>
  );
};

export default Memberships;
