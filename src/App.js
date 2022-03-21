// Componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Offers from "./components/Offers/Offers";
import Instagram from "./components/Instagram/Instagram";
import OurPartner from "./components/Our Partner/OurPartner";
import Banner from "./components/Banner/Banner";
import SurpriseSomeOne from "./components/Surprise Someone/SurpriseSomeone";
import WhoMakes from "./components/Who Makes/WhoMakes";
import TellaFriend from "./components/Tell a Friend/TellaFriend";
import WhyChoose from "./components/Why Choose/WhyChoose";
import Warning from "./components/Warning/Warning";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
// Data
import { list } from "./data/offers";
import {WC} from "./data/Choose";
import {Makes} from "./data/Makes";
import { instaData } from "./data/Instagram";
import { Surp } from "./data/Surp";

function App() { 
  const [value, setValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <div>
      <Warning />
      <Navbar cart={value}/>
      <Banner />
      <Offers title="Latest"  list={list}  openModal={openModal} />
      <WhyChoose list={WC} />
      <WhoMakes list={Makes} />
      <OurPartner title= "Our Charity Partner, City Bakery" icon= "https://i.pinimg.com/originals/f9/7d/b2/f97db283dba2ec6413ca6f83a34bb851.jpg" bt="Learn more about City Bakery" />
      <SurpriseSomeOne  list={Surp} />
      <Instagram list={instaData}/>
      <TellaFriend />
      <Footer />
      <Modal  cart={value} setCart={setValue} showModal={showModal} setShowModal={setShowModal}  />
    </div> 
  );
}

export default App;
