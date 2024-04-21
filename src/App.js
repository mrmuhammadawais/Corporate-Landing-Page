
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from '../src/components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
// import AppContact from './components/contact';
// import AppServices from './components/services';
// import AppTestimonals from './components/testimonls';
import './App.css';

function App() {
  return (
    <div className="App">
    <header id="header">
    <AppHeader/>
    </header>
    <main>
    <AppHero/>
    <AppAbout/>
    {/* <AppContact/> */}
    {/* <AppServices/> */}
    {/* <AppTestimonals/> */}
   
      </main>
   
    </div>
  );
}

export default App;
