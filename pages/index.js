import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

const Dashboard = () => {
  const route = useRouter();

  const [firstName, setFirstName] = useState("");
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (user !== null) {
        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((userData) => {
          console.log(userData.id);
          console.log(userData.data());
          setFirstName(userData.data().firstName);
        });
      }
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "friends"));

      let friends = [];
      querySnapshot.forEach((doc) => {
        let friend = doc.data(); // {}
        friend.id = doc.id; // frined {} .id = alksjf

        friends.push(friend);
      });

      setAllFriends(friends);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     const q = query(collection(db, "users"), where("email", "==", "ajmin@live.com"));

  //     const querySnapshot = await getDocs(q);

  //     querySnapshot.forEach((rahim_bap_karim) => {
  //       console.log(rahim_bap_karim.id)
  //       console.log(rahim_bap_karim.data())
  //     });
  //   };

  //   getData();
  // }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, "friends", userId));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);

      route.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-4/5 mx-auto py-4 flex justify-between">
          <p className="text-xl font-medium text-amber-400">Lets Try</p>

          <div className="flex items-center">
            <p className="text-lg font-medium">
              Hello {firstName || "Username"}
            </p>
            <button className="ml-4" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-10">
        <div className="flex justify-between items-center">
          <p className="text-lg">All Friends</p>
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded-lg"
            onClick={() => route.push("/new-user")}
          >
            Add friend
          </button>
        </div>

        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Picture
                </th>
                <th scope="col" className="px-6 py-3">
                  First name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allFriends.map((user, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {!!user.link ? (
                      <img
                        src={user.link}
                        height={50}
                        width={50}
                        alt="No image"
                      />
                    ) : (
                      <p>No image...</p>
                    )}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user.firstName}
                  </th>
                  <td className="px-6 py-4">{user.lastName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-blue-500 mr-3"
                      onClick={() => route.push(`/update-user/${user.id}`)}
                    >
                      Update
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
