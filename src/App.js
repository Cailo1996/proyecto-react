// Componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Offers from './components/Offers/Offers';

// Data
import { list } from './data/offers'

function App() {
  return (
    <div>
      <Navbar/>
      <Offers list={list} />
      <Footer/>
    </div>
  );
}

export default App;
