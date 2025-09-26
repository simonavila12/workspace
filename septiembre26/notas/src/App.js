import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    {nombre: "Fulanito", apellido: "de tal"}, 
    {nombre: "Peranito", apellido: "perez"},
    {nombre: "megamente", apellido: "Ospina"},
  ];
  return (
    <div className="App">
      <Lista listaestudiantes={estudiantes} />
      <Footer />
    </div>
  );
}

export default App;
