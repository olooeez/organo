import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Selection from "../Selection";
import "./index.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onColaboratorSigned({
      name: name,
      job: job,
      image: image,
      team: team,
    });

    setName("");
    setJob("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          onChange={(value) => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
        />
        <Input
          onChange={(value) => setJob(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={job}
        />
        <Input
          onChange={(value) => setImage(value)}
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
        />
        <Selection
          onChange={(value) => setTeam(value)}
          required={true}
          label="Time"
          items={props.teams}
          value={team}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
