import Person from "./Person";

const Contacts = ({ peopleToShow }) => {
  return (
    <div>
      {peopleToShow.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default Contacts;