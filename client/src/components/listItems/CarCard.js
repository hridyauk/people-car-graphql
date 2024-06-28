import { Card } from "antd";
import { useState } from "react";
import UpdateCar from "../forms/UpdateCar";
import { EditOutlined } from "@ant-design/icons";
import RemoveCar from "../buttons/RemoveCar";

const CarCard = (props) => {
  const { id, year, make, model, price, listOfPeople } = props;

  const [editMode, setEditmode] = useState(false);

  const handleEditButton = () => {
    setEditmode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <UpdateCar
          carsOwned={props}
          onCancel={handleEditButton}
          listOfPeople={listOfPeople}
        />
      ) : (
        <Card
          type="inner"
          title={`${year} ${make} ${model} -> $ ${price}`}
          style={{ margin: "1rem 0" }}
          actions={[
            <EditOutlined key="edit" onClick={handleEditButton} />,
            <RemoveCar id={id} />,
          ]}
        ></Card>
      )}
    </>
  );
};

export default CarCard;
