const Shimmer = () => {
  return (
    <div className="bg-white p-3 w-70 m-2 border border-gray-900 rounded-md">
      <div className="flex justify-center p-3">
        <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
      <div>
        <h1 className="font-bold text-xl text-center"></h1>
      </div>
      <div className="my-5 w-full">
        <div className="flex my-3 rounded-r-md">
          <div className="p-2 mx-2 rounded-full bg-gray-300 animate-pulse"></div>

          <div className="w-full rounded-md bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex my-3 rounded-r-md">
          <div className="p-2 mx-2 rounded-full bg-gray-300 animate-pulse"></div>

          <div className="w-full rounded-md bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex my-3 rounded-r-md">
          <div className="p-2 mx-2 rounded-full bg-gray-300 animate-pulse"></div>

          <div className="w-full rounded-md bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex my-3 rounded-r-md">
          <div className="p-2 mx-2 rounded-full bg-gray-300 animate-pulse"></div>

          <div className="w-full rounded-md bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
