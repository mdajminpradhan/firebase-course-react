import React, { useState, useLayoutEffect } from "react";

const Profile = () => {
  const [name, setName] = useState("");

  useLayoutEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  return (
    <div className="w-2/5 mx-auto mt-48">
      <form action="">
        <p className="mb-4 text-2xl">
          My name is - <span className="text-blue-400">{name}</span>
        </p>
        <input
          type="text"
          className="w-full border border-gray-300 px-2 py-1.5 rounded-lg focus:ring-0 outline-none"
          placeholder="Your name"
        />
        <button
          type="button"
          className="bg-blue-400 text-white px-6 py-1 rounded-md mt-4"
          onClick={() => {
            setName("Muhammad");
            localStorage.setItem("name", "Muhammad");
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
