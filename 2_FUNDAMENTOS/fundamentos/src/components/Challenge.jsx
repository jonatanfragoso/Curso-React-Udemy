const Challenge = () => {
  const a = 2;
  const b = 3;

  return (
    <div>
      <h1>Challenge</h1>
      <button
        onClick={() => {
          console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);
        }}
      >
        Calcular
      </button>
    </div>
  );
};

export default Challenge;
