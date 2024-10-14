import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './pages/About';
import GalleryPage from './pages/Gallery';
import { HomePage } from './pages/Home';
import PostsPage from './pages/PostsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ServerForms from './components/ServerForms'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App(){

  return (
    <BrowserRouter>
    
    <Header/>
    <Navbar/>
  
    
    <Routes>
      <Route path='/posts' element={<PostsPage />} />
      <Route path='/add-post' element={<ServerForms/>} />
      <Route path='/about' element={<About />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path='/' element={<HomePage></HomePage>}/>
      <Route path='*' element= {<NotFoundPage/>} />
    


    </Routes>
    
    
    <Footer/>
    </BrowserRouter>
    
  );
}
