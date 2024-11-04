import { FaFacebook, FaTwitterSquare, FaGooglePlusG } from "react-icons/fa";

export default function Footer() {
  const data = [
    {
      title: "Features",
      list: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Stuff for developers",
        "Another one",
        "Last time",
      ],
    },
    {
      title: "Resources",
      list: ["Resource", "Resource name", "Another resource", "Final resource"],
    },
    {
      title: "About",
      list: ["Team", "Locations", "Privacy", "Terms"],
    },
    {
      title: "Help",
      list: ["Support", "Help Center", "Contact Us"],
    },
    {
      title: "Stay connected",
    },
  ];

  const data2 = [
    {
      title: "Address",
      list: [""],
    },
    {
      title: "FWR",
      list: ["123 6th St.", "Melbourne, FL 32904"],
    },
    {
      title: "Free Resources",
      list: ["Use our HTML blocks for FREE.", "All are MIT License"],
    },
    {
      title: "",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 ">
      <div className="flex justify-between border-b border-gray-300 pb-8">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index} className="w-1/4 mx-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <ul className="flex flex-col mt-4">
                {Array.isArray(item.list) ? (
                  item.list.map((listItem, index) => (
                    <li key={index} className="py-1 p-0 m-0">
                      <a
                        href="#"
                        className="hover:text-purple-500 hover:border-b border-purple-500 transition-colors p-0 m-0"
                      >
                        {listItem}
                      </a>
                    </li>
                  ))
                ) : (
                  <div className="flex space-x-4 mt-4">
                    <a href="#">
                      <FaFacebook className="text-2xl hover:text-purple-500" />
                    </a>
                    <a href="#">
                      <FaTwitterSquare className="text-2xl hover:text-purple-500" />
                    </a>
                    <a href="#">
                      <FaGooglePlusG className="text-2xl hover:text-purple-500" />
                    </a>
                  </div>
                )}
              </ul>
            </div>
          ))}
      </div>
      <div className="flex justify-between pt-8 pb-2">
        {Array.isArray(data2) &&
          data2.map((item, index) => (
            <div key={index} className="w-1/4 mx-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <ul className="flex flex-col mt-4">
                {Array.isArray(item.list) ? (
                  item.list.map((listItem, index) => (
                    <li key={index} className="py-1 p-0 m-0">
                      <a
                        href="#"
                        className="hover:text-purple-500 hover:border-b border-purple-500 transition-colors p-0 m-0"
                      >
                        {listItem}
                      </a>
                    </li>
                  ))
                ) : (
                  <div className="flex space-x-4 mt-4">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                      Get Started
                    </button>
                  </div>
                )}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
