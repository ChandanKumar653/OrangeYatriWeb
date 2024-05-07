import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav';
import NotFound from './PageNotFound';
function App() {
  return (
    <div className="App bg-gradient-to-br from-orange-200 to-orange-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

       <Route path="*" element={<NotFound />} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
