import { useEffect, useState } from "react"; // Importing the useEffect and useState hooks from the React library
import { Link } from "react-router-dom"; // Importing the Link component from the react-router-dom library

export default function Contact({ listing }) {
  // Defining a functional component named Contact that takes a prop named listing
  const [landlord, setLandlord] = useState(null); // Using the useState hook to initialize landlord state variable as null
  const [message, setMessage] = useState(""); // Using the useState hook to initialize message state variable as an empty string

  const onChange = (e) => {
    // Defining an onChange function that updates the message state variable
    setMessage(e.target.value);
  };

  useEffect(() => {
    // Using the useEffect hook to fetch data when the component mounts or listing.userRef changes
    const fetchLandlord = async () => {
      // Defining an async function fetchLandlord to fetch landlord data
      try {
        const res = await fetch(`/server/user/${listing.userRef}`); // Making a fetch request to get landlord data based on listing.userRef
        const data = await res.json(); // Parsing the response data as JSON
        setLandlord(data); // Updating the landlord state variable with the fetched data
      } catch (error) {
        console.log(error); // Logging any errors that occur during the fetch request
      }
    };
    fetchLandlord(); // Calling the fetchLandlord function
  }, [listing.userRef]); // Specifying the dependency for the useEffect hook, so it only runs when listing.userRef changes

  return (
    <>
      {" "}
      {/* React fragment shorthand syntax */}
      {landlord && ( // Using a conditional rendering to render content only if landlord data is available
        <div className="flex flex-col gap-2">
          {" "}
          {/* Using tailwindcss classes for styling */}
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            {/* Displaying landlord username */}
            for{" "}
            <span className="font-semibold">
              {listing.name.toLowerCase()}
            </span>{" "}
            {/* Displaying listing name in lowercase */}
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`} // Creating a mailto link with landlord email, listing name, and message
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95" // Styling the link
          >
            Send Message {/* Link text */}
          </Link>
        </div>
      )}
    </>
  );
}
