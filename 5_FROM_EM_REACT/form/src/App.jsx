import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <div>
        <MyForm
          user={{
            name: "Jonatan",
            email: "Jonatanfragoso@gmail.com",
            bio: "Desenvolvedor Front-end",
            role: "editor",
          }}
        ></MyForm>
      </div>
    </>
  );
}

export default App;
