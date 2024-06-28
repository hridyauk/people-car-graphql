import { useMutation } from "@apollo/client";
import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { GET_PEOPLE, UPDATE_CAR } from "../../graphql/queries";

const UpdateCar = ({ carsOwned, onCancel, listOfPeople }) => {
  const [form] = Form.useForm();
  const { id, year, make, model, price, personId } = carsOwned;

  // console.log("checking personid: ", personId);
  const [, forceUpdate] = useState();
  const [updateCar] = useMutation(UPDATE_CAR);

  useEffect(() => {
    forceUpdate();
  }, []);

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;

    updateCar({
      variables: {
        id,
        year: parseInt(year),
        make,
        model,
        price: parseFloat(price),
        personId,
      },
      // update: (cache, { data: { updateCar } }) => {
      //   const noUpdatePeople = cache.readQuery({ query: GET_PEOPLE });

      // console.log("no updatePeople: ", noUpdatePeople);

      // person updated
      // const personCarRemoved = noUpdatePeople.map((p) =>
      //   p.id === carsOwned.personId
      //     ? {
      //         ...p,
      //         carsOwned: p.carsOwned.filter((c) => c.id !== updateCar.id),
      //       }
      //     : p
      // );

      // const newPersonCarUpdated = personCarRemoved.map((p) =>
      //   p.id === carsOwned.personId
      //     ? { ...p, carsOwned: [...p.carsOwned, updateCar] }
      //     : p
      // );

      // const finalPeopleCar =
      //   updateCar.personId === carsOwned.personId
      //     ? noUpdatePeople.map((p) =>
      //         p.id === updateCar.personId
      //           ? {
      //               ...p,
      //               carsOwned: p.carsOwned.map((c) =>
      //                 c.id === updateCar.id ? updateCar : c
      //               ),
      //             }
      //           : p
      //       )
      //     : newPersonCarUpdated;

      // cache.writeQuery({
      //   query: GET_PEOPLE,
      //   data: noUpdatePeople,
      // });
      // },
    });

    onCancel();
  };

  return (
    <Form
      name="update-car-form"
      layout="inline"
      size="default"
      form={form}
      initialValues={{ year, make, model, price, personId }}
      onFinish={onFinish}
      style={{ margin: "1rem 0" }}
    >
      <Form.Item
        name="year"
        label="Year"
        rules={[{ required: true, message: "Please enter year" }]}
      >
        <Input style={{ width: "6rem" }} type="number" placeholder="Year" />
      </Form.Item>

      <Form.Item
        name="make"
        label="Make"
        rules={[{ required: true, message: "Please enter make" }]}
      >
        <Input placeholder="Make" />
      </Form.Item>

      <Form.Item
        name="model"
        label="Model"
        rules={[{ required: true, message: "Please enter model" }]}
      >
        <Input placeholder="Model" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter price" }]}
      >
        <Input
          style={{ width: "6rem" }}
          type="number"
          prefix="$"
          placeholder="Price"
        />
      </Form.Item>

      <Form.Item name="personId" label="Person">
        <Select placeholder="Select a person">
          {listOfPeople.map((p) => (
            <Select.Option value={p.id} key={p.id}>
              {p.firstName} {p.lastName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Car
          </Button>
        )}
      </Form.Item>

      <Button onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

export default UpdateCar;
