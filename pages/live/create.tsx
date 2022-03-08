import type { NextPage } from "next";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";
import Button from "../../components/button";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className=" space-y-5 py-10 px-4">
        <Input required label="Name" name="name" type="email" />
        <Input
          required
          label="Price"
          name="price"
          kind="price"
          placeholder="0.00"
        />
        <TextArea label="Description" name="des" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
