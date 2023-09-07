const CarItem = ({ car }) => {
  const { make, model } = car;
  return (
    <li>
      {make}/{model}
    </li>
  );
};
export default CarItem;
