import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            title="New iPhone 14"
            key={i}
            id={i}
            hearts={1}
            comments={1}
            price={99.99}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
