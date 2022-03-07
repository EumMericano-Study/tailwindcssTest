import type { NextPage } from "next";

const Form2: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="SomeText"
        className="p-1 border border-gray-200 rounded-md peer"
      />
      <span className="hidden text-red-500 peer-invalid:block">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block">Awesome Text</span>
      <span className="peer-hover:text-yellow-400">Hello</span>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form2;
