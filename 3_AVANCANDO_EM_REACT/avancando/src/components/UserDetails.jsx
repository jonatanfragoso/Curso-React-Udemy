import React from "react";

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {idade >= 18 ? (
        <p>Pode tirar carteira!</p>
      ) : (
        <p>Não pode tirar carteira!</p>
      )}
    </div>
    // <div>
    //   {pessoas.map((pessoa) => (
    //     <div key={pessoa.id}>
    //       <h2>{pessoa.name}</h2>
    //       <p>{pessoa.email}</p>
    //       <p>{pessoa.age}</p>
    //       <p>{pessoa.profissao}</p>
    //       {pessoas.idade >= 18 ? (
    //         <p>Pode tirar carteira!</p>
    //       ) : (
    //         <p>Não pode tirar carteira!</p>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
};

export default UserDetails;
