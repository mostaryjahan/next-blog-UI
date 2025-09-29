import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async() => {

const session = await getUserSession()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Welcome, {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardHomePage;
