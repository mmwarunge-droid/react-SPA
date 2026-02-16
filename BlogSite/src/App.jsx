 import Header from './components/Header';
 import ArticleList from './components/ArticleList';
 import Footer from './components/Footer';
 import articles from './data/articles';
 import "./style/Article.css";
 import { Routes, Route } from "react-router-dom";
 import About from "./pages/About";

 function App() {

  return (
    <>
  <Header title="Mark Warunge | Tech & Fintech Insights"/>
  <Routes>
    <Route path="/" element={<ArticleList posts={articles} />} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
    </>
  );
 };

 export default App
