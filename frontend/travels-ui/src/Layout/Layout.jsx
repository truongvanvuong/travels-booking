import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Routers from "../router/Routers.jsx";
import BackTop from "../Components/BackTop";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      <BackTop />
    </div>
  );
};

export default Layout;
