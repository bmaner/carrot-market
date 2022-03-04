import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-500" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500 text-gray-700"
        >
          {/* label 태그안에 SVG와 input을 넣고 못생긴 input에 hidden 처리 해놓으면 svg를 눌렀을 때 input을 눌렀을 때와 같은 효과가 나타남*/}
          Change
          <input id="picture" className="hidden" type="file" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          className=" rounded-md shadow-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 appearance-none w-full px-3 py-2 border border-gray-300"
          type="email"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm border border-gray-300">
          <span className="flex text-sm justify-center items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
            +82
          </span>
          <input
            id="input"
            type="number"
            className="rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 appearance-none w-full px-3 py-2 border-transparent"
            required
          />
        </div>
      </div>
      <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
