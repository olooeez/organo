import Colaborator from "../Colaborator";
import "./index.css";

const Team = (props) => {
  return (
    props.colaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="colaborators">
          {props.colaborators.map((colaborator, index) => {
            return (
              <Colaborator
                key={index}
                name={colaborator.name}
                job={colaborator.job}
                image={colaborator.image}
                backgroundColor={props.primaryColor}
                onDelete={(index) => props.onDelete(index)}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
