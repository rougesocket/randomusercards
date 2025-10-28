import { useEffect, useState } from "react";
import Card from "./Card";
import { API_END_POINT } from "./Constants";
import Shimmer from "./Shimmer";

const cardData = {
  results: [
    {
      gender: "female",
      name: { title: "Mrs", first: "Victoria", last: "Rasmussen" },
      location: {
        street: { number: 2675, name: "Toftegårdsvej" },
        city: "Jerslev Sj",
        state: "Hovedstaden",
        country: "Denmark",
        postcode: "7575",
        coordinates: { latitude: "-34.8032", longitude: "-53.8086" },
        timezone: { offset: "+2:00", description: "Kaliningrad, South Africa" },
      },
      email: "victoria.rasmussen@gmail.com",
      login: {
        uuid: "4d4cbe1d-face-4dc1-85ff-efbd8b9f88c8",
        username: "victoriarasmussen927",
        password: "oldone",
        salt: "67fn0h5z",
        md5: "500637a07bdf425432e0c26381df3666",
        sha1: "3462bab5c1a1f36551623158a62945d69815eb0d",
        sha256:
          "8f332ed12862ab993eb3d80d9229bd54f876fc274e9e792a45bccc58cb01ca18",
      },
      dob: { date: "1956-11-16T15:22:18.519Z", age: 68 },
      registered: { date: "2009-11-06T17:50:05.927Z", age: 15 },
      phone: "197-467-1446",
      cell: "777-279-6311",
      id: { name: "ID", value: "879953" },
      picture: {
        large: "/api/portraits/women/59.jpg",
        medium: "/api/portraits/med/women/59.jpg",
        thumbnail: "/api/portraits/thumb/women/59.jpg",
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Catalina", last: "Ruiz" },
      location: {
        street: { number: 1297, name: "Calle de Atocha" },
        city: "La Coruña",
        state: "Región de Murcia",
        country: "Spain",
        postcode: "26487",
        coordinates: { latitude: "-38.0432", longitude: "156.2855" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "catalina.ruiz@hotmail.com",
      login: {
        uuid: "e8754c25-de0f-4ecb-a156-47bc5006a720",
        username: "catalinaruiz226",
        password: "asasas",
        salt: "q0zanrtr",
        md5: "741f5f179cb469a812b761a886b13d36",
        sha1: "efc0caf2d8b8e8dea2000f62718777721de0d0d8",
        sha256:
          "329b68cac7c311745eb4ac3526ca21f1595e7cf5a4a2f908cccc3083fd27877b",
      },
      dob: { date: "1952-02-03T00:30:48.889Z", age: 73 },
      registered: { date: "2008-07-10T14:33:29.690Z", age: 17 },
      phone: "555 930 673",
      cell: "567 257 858",
      id: { name: "ID", value: "951628" },
      picture: {
        large: "/api/portraits/women/31.jpg",
        medium: "/api/portraits/med/women/31.jpg",
        thumbnail: "/api/portraits/thumb/women/31.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Eelis", last: "Lahti" },
      location: {
        street: { number: 9291, name: "Nordenskiöldinkatu" },
        city: "Sastamala",
        state: "Åland",
        country: "Finland",
        postcode: "58711",
        coordinates: { latitude: "50.3086", longitude: "-82.5664" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "eelis.lahti@yahoo.com",
      login: {
        uuid: "beb3ea87-af01-4107-8d2c-e83a0e724c2c",
        username: "eelislahti173",
        password: "mushroom",
        salt: "k9laktdn",
        md5: "6fd01d377877091c76a22d54440d7c6c",
        sha1: "b143aba11bdb5fce0a596c0992c319d9bbc0d3fb",
        sha256:
          "1700540409eaeab547ff2475277d89e17275fbe93ab2e4e430bb5a40bb8d85ce",
      },
      dob: { date: "1949-06-27T21:25:46.667Z", age: 76 },
      registered: { date: "2003-01-05T16:25:49.106Z", age: 22 },
      phone: "975-644-8155",
      cell: "570-854-7839",
      id: { name: "ID", value: "837831" },
      picture: {
        large: "/api/portraits/men/29.jpg",
        medium: "/api/portraits/med/men/29.jpg",
        thumbnail: "/api/portraits/thumb/men/29.jpg",
      },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Viljami", last: "Niska" },
      location: {
        street: { number: 4582, name: "Otavalankatu" },
        city: "Raseborg",
        state: "Tavastia Proper",
        country: "Finland",
        postcode: "54884",
        coordinates: { latitude: "14.8927", longitude: "-89.0463" },
        timezone: { offset: "-9:00", description: "Alaska" },
      },
      email: "viljami.niska@hotmail.com",
      login: {
        uuid: "efee8f3c-f233-4322-a132-6ce857e32dd6",
        username: "viljaminiska696",
        password: "backup",
        salt: "qs6mtyzh",
        md5: "e7ac049443a7824256baf2d217895a34",
        sha1: "800c456684eae24c02a715daba0dc52a870e0266",
        sha256:
          "3391a2e0533b6f836176e47ff6e9950e59f5d9ff612b95cd5b55c998101d06aa",
      },
      dob: { date: "1978-04-18T00:27:30.740Z", age: 47 },
      registered: { date: "2023-05-31T20:16:38.496Z", age: 2 },
      phone: "913-732-7009",
      cell: "466-242-4103",
      id: { name: "ID", value: "816770" },
      picture: {
        large: "/api/portraits/men/63.jpg",
        medium: "/api/portraits/med/men/63.jpg",
        thumbnail: "/api/portraits/thumb/men/63.jpg",
      },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Nolhan", last: "Rey" },
      location: {
        street: { number: 9872, name: "Rue de L'Abbé-Rousselot" },
        city: "Paris",
        state: "Nièvre",
        country: "France",
        postcode: "50957",
        coordinates: { latitude: "-20.5231", longitude: "-95.5262" },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "nolhan.rey@example.com",
      login: {
        uuid: "101a25e1-4555-444d-8548-e1a790540f80",
        username: "nolhanrey319",
        password: "met2002",
        salt: "xbry34mb",
        md5: "78a1492a1039128e1301b135dc2ae7f7",
        sha1: "8a4ab2159ca10e945b71d7dca4049da9c6d8dbb2",
        sha256:
          "147890f5e1f82899bb606cdf6cc169c856a5b4b1fb79cf3e77ad7ad469cedf7b",
      },
      dob: { date: "1942-02-06T03:29:14.815Z", age: 83 },
      registered: { date: "2019-12-30T07:34:30.086Z", age: 5 },
      phone: "08 82 0 58 63",
      cell: "03 53 0 93 67",
      id: { name: "INSEE", value: "1771260696742" },
      picture: {
        large: "/api/portraits/men/47.jpg",
        medium: "/api/portraits/med/men/47.jpg",
        thumbnail: "/api/portraits/thumb/men/47.jpg",
      },
      nat: "FR",
    },
  ],
  info: {
    seed: "3a042f51b10af4574c809bd49261fefc",
    results: 5,
    page: 1,
    version: "1.4",
  },
};

const filterData = (data, txt) => {
  return data.filter(
    (ele) => ele?.name?.first.includes(txt) || ele?.name?.last.includes(txt)
  );
};
const CardContainer = () => {
  const [userData, setUserData] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [filterUserData, setFilterUserData] = useState(userData);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const data = await fetch(API_END_POINT);
    const userCardData = await data.json();
    setUserData(userCardData?.results);
    setFilterUserData(userCardData?.results);
  };
  if (userData === null)
    return (
      <>
        <div className="bg-purple-600 h-48 text-white">
          <div>
            <h1 className="text-center text-4xl p-3">Random User Generator</h1>
            <div className="flex justify-center items-center h-full mx-5 my-2">
              <input
                className="block min-w-0 grow bg-gray-100 border-gray-300 py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-tl-md rounded-bl-md"
                placeholder="Enter a user"
                type="text"
                name="search"
              />
              <button className="bg-gray-900 text-white py-1.5 pr-3 pl-1 font-bold text-base rounded-tr-md rounded-br-md">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          <h1 className="text-center font-bold text-2xl">
            <span className="border-b-4 border-b-purple-800">User List</span>
          </h1>
          <div className="flex justify-center my-5 flex-wrap">
            {Array(20)
              .fill("")
              .map((ele, idx) => (
                <Shimmer key={idx} />
              ))}
          </div>
        </div>
      </>
    );
  return (
    <>
      <div className="bg-purple-600 h-48 text-white">
        <div>
          <h1 className="text-center text-4xl p-3">Random User Generator</h1>
          <div className="flex justify-center items-center h-full mx-5 my-2">
            <input
              className="block min-w-0 grow bg-gray-100 border-gray-300 py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-tl-md rounded-bl-md"
              placeholder="Enter a user"
              type="text"
              name="search"
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button
              className="bg-gray-900 text-white py-1.5 pr-3 pl-1 font-bold text-base rounded-tr-md rounded-br-md"
              onClick={() => {
                const data = filterData(userData, searchTxt);
                setFilterUserData(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mx-5 my-5">
        <h1 className="text-center font-bold text-2xl">
          <span className="border-b-4 border-b-purple-800">User List</span>
        </h1>
        <div className="p-2 my-3">
          {filterUserData?.length !== 0 &&
          filterUserData?.length !== userData?.length ? (
            <h1 className="ml-2 font-semibold">
              Showing {filterUserData?.length} of {userData?.length}
            </h1>
          ) : (
            ""
          )}
          <div className="flex flex-wrap">
            {filterUserData && filterUserData.length > 0 ? (
              filterUserData.map((user) => (
                <Card user={user} key={user?.id?.value}></Card>
              ))
            ) : (
              <>
                <div className="w-full flex justify-center ">
                  <div className="max-w-sm w-full border border-gray-400 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full">
                        <i className="fas fa-user-times text-xl"></i>
                      </div>
                      <span className="text-xl font-semibold text-gray-800">
                        User Not Found
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">
                      We couldn't locate the user you're searching for. Please
                      try a different query and give it another go.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
