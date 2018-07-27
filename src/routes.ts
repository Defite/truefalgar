import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Callback from './components/Callback/Callback';


const indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: "/home", name: "Home", component: Home, exclude: true },
  // { path: "/about", name: "About", component: About },
  // { path: "/login", name: "Login", component: Login },
  // { path: "/callback", name: "Login", component: Callback, exclude: true },
];

export default indexRoutes;
