const Total = ({ parts }) => {
  let total = parts.reduce((acc, obj, i) => {
    return acc + obj.exercises;
  }, 0);

  return <strong>Total Exercises: {total}</strong>;
};

export default Total;
