import getData from "./getData";

/**
 * Renders a list of items based on the provided type.
 *
 * @param {string} type - The type of items to render
 * @return {JSX.Element} The rendered list of items
 */
const List = async ({ type }: { type: string }) => {
  const data = await getData();

  return (
    <ul>
      {data.map((value: any) => {
        if (value.Type === type) {
          return (
            <li key={value.Name}>
              <a href={value.Link} target="_blank" rel="noreferrer">
                {value.Name}
              </a> - {value.Description}
            </li>
          );
        }
      })}
    </ul>
  );
}

export default List;
