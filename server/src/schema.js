import find from "lodash.find";

const people = [
  {
    id: "1",
    firstName: "Bill",
    lastName: "Gates",
  },
  {
    id: "2",
    firstName: "Steve",
    lastName: "Jobs",
  },
  {
    id: "3",
    firstName: "Linux",
    lastName: "Torvalds",
  },
];

const cars = [
  {
    id: "1",
    year: "2019",
    make: "Toyota",
    model: "Corolla",
    price: "40000",
    personId: "1",
  },
  {
    id: "2",
    year: "2018",
    make: "Lexus",
    model: "LX 600",
    price: "13000",
    personId: "1",
  },
  {
    id: "3",
    year: "2017",
    make: "Honda",
    model: "Civic",
    price: "20000",
    personId: "1",
  },
  {
    id: "4",
    year: "2019",
    make: "Acura ",
    model: "MDX",
    price: "60000",
    personId: "2",
  },
  {
    id: "5",
    year: "2018",
    make: "Ford",
    model: "Focus",
    price: "35000",
    personId: "2",
  },
  {
    id: "6",
    year: "2017",
    make: "Honda",
    model: "Pilot",
    price: "45000",
    personId: "2",
  },
  {
    id: "7",
    year: "2019",
    make: "Volkswagen",
    model: "Golf",
    price: "40000",
    personId: "3",
  },
  {
    id: "8",
    year: "2018",
    make: "Kia",
    model: "Sorento",
    price: "45000",
    personId: "3",
  },
  {
    id: "9",
    year: "2017",
    make: "Volvo",
    model: "XC40",
    price: "55000",
    personId: "3",
  },
];

const typeDefs = `
    type Person {
        id: String!
        firstName: String
        lastName: String
        carsOwned: [Car]
    }
        
    type Car {
        id: String!
        year: Int
        make: String
        model: String
        price: Float
        personId: String!
    }

    type Query {
      person(id: String!): Person
      people: [Person]
      car(id: String!): Car
      cars: [Car]
    }

    type Mutation {
      addPerson(id: String!, firstName: String!, lastName: String!): Person
    }
`;

const resolvers = {
  Query: {
    people: () => people,
    person(root, args) {
      return find(people, { id: args.id });
    },
    cars: () => cars,
    car(root, args) {
      return find(cars, { id: args.id });
    },
  },
  Person: {
    carsOwned: (person) => {
      return cars.filter((car) => car.personId === person.id);
    },
  },
  Mutation: {
    addPerson: (root, args) => {
      const newPerson = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
      };

      people.push(newPerson);
      return newPerson;
    },
  },
};

export { typeDefs, resolvers };
