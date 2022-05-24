import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
// import { amazonAbi, amazonCoinAddress } from "../lib/constants";
// import { ethers } from "ethers";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
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
  } = useMoralis;

  //
  //
  useEffect(() => {
    async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        //
        setUsername(currentUsername);
      }
    };
  }, [isAuthenticated, user, username]);

  //
  //
  return (
    <AmazonContext.Provider
      value={
        {
          //
        }
      }
    >
      {children}
    </AmazonContext.Provider>
  );
};
