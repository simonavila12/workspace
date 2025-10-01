import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let estudiantes = [
    {nombre: "Fulanito", apellido: "de tal"}, 
    {nombre: "Peranito", apellido: "perez"},
    {nombre: "megamente", apellido: "Ospina"},
  ];
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/estudiantes' element={<Lista listaestudiantes={estudiantes} />} />
       </Routes>
      <Lista listaestudiantes={estudiantes} />
      <Footer />
    </div>
    </BrowserRouter>
  
  );
}

export default App;
