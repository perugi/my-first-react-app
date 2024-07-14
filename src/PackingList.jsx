function Item({ isPacked, name }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }

  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suits" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
