import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500 text-gray-700"
          >
            {/* label 태그안에 SVG와 input을 넣고 못생긴 input에 hidden 처리 해놓으면 svg를 눌렀을 때 input을 눌렀을 때와 같은 효과가 나타남*/}
            Change
            <input
              id="picture"
              className="hidden"
              type="file"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          label="Email address"
          name="email"
          kind="text"
          type="email"
          required
        />
        <Input
          required
          label="Phone number"
          name="phone"
          kind="phone"
          type="number"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};

export default EditProfile;
