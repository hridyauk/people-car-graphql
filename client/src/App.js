import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
// import AddPerson from "./components/forms/AddPerson";
// import Title from "./components/layout/Title";
// import PeopleCarsDetail from "./components/lists/PeopleCarsDetail";
// import AddCar from "./components/forms/AddCar";
import PeopleCar from "./components/layout/PeopleCar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PeopleCar />
      </div>
    </ApolloProvider>
  );
}

export default App;
