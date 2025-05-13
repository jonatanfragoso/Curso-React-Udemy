// import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // function showMessage() {
  //   console.log("Fui clicado");
  // }

  // const [message, setMessage] = useState("");

  // const handleMessage = (msg) => {
  //   setMessage(msg);
  // };

  const pessoas = [
    { id: 1, name: "Jonatan", age: 32, profissao: "Programador" },
    { id: 2, name: "Maria", age: 15, profissao: "Estudante" },
    { id: 3, name: "José", age: 16, profissao: "Estudante" },
    { id: 4, name: "Ana", age: 18, profissao: "Estudante" },
    { id: 5, name: "Pedro", age: 26, profissao: "Pesquisador" },
  ];
  // const cars = [
  //   { id: 1, brand: "Ford", km: 10000, color: "preto" },
  //   { id: 2, brand: "Chevrolet", km: 20000, color: "branco" },
  //   { id: 3, brand: "Fiat", km: 30000, color: "azul" },
  // ];
  // const [name] = useState("Jonatan");
  return (
    <>
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" width="640" height="427" />
      </div>
      <div>
        <ManageData></ManageData>
        <ListRender></ListRender>
        <ConditionalRender></ConditionalRender>
        <ShowUserName name={name}></ShowUserName>
        <CarDetails brand="WV" km={100000} color="Azul"></CarDetails>
        <div>
          {cars.map((car) => (
            <CarDetails
              key={car.id}
              brand={car.brand}
              km={car.km}
              color={car.color}
            />
          ))}
        </div>
      </div> */}
      {/* <div>
        <Container teste="teste">
          <h1>Container</h1>
          <p>Esse é o conteúdo do container</p>
        </Container>

        <ExecuteFunction myFunction={showMessage}></ExecuteFunction>
        <Message msg={message}></Message>
        <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
      </div> */}

      <div>
        {/* <UserDetails pessoas={pessoas}></UserDetails> */}

        {pessoas.map((pessoa) => (
          <UserDetails
            key={pessoa.id}
            nome={pessoa.name}
            idade={pessoa.age}
            profissao={pessoa.profissao}
          ></UserDetails>
        ))}
      </div>
    </>
  );
}

export default App;
