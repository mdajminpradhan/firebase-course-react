import { useRouter } from "next/router";
import { useState } from "react";

const Signup = () => {
  // state names
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // router
  const route = useRouter();

  // handle create account
  const handleCreateAccount = () => {
    //

    console.log(firstName, lastName, address, phone, email, password);
  };

  return (
    <form className="w-2/5 mx-auto h-screen flex justify-center items-center">
      <div>
        <p className="text-3xl font-semibold">Create account</p>
        <p className="">Let's explore the unexplored</p>

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
          <div>
            <label for="first_name" className="block mb-2 text-sm font-medium ">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="border border-gray-200 px-2 py-2 rounded-lg w-full focus:ring-1 focus:ring-gray-200 outline-none"
              required
              autoComplete="off"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <label for="last_name" className="block mb-2 text-sm font-medium ">
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="border border-gray-200 px-2 py-2 rounded-lg w-full focus:ring-1 focus:ring-gray-200 outline-none"
              required
              autoComplete="off"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div>
            <label for="company" className="block mb-2 text-sm font-medium ">
              Address
            </label>
            <input
              type="text"
              id="company"
              className="border border-gray-200 px-2 py-2 rounded-lg w-full placeholder-gray-300 focus:ring-1 focus:ring-gray-200 outline-none"
              required
              autoComplete="off"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div>
            <label for="phone" className="block mb-2 text-sm font-medium ">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-200 px-2 py-2 rounded-lg w-full placeholder-gray-300 focus:ring-1 focus:ring-gray-200 outline-none"
              required
              autoComplete="off"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-200 px-2 py-2 rounded-lg w-full placeholder-gray-300 focus:ring-1 focus:ring-gray-200 outline-none"
            required
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-200 px-2 py-2 rounded-lg w-full placeholder-gray-300 focus:ring-1 focus:ring-gray-200 outline-none"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 py-2 text-white rounded-lg mt-2 hover:bg-blue-400"
          onClick={handleCreateAccount}
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full py-2 rounded-lg mt-6 hover:bg-blue-50"
          onClick={() => route.push("/login")}
        >
          Already have an account?
        </button>
      </div>
    </form>
  );
};

export default Signup;
