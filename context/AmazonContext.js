import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
// import { amazonAbi, amazonCoinAddress } from "../lib/constants";
// import { ethers } from "ethers";

// A
export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  //B
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  // C
  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  //
  //D
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        setUsername(currentUsername);
      }
    })();
  }, [isAuthenticated, user, username]);
  //
  //
  //E
  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname("");
      } else {
        console.log("Cant set empty nickname");
      }
    } else {
      console.log("there is not user");
    }
  };
  //
  //
  return (
    <AmazonContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        handleSetUsername,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
