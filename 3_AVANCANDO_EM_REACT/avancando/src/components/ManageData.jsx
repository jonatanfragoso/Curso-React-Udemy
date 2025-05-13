import { useState } from "react";
const ManageData = () => {
  // useState é um Hook que permite adicionar o estado do React a um componente funcional
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar Variável</button>
    </div>
  );
};

export default ManageData;
