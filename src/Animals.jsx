function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => 
        animal.startsWith("C") ? <li>{animal}</li> : null)}
    </ul>
  )
}

function Animals() {
  const animals = ["Cow", "Dog", "Pelican", "Cat", "Mongoose"
  ];

  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  )
}

export default Animals;