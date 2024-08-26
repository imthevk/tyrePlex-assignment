import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import MainBanner from "./components/MainBanner";
import Reviews from "./components/Reviews";
import DealsIn from "./components/DealsIn";
import ServicesOffered from "./components/ServicesOffered";
import TyresSold from "./components/TyresSold";
import AskQuestion from "./components/AskQuestion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="landingPage">
      <Header />
      <Breadcrumb />
      <MainBanner />
      <Reviews />
      <DealsIn />
      <ServicesOffered />
      <TyresSold />
      <AskQuestion />
      <Footer />
    </div>
  );
}

export default App;
