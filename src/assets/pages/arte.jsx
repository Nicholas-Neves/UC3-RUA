import { Outlet } from "react-router-dom";
import "./arte.css";
import Sidebar from "../components/sidebar";
import Rightbar from "../components/rightbar";
import Footer from "../components/Footer_Oficina";

function Arte() {
  return (
    <div className="fundo">
      <div className="main-layout">
        <Sidebar />

        <div className="content">
          <Outlet /> {/* Aqui o conteúdo do meio muda conforme a rota */}
        </div>

        <Rightbar />
      </div>

      <Footer />
    </div>
  );
}

export default Arte;
