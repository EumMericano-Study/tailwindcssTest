import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-400 py-10 px-10 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        {["a", "b", "c", "d", "e"].map((_, index) => (
          <div
            key={index}
            className="flex justify-between my-2 even:bg-blue-50 odd: bg-yellow-50"
          >
            <span className="text-gray-400">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
        ))}
        {["a", "b", ""].map((c, index) => (
          <div key={index} className="bg-stone-300 p-2 empty:hidden">
            {c}
          </div>
        ))}
        <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed ">
          <span>Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <button className="w-3/4 bg-blue-500 text-center text-white mt-5 p-2 m-auto rounded-xl hover:bg-blue-600">
          Checkout
        </button>
      </div>
      <div className="bg-white shadow-xl overflow-hidden rounded-3xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="relative -top-5 bg-white p-6 rounded-3xl">
          <div className="relative -top-16 flex justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">$340</span>
            </div>
            <div className="w-24 h-24 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-12 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️ 4.8</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium mt-3">Swoon Lounge</span>
          <span className="text-sm text-gray-500">Chair</span>
          <div className="flex justify-between items-center mt-3 mb-5">
            <div className="space-x-3">
              <button className="w-5 h-5 bg-yellow-500 transition focus:ring-2 ring-offset-2 ring-yellow-500 rounded-full" />
              <button className="w-5 h-5 bg-teal-500 transition focus:ring-2 ring-offset-2 ring-teal-500 rounded-full" />
              <button className="w-5 h-5 bg-indigo-500 transition focus:ring-2 ring-offset-2 ring-indigo-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="w-8 aspect-square flex justify-center items-center bg-blue-200 text-xl text-gray-500 rounded-lg p-1.5">
                -
              </button>
              <span>1</span>
              <button className="w-8 aspect-square flex justify-center items-center bg-blue-200 text-xl text-gray-500 rounded-lg p-1.5">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="w-2/4 bg-blue-500 text-center text-white p-4 rounded-2xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
