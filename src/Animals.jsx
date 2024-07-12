function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
}

function Animals() {
  // const animals = ["Cow", "Dog", "Pelican", "Cat", "Mongoose"];

  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  );
}

export default Animals;
