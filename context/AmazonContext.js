import { createContext, useState, useEffect } from "react";
// import { useMoralis, useMoralisQuery } from "react-moralis";
// import { amazonAbi, amazonCoinAddress } from "../lib/constants";
// import { ethers } from "ethers";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  //
  //

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  //
  //

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  //
  //
  useEffect(() => {
    async () => {
      //1 this will check if the user is Authenticated
      //  and if its true, it means we are logged in
      if (isAuthenticated) {
        // 2 if I am log in, I want to make
        // a variable called:
        const currentUsername = await user?.get("nichname");
        //3 this is how we will get the nickname
        // from the moralis database, this question mark
        // user? is just making sure "if there is a nickname"
      }
    };
  }, []);

  //
  //
  return (
    <AmazonContext.Provider
      value={
        {
          /* everything that is going to be 
            wrapped here,
 is going to be global  */
        }
      }
    >
      {children}
    </AmazonContext.Provider>
  );
};
