import "./App.css";
import Carros from "./components/Carros";

function App() {
  const carros = [
    { id: 1, modelo: "Fusca", cor: "azul" },
    { id: 2, modelo: "Civic", cor: "preto" },
    { id: 3, modelo: "Palio", cor: "branco" },
  ];
  return (
    <>
      <div className="divGlobal">
        <h1 className="title">Carros</h1>
        {carros.map((carro) => (
          <Carros key={carro.id} modelo={carro.modelo} cor={carro.cor}></Carros>
        ))}
      </div>
    </>
  );
}

export default App;
