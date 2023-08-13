import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // state names
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // router
  const route = useRouter();

  // handle login account
  const handleLoginAccount = async () => {
    //

    try {
      await signInWithEmailAndPassword(auth, email, password);

      route.push('/')
    } catch (error) {
      console.log(error);
      if (error == "FirebaseError: Firebase: Error (auth/user-not-found).") {
        setError("User not registerd...");
      } else if (
        error == "FirebaseError: Firebase: Error (auth/wrong-password)."
      ) {
        setError("Wrong password...");
      }
    }

    console.log(email, password);
  };

  return (
    <form className="w-3/5 mx-auto h-screen flex justify-center items-center">
      <div className="w-96">
        <p className="text-3xl font-semibold">Login account</p>
        <p className="">Let's explore the unexplored</p>

        {error !== "" ? (
          <p className="bg-red-100 px-4 py-2 rounded-md">{error}</p>
        ) : null}

        <div className="mb-6 mt-8">
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
          onClick={handleLoginAccount}
        >
          Login
        </button>

        <button
          type="button"
          className="w-full py-2 rounded-lg mt-6 hover:bg-blue-50"
          onClick={() => route.push("/signup")}
        >
          Don't have an account?
        </button>
      </div>
    </form>
  );
};

export default Login;
