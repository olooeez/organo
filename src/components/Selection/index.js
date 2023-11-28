import "./index.css";

const Selection = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select>
        {props.itens.map((iten) => {
          return <option key={iten}>{iten}</option>;
        })}
      </select>
    </div>
  );
};

export default Selection;
