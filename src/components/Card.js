import { IMAGE_BASE_URL } from "./Constants";

const Card = ({ user }) => {
  return (
    <div className="bg-white p-3 w-70 m-2 border border-purple-900 rounded-md">
      <div className="flex justify-center p-3">
        <img
          className="rounded-full h-24"
          alt="user-avatar"
          src={IMAGE_BASE_URL + user?.picture?.large}
        />
      </div>
      <div>
        <h1 className="font-bold text-xl text-center">{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h1>
      </div>
      <div className="my-5 w-full">
        <div className="flex border border-purple-400 rounded-r-md">
          <div className="p-2 bg-purple-800 flex justify-center items-center">
            <i className="fas fa-envelope text-white"></i>
          </div>
          <div className="flex-1 w-10 flex-wrap ml-2">
            <h1 className="font-semibold">Email</h1>
            <p className="truncate">{user?.email}</p>
          </div>
        </div>
        <div className="flex border border-purple-400 rounded-r-md my-4">
          <div className="p-2 bg-purple-800 flex justify-center items-center">
            <i className="fas fa-birthday-cake text-white"></i>
          </div>
          <div className="flex-1 w-10 flex-wrap ml-2">
            <h1 className="font-semibold">birthday</h1>
            <p className="truncate">5/1/1959</p>
          </div>
        </div>
        <div className="flex border border-purple-400 rounded-r-md my-4">
          <div className="p-2 bg-purple-800 flex justify-center items-center">
            <i className="fas fa-phone text-white"></i>
          </div>
          <div className="flex-1 w-10 flex-wrap ml-2">
            <h1 className="font-semibold">Phone</h1>
            <p className="truncate">{user?.phone}</p>
          </div>
        </div>
        <div className="flex border border-purple-400 rounded-r-md my-4">
          <div className="p-2 bg-purple-800 flex justify-center items-center">
            <i className="fas fa-globe text-white"></i>
          </div>
          <div className="flex-1 w-10 flex-wrap ml-2">
            <h1 className="font-semibold">Country</h1>
            <p className="truncate">{user?.location?.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
