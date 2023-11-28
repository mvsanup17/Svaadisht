import './design.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Foodindex from './pages/foodindex';
import Home from './pages/home';
import Cuisines from './pages/cuisines';
import Indian from './pages/indian';
import Chinese from './pages/chinese';
import Mexican from './pages/mexican';
import Italian from './pages/italian';
import American from './pages/american';
import French from './pages/french';
import Spanish from './pages/spanish';
import Japan from './pages/japan';
import Chefs from './pages/chefs';
import Sanjeev from './pages/sanjeev';
import Vikas from './pages/vikas';
import Jamie from './pages/jamie';
import Gordon from './pages/gordon';
import Pooja from './pages/pooja';
import Ranveer from './pages/ranveer';
import Yannick from './pages/yannick';
import Clare from './pages/clare';
import Aboutus from './pages/about';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Foodindex/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/cuisines' element={<Cuisines/>}/>
        <Route path='/indian' element={<Indian/>}/>
        <Route path='/chinese' element={<Chinese/>}/>
        <Route path='/mexican' element={<Mexican/>}/>
        <Route path='/italian' element={<Italian/>}/>
        <Route path='/american' element={<American/>}/>
        <Route path='/french' element={<French/>}/>
        <Route path='/spanish' element={<Spanish/>}/>
        <Route path='/japanese' element={<Japan/>}/>
        <Route path='/chefs' element={<Chefs/>}/>
        <Route path='/sanjeev' element={<Sanjeev/>}/>
        <Route path='/vikas' element={<Vikas/>}/>
        <Route path='/jamie' element={<Jamie/>}/>
        <Route path='/gordon' element={<Gordon/>}/>
        <Route path='/pooja' element={<Pooja/>}/>
        <Route path='/ranveer' element={<Ranveer/>}/>
        <Route path='/yannick' element={<Yannick/>}/>
        <Route path='/clare' element={<Clare/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
