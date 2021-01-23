import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Document from './component/Document';
import Service from './component/Service';
import Card from './component/Card';
import Maps from './component/Maps';
import Payment from './component/Payment';
import Services from './component/Services';
import CardsItem from './component/CardsItem';

function App() {
  return (
    <div className="Contatiner">
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/Document' component={Document} />
        <Route path='/Service' component={Service} />
        <Route path='/Card' component={Card} />
        <Route path='/Maps' component={Maps} />
        <Route path='/Payment' component={Payment} />
        <Route path='/Services' component={Services} />
        <Route path='/CardsItem' component={CardsItem} />
      </Router>
    </div>
  );
}

export default App;
