### [Build Amazon Web 3.0 Blockchain App with Solidity | Moralis | Next.js | Ethers.js | Tailwind CSS](https://youtu.be/HMdwbq1JJT0)

 <br>
 <br>

#### Ckeck the Installation here: [installation ✋](./INSTALLATION.md)

#### Ckeck the Documents here: [docs ✋](./DOCS.md)

 <br>
 <br>

---

 <br>
 <br>

# 🥭

#### Lets set up the rest of the menu

```javascript
        {/* ---- */}
        <div className={styles.ConnectButton}>
          <ConnectButton />
        </div>
        {/* ----- */}
        <div className={styles.menu}></div> ✋
      </div>
    </div>
  );
};
```

<br>

#### After you make that did, I dont know if you knew but when you are working with <u>nextjs</u>, you can actually do some routing to different pages, instead of getting a react router

<br>

- So to add the router, start by importing the nextjs **link**

```javascript
import Link from "next/link";
```

#### Then add the following here:

> The reason why we want to give an **href** before **slash /**, is because I am going to put the amazon logo here, so that when **you click in the amazon logo, you can go back to the home page**

```javascript
<Link href="/"></Link>
```

<br>

### Like so

- the **logo img src** we dont have it yet, so you will probably have an error

```javascript
<Link href="/">
  <div className={styles.menuItem}>
    <Image src={logo} height={30} width={30} className={styles.amazonLogo} />
  </div>
</Link>
```

<br>

### Download the assets 📦

- You have 2 options, you either Create a folder, call it **assets** and download the images from this [link](/home/dci-st119/Downloads/amazon-blockchain-youtube-main/assets) ( ✋ or you can also **download** the whole repo, copy paste the whole folder into yours)

<br>

### Once you have the assets

- Add the img's that we will be using to the sideBar.js, like so

```javascript
import logo from "../assets/amazon_logo.png";
import logoFull from "../assets/amazon_logo_full.png";
```

[<img src="./img-read/amazon-logo.gif"/>]()

<br>

#### This is what we have:

```javascript
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../assets/amazon_logo.png";
import logoFull from "../assets/amazon_logo_full.png";
//
import { ConnectButton } from "web3uikit";
//
//

const isAuthenticated = true;
//
const username = "plop";
//
//
const SideBar = () => {
  //
  //

  const styles = {
    container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
    profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    username: `flex items-center w-full justify-center`,
  };

  //
  //
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        hello
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt="profile"
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type="text"
                    placeholder="Username...."
                    className={styles.usernameInput}
                  />
                </div>
                <button className={styles.setNickname}>Set Nickname</button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Welcome {username}</div>
              </div>
            )}
          </>
        )}
        {/* ---- */}
        <div className={styles.ConnectButton}>
          <ConnectButton />
        </div>
        {/* ----- */}
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <div className={styles.menuItem}>
            <Image
              src={logo}
              height={30}
              width={30}
              className={styles.amazonLogo}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
```
