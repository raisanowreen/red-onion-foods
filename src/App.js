import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Banner from './Pages/Home/Banner/Banner';
import Foods from './Pages/Home/Foods/Foods';
import Strategies from './Pages/Home/Strategies/Strategies';
import NotFound from './Pages/NotFound/NotFound';
import MealDetails from './Pages/Home/MealDetails/MealDetails';
import SingleFood from './Pages/SingleFood/SingleFood';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import UserInfo from './Pages/UserInfo/UserInfo';
function App() {
  return (
   <AuthProvider>
     <Router>
     <Header></Header>
<Switch>
<Route exact path="/home">
       <Home></Home>
     </Route>
<Route exact path="/">
       <Home></Home>
     </Route>
<Route exact path="/banner">
       <Banner></Banner>
     </Route>
<Route exact path="/foods">
       <Foods></Foods>
     </Route>
<Route exact path="/strategies">
       <Strategies></Strategies>
     </Route>
<Route exact path="/mealDetails">
       <MealDetails></MealDetails>
     </Route>
<PrivateRoute exact path="/singleFood/:foodId">
       <SingleFood></SingleFood>
     </PrivateRoute>
<Route exact path="/login">
       <Login></Login>
     </Route>
<Route exact path="/userinfo">
       <UserInfo></UserInfo>
     </Route>
<Route exact path="/whyus">
       <WhyUs></WhyUs>
     </Route>
<Route exact path="*">
       <NotFound></NotFound>
     </Route>
</Switch>
<Footer></Footer>
   </Router>
   </AuthProvider>
  );
}

export default App;
