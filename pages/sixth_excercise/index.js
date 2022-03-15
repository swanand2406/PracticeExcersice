export default function ListItems(props) {
  const items = props.animals;
  const listItem = items.map((item) => <li key={item.toString()}>{item}</li>);
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
}
