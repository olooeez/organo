import React, { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [colaborators, setColaborators] = useState([]);

  const onColaboratorSigned = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  };

  const deleteColaborator = (index) => {
    const updatedColaborators = [...colaborators];

    updatedColaborators.splice(index, 1);

    setColaborators(updatedColaborators);
  };

  return (
    <div>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onColaboratorSigned={onColaboratorSigned}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          colaborators={colaborators.filter(
            (colaborator) => colaborator.team === team.name
          )}
          onDelete={deleteColaborator}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
