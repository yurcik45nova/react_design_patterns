const isObject = (data) => typeof data === "object" && data !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  console.log("pairs: ", pairs);

  return (
    <>
      {pairs.map(([key, value], index) => {
        console.log({ key, value });
        return (
          <li key={index}>
            key: {key}
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
