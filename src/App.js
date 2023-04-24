import './App.css';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './containers';
import { Navbar } from './components';


function App() {
  return (
    <div className="App">
      <Navbar />
    <Header />
    <AboutUs />
    <Menu/>
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

    </div>
  );
}

export default App;
