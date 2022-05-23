import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { amazonAbi, amazonCoinAddress } from "../lib/constants";
import { ethers } from "ethers";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
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
