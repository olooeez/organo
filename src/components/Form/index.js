import Input from "../Input";
import Selection from "../Selection";
import "./index.css";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Digite o endereço da imagem" />
        <Selection label="Time" itens={teams} />
      </form>
    </section>
  );
};

export default Form;
