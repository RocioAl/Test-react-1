import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MiApi from "./components/MiApi";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");

  const search = (e) => {
    setFilterData(e.target.value)
  }

  const sortDescending = () => {
    const sortDescData = [...data].sort((a, b) =>
      a.name > b.name ? -1 : a.name < b.name ? 1 : 0
    );
    setData(sortDescData);
  }

  const sortAscending = () => {
    const sortAscData = [...data].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setData(sortAscData);
  }
  return (
    <div className="App">
      <Header
        title="¡Rick and Morty!"
        placeholder="Buscar"
        onChange={search}
        ascending={sortAscending}
        textAscending="Ascendente"
        descending={sortDescending}
        textDescending="Descendente"
      />
      <MiApi
        data={data}
        setData={setData}
        filterData={filterData}
      />
      <Footer text="Regístrate" cite="Aquí" />
    </div>
  );
}

export default App;



