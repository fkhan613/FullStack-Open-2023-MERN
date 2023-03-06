import Person from "./Person";

const Contacts = ({ peopleToShow, remove }) => {
  return (
    <div>
      {peopleToShow.map((person) => (
        <Person remove={remove} key={person.id} id={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default Contacts;
