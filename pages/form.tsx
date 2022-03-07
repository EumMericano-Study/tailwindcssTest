import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-400">
      <input
        type="text"
        required
        placeholder="Username"
        className="border-0 required:border-2 border-yellow-200 placeholder-shown:bg-red-100"
      />
      <input
        type="text"
        disabled
        placeholder="just text"
        className="invalid:bg-red-300 disabled:opacity-30"
      />
      <input
        type="text"
        required
        placeholder="just second text"
        className="required:border-2 border-yellow-500 invalid:bg-teal-500 valid:bg-stone-500"
      />
      <input type="password" required placeholder="Password" />
      <input type="submit" value="login" className="bg-white" />
    </form>
  );
};
export default Form;
