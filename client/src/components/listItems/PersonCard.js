import { Card } from "antd";
import CarCard from "./CarCard";

const PersonCard = (props) => {
  const { id, firstName, lastName, carsOwned, listOfPeople } = props;
  console.log("person card car: ", listOfPeople);
  return (
    <Card title={`${firstName} ${lastName}`} style={{ margin: "1rem 0" }}>
      {carsOwned.length > 0 ? (
        carsOwned.map((car) => (
          <CarCard
            id={car.id}
            year={car.year}
            make={car.make}
            model={car.model}
            price={car.price}
            personId={car.personId}
            key={car.id}
            listOfPeople={listOfPeople}
          />
        ))
      ) : (
        <></>
      )}
    </Card>
  );
};

export default PersonCard;
