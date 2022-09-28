import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // console.log(search);
  return (
    <div>
      <Header handleSearch={handleSearch}></Header>
      <Shop search={search}></Shop>
    </div>
  );
}

export default App;
