import { Divider, Input } from "antd";

// Iteration 5
function Search({ query, setQuery }) {
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" value={query} onChange={handleInput} />
    </>
  );
}

export default Search;
