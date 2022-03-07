import type { NextPage } from "next";

const Details: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 px-5">
        <details className="select-none open:bg-sky-100">
          <summary className="cursor-pointer">What is my fav food.</summary>
          <span>마라탕</span>
          <span>불닭볶음면</span>
          <span>닭갈비</span>
        </details>
        <span className="selection:bg-indigo-300 selection:text-white">
          일반 텍스트
        </span>
      </div>
      <br />
      <div className="flex flex-col space-y-2 px-5">
        <ul className="list-decimal marker:text-teal-600 marker:text-xs">
          <li>hi</li>
          <li>hello</li>
          <li>hey</li>
        </ul>
        <input
          type="file"
          className="file:cursor-pointer file:transition-colors file:hover:bg-purple-400 file:hover:text-white file:border-0 file:rounded-xl file:bg-purple-200 file:px-5 file:text-emerald-600"
        />
      </div>
      <p className="first-letter:text-7xl first-letter:hover:text-purple-800 transition-colors">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ea.
      </p>
    </div>
  );
};

export default Details;
