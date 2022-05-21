import Image from "next/Image";
import React from "react";

import { ConnectButton } from "web3uikit";
//
//

const isAuthenticated = false;

//
//
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <Image
                alt="profile"
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
          </>
        )}
      </div>

      <ConnectButton />
    </div>
  );
};

export default SideBar;
