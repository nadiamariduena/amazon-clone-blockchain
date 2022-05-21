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
            {!username ? (
              <>
                {/* if we dont have user logged,
               show this input form: */}
                <div className={styles.username}>
                  <input
                    type="text"
                    placeholder="Username..."
                    className={usernameInput}
                  />
                </div>
                <button
                  className={styles.setNickname}
                  // onClick = {handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <>
                {/* if we have a user logged,
               show this: */}
                <div className={styles.welcome}>Welcome jey</div>
              </>
            )}
          </>
        )}
      </div>

      <ConnectButton />
    </div>
  );
};

export default SideBar;
