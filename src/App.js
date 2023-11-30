import { v4 as uuidv4 } from "uuid";
import { darken } from "polished";
import React, { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);

  const initial = [
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [colaborators, setColaborators] = useState(initial);

  const onColaboratorSigned = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  };

  const deleteColaborator = (id) => {
    setColaborators(
      colaborators.filter((colaborator) => colaborator.id !== id)
    );
  };

  const changeTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.secondaryColor = color;
          team.primaryColor = darken(0.1, color);
        }

        return team;
      })
    );
  };

  const onTeamSigned = (team) => {
    setTeams([...teams, team]);
  };

  const favoriteColaborator = (id) => {
    setColaborators(
      colaborators.map((colaborator) => {
        if (colaborator.id === id) {
          colaborator.favorite = !colaborator.favorite;
          console.log(colaborator);
        }

        return colaborator;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onColaboratorSigned={onColaboratorSigned}
        onTeamSigned={onTeamSigned}
      />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => (
          <Team
            changeTeamColor={changeTeamColor}
            key={index}
            id={team.id}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            colaborators={colaborators.filter(
              (colaborator) => colaborator.team === team.name
            )}
            onDelete={deleteColaborator}
            onFavorite={favoriteColaborator}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
