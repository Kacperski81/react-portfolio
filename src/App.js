import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./app.css"
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  align-content: space-between;
  border: 1px solid;
  margin: 0 auto;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>Page not found!</h1>}></Route>
      </Routes>
      <Footer />
    </AppWrapper>
  )
}

export default App;