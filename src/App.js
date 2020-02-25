// React import:
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Style import:
import './global.style.css'

// context import: 

// Components: 
import NavigationComponent from './component/global/navigation/navigation.component';
import FooterComponent from './component/global/footer/footer.component';
import MainForsideComponent from './component/local/frontpage/mainForside.component';
import ProducterComponent from './component/local/produkter/producter.component';
import ProduktDetaljeComponent from './component/local/produktDetaljevisning/produktDetaljer.component';

// Context's



function App() {
  return (
    <div className="App">
    <Router>



        <header>
          <Route path="/" component={NavigationComponent} />
        </header>

        <main>
        <Route exact path="/" component={MainForsideComponent} />
        <Route path="/produkter/:id" component={ProducterComponent} />

        <Route path="/produkt/:id" component={ProduktDetaljeComponent} />
        </main>

        <footer>
          <Route path='/' component={FooterComponent} />
        </footer>

    </Router>
    </div>
  );
}

export default App;
