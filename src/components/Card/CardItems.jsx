import { use } from "react";

function CardItems() {
  async function fetchItems() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }

  const items = use(fetchItems());

  return (
    <div className="flex flex-col items-center">
      {items.map((_i) => {
        return (
          <div key={_i.id}>
            <p>{_i.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardItems;
