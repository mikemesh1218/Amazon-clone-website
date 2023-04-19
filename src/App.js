
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';



function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
            <Header/>
             <Home/>
          </div>
        }></Route>
        <Route path='/Login'element={<Login/>}></Route>
        <Route path='/Checkout'element={<div>
          <Header/>
          <Checkout/>
          </div>}>
        </Route>
      </Routes>  
     </BrowserRouter>
     )

}

export default App;
