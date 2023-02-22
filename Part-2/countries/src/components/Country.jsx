const Country = (props) => {
  if (props.showBox) {
    return (
      <>
        <span>
          <li>{props.name}</li>
        </span>
        <span>
          <button>Show More</button>
        </span>
      </>
    );
  }
};

export default Country;
