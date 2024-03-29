import './App.css';
import Navber from './components/shared/navbar/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AllProducts from './components/AllProducts/AllProducts';
import LogIn from './components/shared/SignIn/SignIn';
import SignUp from './components/shared/SignUp/SignUp';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/shared/NotFound/NotFound';
import RequireAuth from './components/shared/SignIn/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import Myprofile from './components/Dashboard/MyProfile/Myprofile';
import Myorders from './components/Dashboard/MyOrders/Myorders';
import Order from './components/Order/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/Dashboard/Users/Users';
import RequireAdmin from './components/shared/SignIn/RequireAdmin';
import AddProduct from './components/Dashboard/AddProducts/AddProducts';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageAllOrders from './components/Dashboard/ManageAllOrders/ManageAllOrders';
import Payment from './components/Dashboard/Payment/Payment';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App mx-0 md:mx-12">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='home' element={<Home></Home>}></Route>

        <Route path='products' element={<AllProducts></AllProducts>}></Route>

        <Route path='contact' element={<Contact></Contact>}></Route>

        <Route path='signin' element={<LogIn></LogIn>}></Route>

        <Route path='signup' element={<SignUp></SignUp>}></Route>

        <Route path='order/:orderId' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        {/* Dashboard route starts-------- */}

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Myprofile></Myprofile>}></Route>

          <Route path='myOrders' element={<Myorders></Myorders>}></Route>

          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>

          <Route path='addreview' element={<AddReview></AddReview>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>

          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
          
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}></Route>
        </Route>

        {/* Dashboard route end-------- */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;


// git add .
// git commit -m "first commit"
// git push 

// card code 
// html code:------
// <div className="card">
//   Click me
// </div>

// css code:------
// .card {
//   width: 210px;
//   height: 235px;
//   background: #212121;
//   box-shadow: rgba(0, 0, 0, 0.4) 10px 20px 30px, rgba(0, 0, 0, 0.3) 10px 1px 53px 3px, rgba(1, 0, 0, 0.2) 0px -1px 3px inset;
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.5s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   user-select: none;
//   font-weight: bolder;
//   color: #fff;
// }

// .card:hover {
//   transform: scale(1.021);
// }

// .card:active {
//   transform: scale(0.95) rotateZ(1.1deg);
// }