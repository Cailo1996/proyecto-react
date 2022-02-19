// Componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Offers from "./components/Offers/Offers";
import Instagram from "./components/Instagram/Instagram";
import OurPartner from "./components/Our Partner/OurPartner";
import Banner from "./components/Banner/Banner";
import SurpriseSomeone from "./components/Surprise Someone/SurpriseSomeone";
import WhoMakes from "./components/Who Makes/WhoMakes";
import TellaFriend from "./components/Tell a Friend/TellaFriend";
import WhyChoose from "./components/Why Choose/WhyChoose";
import Warning from "./components/Warning/Warning";
import { useState } from "react";
// Data
import { list } from "./data/offers";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <Warning />
      <Navbar />
      <Banner />
      <Offers title="Latest"  list={list} cart={value} setCart={setValue} />
      <WhyChoose />
      <WhoMakes />
      <OurPartner />
      <SurpriseSomeone />
      <Instagram />
      <TellaFriend />
      <Footer />

    </div>
  );
}

export default App;
