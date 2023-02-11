import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./app.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}>
          <Route path=":projectId" element={<Project />}></Route>
        </Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>Page not found!</h1>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;