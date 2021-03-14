import { useSelector } from "react-redux";

const Report = (props) => {
  const listOfItems = useSelector((state) => state.listOfItems);

  return (
    <div>
      <h3>Inventory </h3>
      <ul className="list-unstyled">
        {listOfItems && listOfItems.map((p) => <li>{p}</li>)}
      </ul>
    </div>
  );
};

export default Report;
