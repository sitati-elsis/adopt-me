import Pet from "./Pet";

const Results = (props) => {
  return (
    <div className="search">
      {!props.pets.length ? (
        <h1>No pets found</h1>
      ) : (
        props.pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
