import type { NextPage } from 'next'

const Home: NextPage = () => {
  // tailwind에서는 숫자 10이 2.5rem(40px)을 의미한다.
  // 그러므로 4가 1rem 16px이겠구만
  // flex flex-col space-y-5 대신에 grid gap-10을 넣을 수도 있다. 
  return <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5 min-h-screen">
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <span className="font-semibold text-3xl">Select Item</span>
      {/* <div className="flex justify-between my-2" >
        <span className="text-gray-500">Grey Chair</span>
        <span className="font-semibold">$19</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tooly Table</span>
        <span className="font-semibold">$19</span>
      </div> */}
      <ul>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div className="flex justify-between my-2 odd:bg-blue-50 even:bg-red-50 only:bg-red-50" key={i} >
            {/* <div className="flex justify-between my-2 first:bg-blue-50 last:bg-blue-50 only:bg-red-50" key={i} > */}
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>)
        })}
      </ul>
      <ul>
        {["a", "b", "c",""].map((c, i) => <li className="bg-yellow-50 py-3 empty:hidden" key={i}>{c}</li>)}
      </ul>

      <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
        <span>Total</span>
        <span className="font-semibold">$10</span>
      </div>
      <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto block hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">Checkout</button>
    </div>
    <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
      <div className="bg-blue-500 p-6 pb-14">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="rounded-3xl p-6 relative -top-5 bg-white">
        <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 ">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-200 rounded-full group-hover:bg-white transition-colors"/>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 ">Spent</span>
              <span className="font-medium">$340</span>
            </div>
        </div>
        <div className="relative flex flex-col items-center -mt-10 -mb-5">
          <span className="text-lg font-medium">Tony Molloy</span>
          <span className="text-sm text-gray-500">미국</span>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <div className="flex mb-5 justify-between items-center">
        <span>⬅️</span>
        <div className="space-x-3">
          <span>🌟 4.9</span>
          <span className="shadow-xl p-2 rounded-md">❤️</span>
        </div>
      </div>
      <div className="bg-zinc-200 h-72 mb-5"/>
      <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
        <div className="mt-3 mb-5 flex justify-between items-center">
          <div className="space-x-2"> 
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 ring-opacity-30 transition"></button>
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 ring-opacity-30 transition"></button>
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 ring-opacity-30 transition"></button>
          </div>
          <div className="flex items-center space-x-5 ">
            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
            <span>1</span>
            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
          </div>500
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="py-2 px-8  bg-blue-500 text-xs text-center text-white rounded-lg ">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="bg-white p-10 rounded-2xl shadow-xl">
      <form className="flex flex-col space-y-2 bg-blue-100 p-5 focus-within:bg-blue-500">
        {/* <input type="text" required placeholder="Username" className="required:border-2 border-yellow-100 invalid:bg-red-100 placeholder:text-red-300 "/> */}
        {/* <input disabled type="password" placeholder="Password" className="disabled:opacity-30 placeholder-shown:bg-lime-200" /> */}
        {/* <input  type="password" required placeholder="Password" className=""/> */}
        <input type="text" required placeholder="Username" className="border p-1 border-gray-400 rounded-lg peer"/>
        <span className="peer-valid:hidden peer-invalid:block peer-invalid:text-red-500">This input is invalid</span>
        <span className="hidden peer-valid:block peer-valid:text-blue-500 peer-invalid:hidden">Awesome username</span>
        <span className="hidden peer-hover:block">Hello</span>
        <input type="submit" value="login" className="bg-white" />
      </form>
    </div>
  </div>
}

export default Home
