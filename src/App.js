// Componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Offers from './components/Offers/Offers'
import Instagram from './components/Instagram/Instagram';

// Data
import { list } from './data/offers'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Offers list={list} />
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
