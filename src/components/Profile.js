import { useLocation, useNavigate } from "react-router";
import { IMAGE_BASE_URL } from "./Constants";

const generateAddress = (location) => {
  return `${location?.street?.number}, ${location?.street?.name}, ${location?.city}, ${location?.state}, ${location?.country}-${location?.postcode}.`;
};
const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  if (!user) {
    return (
      <div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 bg-purple-500 text-purple-500 rounded-lg hover:bg-red-500 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    );
  }
  return (
    <div className="m-5 bg-gray-50">
      <div className="grid grid-col-1 md:grid-cols-2 p-4">
        <div className="p-4">
          <div>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-4 py-2 text-purple-500 rounded-lg hover:bg-purple-500 hover:rounded-full hover:text-white cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                className="rounded-full h-96 py-5"
                src={IMAGE_BASE_URL + user?.picture?.large}
                alt="user-avatar"
              />
            </div>
            <div>
              <div className="flex items-end justify-center">
                <h1 className="font-semibold">Say Hi!</h1>
                <div className="">
                  <a href="#">
                    <i className="fa-solid fa-paper-plane fa-lg text-purple-500 mx-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:border-l-3 md:border-l-purple-500 px-5">
          <h1 className="border-b-3 border-b-purple-500 p-2 text-3xl">
            Basic Information
          </h1>
          <div className="mx-2">
            <div className="my-3">
              <h1 className="font-semibold">Name:</h1>
              <h3 className="text-lg">{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h3>
            </div>

            <div className="my-3">
              <h1 className="font-semibold">Gender:</h1>
              <h3 className="text-lg">{user?.gender}</h3>
            </div>

            <div className="my-3">
              <h1 className="font-semibold">Data of Birth:</h1>
              <h3 className="text-lg">
                {new Date(user?.dob?.date).toLocaleDateString()}
              </h3>
            </div>

            <div className="my-3">
              <h1 className="font-semibold">Email:</h1>
              <h3 className="text-lg">{user?.email}</h3>
            </div>

            <div className="my-3">
              <h1 className="font-semibold">Phone:</h1>
              <h3 className="text-lg">{user?.phone}</h3>
            </div>

            <div className="my-3">
              <h1 className="font-semibold">Address:</h1>
              <h3 className="text-lg">{generateAddress(user?.location)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
