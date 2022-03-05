import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-1">
          <span className="text-gray-400">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Tooly Table</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed ">
          <span>Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="w-1/2 bg-blue-500 text-center text-white mt-5 p-2 m-auto rounded-xl">
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
