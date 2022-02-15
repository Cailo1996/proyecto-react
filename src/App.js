// Componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Offers from './components/Offers/Offers';
import Instagram from './components/Instagram/Instagram';
import OurPartner from './components/Our Partner/OurPartner';
import Banner from './components/Banner/Banner';
import SurpriseSomeone from './components/Surprise Someone/SurpriseSomeone';
import WhoMakes from './components/Who Makes/WhoMakes';
import TellaFriend from './components/Tell a Friend/TellaFriend';
import WhyChoose from './components/Why Choose/WhyChoose';
import Warning from './components/Warning/Warning';

// Data
import { list } from './data/offers'

function App() {
  return (
    <div>
      <Warning/>
      <Navbar/>
      <Banner/>
      <Offers list={list} />
      <WhyChoose/>
      <WhoMakes/>
      <OurPartner/>
      <SurpriseSomeone/>
      <Instagram/>
      <TellaFriend/>
      <Footer/>
    </div>
  );
}

export default App;
