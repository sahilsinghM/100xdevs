// // import React, { useEffect } from "react";
// import { Navbar } from "../components/navbar";
// import { Balance } from "../components/balance";
// // import { useRecoilValueLoadable } from "recoil";
// // import { userBalance } from "../store/atoms/userBalance";
// import { Users } from "../components/users";
// import axios from "axios";
// import { useEffect } from "react";

// const useUsers = () => {
//   useEffect(() => {
//     const func = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("User is not authenticated. Token is missing.");
//       }

//       const response = await axios.get(
//         "http://localhost:3000/api/v1/user/bulk",
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       return response.data.users;
//     };
//     return func();
//   }, []);
// };

// const Dashboard = () => {
//   const users = useUsers();
//   console.log(users);

//   // const userBalanceLoadable = useRecoilValueLoadable(userBalance);
//   // console.log(useRecoilValueLoadable);
//   // if (userBalanceLoadable.state === "loading") {
//   // return <div>"Loading..."</div>;
//   // }
//   // if (userBalanceLoadable.state === "hasError") {
//   // return <div>"Error!"</div>;
//   // }

//   // const userBalanceValue = userBalanceLoadable.contents;
//   // console.log(useRecoilValueLoadable);
//   return (
//     <div>
//       <Navbar pageName={"Dashboard"} userName={"Sahil Singh"}></Navbar>
//       {/* <Balance userBalance={userBalanceValue} /> */}
//       <Users usersArray={users} />
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true); // State to track loading

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User is not authenticated. Token is missing.");
        }

        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setUsers(response.data.users); // Update users state
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message); // Update error state
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User is not authenticated. Token is missing.");
        }

        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setBalance(response.data.balance); // Update users state
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message); // Update error state
      } finally {
        setLoading(false); // Set loading to false
      }
    };
    fetchBalance();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error state
  }

  return (
    <div>
      <Navbar pageName={"Dashboard"} userName={"Sahil Singh"} />
      <Balance userBalance={balance} />{" "}
      {/* Replace 1000 with actual balance if needed */}
      <Users usersArray={users} />
    </div>
  );
};

export default Dashboard;
