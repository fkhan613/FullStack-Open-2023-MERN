const InputBox = ({
  searchQuery,
  setSearchQuery,
  placeholder = "Search for Countries",
}) => {
  return (
    <div className="form__group field">
      <input
        required=""
        placeholder="Name"
        className="form__field"
        type="input"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        name="name"
      ></input>
      <label className="form__label" htmlFor="name">
        {placeholder}
      </label>
    </div>
  );
};

export default InputBox;
