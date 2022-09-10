import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {useState} from 'react';
import { Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import Proofs from './routes-pages/Proofs/Proofs';
import Redirect from './routes-pages/Redirect/Redirect';
import Travel from './routes-pages/travel/travel';
import UserId from './routes-pages/Proofs/UserId/UserId';
import { AuthContext } from './API/AuthContext';
import Calculator from './routes-pages/calculate/Calculator';
import Loading from './routes-pages/Proofs/Loading/Loading';


function App() {
  
  const [user , setUser] = useState([])
  return (
    <AuthContext.Provider value={{
        user,
        setUser
    }}>
         <BrowserRouter>
           <div className="App">
           <Header/>
           <Routes>
              <Route path='/travel' element={<Travel/>}/>
              <Route path='/proofs' element={<Proofs/>}/>
              <Route path='/loading' element={<Loading/>}/>
              <Route path='/calculate' element={<Calculator/>}/>
              <Route path='/user/:id' element={<UserId/>}/>
              <Route path='*' element={<Redirect/>}/>
           </Routes>
           </div>
         </BrowserRouter>
    </AuthContext.Provider>
   
  );
}

export default App;
