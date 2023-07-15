import { useRouter } from "next/router";

const Dashboard = () => {
  const route = useRouter();

  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-4/5 mx-auto py-4 flex justify-between">
          <p className="text-xl font-medium text-amber-400">Lets Try</p>

          <div className="flex items-center">
            <p className="text-lg font-medium">Hello Muhammad</p>
            <button className="ml-4" onClick={() => route.push("/login")}>
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Muhammad
                </th>
                <td className="px-6 py-4">Rizwan</td>
                <td className="px-6 py-4">muhammadrizwan@outlook.com</td>
                <td className="px-6 py-4">+1234567890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
