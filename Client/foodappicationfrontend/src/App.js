import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import 
{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom"
import SubItems from './Components/SubItems';
import CartItems from './Components/CartItems';
import { CartBadgeProvider } from './Context/Context';
import MainItems from './Components/MainItems';
import { MainArrayProvider } from './Context/MainItemsContext';
import {SelectedArrayProvider} from './Context/SelectedItems';
function App() {
  return (

    <div className="App">
   <CartBadgeProvider>
   <MainArrayProvider>
   <SelectedArrayProvider>
    <Router>
    <Routes>

    <Route path="/" element={<div><Header/> <MainItems/></div>} >
    </Route>
    
    <Route exact path="/subitems/:id" element={<div><SubItems/> </div>}> </Route>

    <Route exact path="/cartItems" element={<CartItems/>} ></Route>

    </Routes>
    </Router>
    
    </SelectedArrayProvider>
    </MainArrayProvider>
    </CartBadgeProvider>
    </div>
  );
}

export default App;
//<!--commit for git-->