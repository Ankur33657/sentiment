import './App.css';
import Nav from './component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import PrivateComponent from './component/privatecomponent';
import Addproduct  from './component/Addproduct';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import Profile from './component/Profile';
import Buy from './component/Buy';
import Popu from './component/Popu';

function App() {
  return (
    <>
    <BrowserRouter>
   <Nav />
   <Routes>

    <Route element={<PrivateComponent/>}>
     <Route path="/" element={<ProductList/>}/>
     <Route path="/add" element={<Addproduct/>}/>
     <Route path="/update" element={<Popu/>}/>
     <Route path="/logout" element={<h1>Logout page</h1>}/>
     <Route path="/profile" element={<Profile/>}/>
     </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detail" element={<ProductDetails/>}/>
      <Route path="/buynow" element={<Buy/>}/>
      {/* <Route path="/sidebar" element={<Sidebar/>}/> */}
   </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
