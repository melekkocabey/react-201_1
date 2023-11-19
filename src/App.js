import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//pages
import Home from './pages/Dashboard/Home';
import Users from './pages/Dashboard/Users';
import Contact from './pages/Dashboard/Contact';
import UserDetail from './pages/Dashboard/UserDetail';
import Login from './pages/Auth/Login';
import DashboardLayout from './components/layouts/Dashboard';
import AuthLayout from './components/layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>{/* routing işlemleri yapacağımız tüm işlemleri yapmalı tüm comp kapsamalı routing ile herhangi bir işlem yapacaksam burada olmalı */}

      <Routes>{/* routlar tanımla */}
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<Error404 />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}
//* endpoint yok öyle bir sayfa yok
export default App;
