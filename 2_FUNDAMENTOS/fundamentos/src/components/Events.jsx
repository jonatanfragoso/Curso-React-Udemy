const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento do botão clicado!");
  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
          <button onClick={() => console.log("Evento do botão clicado!")}>
            Clique aqui também!
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;
