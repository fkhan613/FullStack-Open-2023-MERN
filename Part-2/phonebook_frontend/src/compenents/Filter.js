const Filter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      Search:{""}
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
