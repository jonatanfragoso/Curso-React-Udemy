import { useState } from "react";
const ConditionalRender = () => {
  const [x] = useState(false);
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && true ? <p> x é verdadeiro! </p> : <p> x é falso! </p>}
    </div>
  );
};

export default ConditionalRender;
