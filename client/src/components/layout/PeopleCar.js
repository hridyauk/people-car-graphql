import { useQuery } from "@apollo/client";
import AddCar from "../forms/AddCar";
import AddPerson from "../forms/AddPerson";
import PeopleCarsDetail from "../lists/PeopleCarsDetail";
import Title from "./Title";
import { GET_PEOPLE } from "../../graphql/queries";

const PeopleCar = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  return (
    <div>
      <Title />
      <AddPerson />
      <AddCar listOfPeople={data} />
      <PeopleCarsDetail />
    </div>
  );
};

export default PeopleCar;
