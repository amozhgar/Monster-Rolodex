import "./card-list.css";

const CardList = ({ monsters }) => {
  const { name, email, id } = monsters;
  return (
    <div className="card-list">
      {monsters.map((mon) => {
        return (
          <div className="card-container" key={mon.id}>
            <img
              alt={`monster ${mon.name}`}
              src={`https://robohash.org/${mon.id}?set=set2&size=180x180`}
            />
            <h2>{mon.name}</h2>
            <p>{mon.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
