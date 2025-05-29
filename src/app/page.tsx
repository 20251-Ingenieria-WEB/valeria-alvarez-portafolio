import SidebarLeft from "../components/SideBarLeft";
import PerfilSection from "../section/perfilSection";
import ConocimientosSection from "../section/conocimientoSection";
import EducacionSection from "../section/educationSection";
import PortfolioSection from "../section/portafolioSection";
import SidebarRight from "../components/SideBarRight";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex">
      <SidebarLeft />
      <div className="ml-72 mr-16 p-6 w-full bg-gray-100 min-h-screen flex flex-col justify-between">
        <div>
          <PerfilSection />
          <ConocimientosSection />
          <EducacionSection />
          <PortfolioSection />
        </div>
        <Footer />
      </div>
      <SidebarRight />
    </main>
  );
}