import styles from "./MyForm.module.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, role);
    // setName("");
    // setEmail("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            onChange={handleName}
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            value={name}
          />
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função do sistema</span>
          <select
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
