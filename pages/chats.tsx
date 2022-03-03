import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
        return (
          <div
            key={i}
            className="px-4 flex items-center space-x-3 py-3 cursor-pointer last:border-b-0"
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;