
import './App.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom'
import CartItems from './screens/CartItems';
import SelectedItem from './screens/SelectedItem';
import Signup from './screens/Signup';
import Login from './screens/Login';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/mycart' element={<CartItems />} />
          <Route path='/home/mycart' element={<CartItems />} />
          <Route path='/selectedItem/mycart' element={<CartItems />} />
          <Route path='/selectedItem' element={<SelectedItem />} />
          <Route path='*' element={<h1 style={{textAlign:'center', marginTop:'20px'}}>Error 404 Page Not Found </h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
