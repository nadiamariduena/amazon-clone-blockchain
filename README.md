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

- Add the img's that we will be using to the sideBar.js:

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
            />{" "}
            My Amazon <br /> board
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
```

<br>
<br>

### Lets continue with the next <u>menuItem</u>

```javascript
<div className={styles.menuItem}>
  <FaBox />
  Collections
</div>
```

<br>

## 🌈

### Add the icons

- All the icons are coming from the dependeny that I installed in the beginning **react-icons**

```javascript
//  ----   ICONS ----
import { FaBox } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
//
//
import { ConnectButton } from "web3uikit";
//
```

#### Now add the rest of the menu items, so to match the icons above

```javascript

  {/* icons */}
  <div className={styles.menuItem}>
    <FaBox />
    Collections
  </div>
  <div className={styles.menuItem}>
    <BsFillBookmarkFill />
    Saved
  </div>
  <div className={styles.menuItem}>
    <BsFillPersonFill />
    Profile
  </div>

```

<br>
<br>

## 🍭

### Now lets add one more icon (you will see the preview after this)

<br>

- 🔴 The difference with this one, is that its wrapped inside the **history** (we dont have the history yet, but we will add it anyway)

<br>

- the history is going to give us a couple of things but here it will give us the **recent order**

```javascript
<Link href="/history">
  <div className={styles.menuItem}>
    <AiOutlineHistory />
    Transaction History
  </div>
</Link>
```

<br>

#### A last thing in this component, add the div for the company name

<br>

```javascript
<div className={styles.companyName}>
  <Image src={logoFull} alt="amazon" height={100} width={100} />
</div>
```

<br>

[<img src="./img-read/menu-items-sidebar.gif"/>]()

<br>
<br>

### Add the styles to the icons 🌈

```javascript
    menu: `flex flex-col w-full h-full px-10 gap-10`,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
    amazonLogo: `mr-4 flex object-cover`,
    companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
    setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
```

[<img src="./img-read/menu-items-sidebar-styles.gif"/>]()

<br>
<br>

#### This is what we have:

```javascript
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../assets/amazon_logo.png";
import logoFull from "../assets/amazon_logo_full.png";
//
//  ----   ICONS ----
import { FaBox } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
//
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
        hello 👾
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              ✋
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt="profile"
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            👾👾👾
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
            👾👾👾
          </>
        )}
        👾
        {/* ---- */} 🦖
        <div className={styles.ConnectButton}>
          <ConnectButton />
        </div>
        {/* ----- */}
      </div>
      <div className={styles.menu}>
        {/* amazon */} ✋
        <Link href="/">
          <div className={styles.menuItem}>
            <Image
              src={logo}
              height={30}
              width={30}
              className={styles.amazonLogo}
            />{" "}
            My Amazon <br /> board
          </div>
        </Link>
        {/* icons */} ✋<div className={styles.menuItem}>
          <FaBox />
          Collections
        </div>
        <div className={styles.menuItem}>
          <BsFillBookmarkFill />
          Saved
        </div>
        <div className={styles.menuItem}>
          <BsFillPersonFill />
          Profile
        </div>
        {/* recent order  HISTORY */} ✋
        <Link href="/history">
          <div className={styles.menuItem}>
            <AiOutlineHistory />
            Transaction History
          </div>
        </Link>
        {/* company name */} ✋<div className={styles.companyName}>
          <Image src={logoFull} alt="amazon" height={100} width={100} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
```

<br>
<br>

---

<br>
<br>

# 🐖

### Context

- We will create all the variables and functions inside the context, **with the context we will be able to call the variables functions anywhere in the app** by making them global

<br>

#### Create the folder context

- Inside the root folder, create a folder and call it **context**

<br>

- Inside the **context folder** create a component and call it **AmazonContext.js**

<br>

<br>

#### import the following

```javascript
import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { amazonAbi, amazonCoinAddress } from "../lib/constants";
import { ethers } from "ethers";
```

<br>
<br>

```javascript
// 1
export const AmazonContext = createContext();
//
// 2
export const AmazonProvider = ({ children }) => {
  //
  //
  return (
    // 3
    <AmazonContext.Provider
      //4
      value={
        {
          /* everything that is going to be 
            wrapped here "between the curly brackets",
          is going to be global  */
        }
      }
    >
      {children}
    </AmazonContext.Provider>
  );
};
```

<br>

> But before we can pass the values, (in step4) we need to create a couple of things.

<br>
<br>

## PROVIDER 🌈

### At this point the <u>CONTEXT</u> is set up, all we need to do now is going to the <u>pages/\_app.js</u> ... and wrap the amazon provider we just created.

<br>

- ✋ Import the **context** as **AmazonProvider**

<br>

> As you can see below, we are bringing the data from the other component we just created, the one containing the context.

```javascript
import { AmazonProvider } from "../context/AmazonContext";
```

<br>

### Now wrap the content inside the amazon provider

<br>

> As you can see, inside the AmazonProvider, we have the MoralisProvider containing the **enviroments keys** and also our component

```javascript
// ✋
<AmazonProvider>
  <MoralisProvider
    serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
    appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  >
    <Component {...pageProps} />
  </MoralisProvider>
</AmazonProvider>
// ✋
```

<br>
<br>

### So once we do that, we are able to use context within the app

- Go to the **SideBar.js** and replace true for false, the reason for that is because right now its hard coded and we want to make it dynamical by using **Moralis**

```javascript
const isAuthenticated = false;
```

<br>

#### Also add the **nickname** here

```javascript
const nickname = ""; ✋
const username = "plop";
```

#### and here

```javascript
     {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type="text"
                    placeholder="Username...."
                    className={styles.usernameInput}
                    value={nickname} ✋
                  />
                </div>
                <button className={styles.setNickname}>Set Nickname</button>
              </>
```

<br>
<br>

#### Now what we want to do is that when we log in, we want that to show that <u>we are logged in as a USER</u>

<br>

- 1 Log in to metamask and Moralis through our app, by clicking **connect**, then log you out **metamask**

- 2 Go to **Moralis** and delete any user that is logged in

🔴 (there is a trick, delete the first row, as if you delete the 2 row, it will not work)

<br>

<br>

[<img src="./img-read/loginbasic1.gif"/>]()

<br>
<br>

## useState

- we will use the **useState hook** to keep track of a couple of things

<br>

- First thing we will create is a variable with the state of our **username**, if you recall, we have a **username** inside the **sideBar.js** , so by adding this state with the **username** we will be linking anything that will change to it.

<br>

```javascript


  const [username, setUsername] = useState(""); ✋

  //
  //
  return (
    <AmazonContext.Provider
```

<br>

#### so this is going to initialize it as an empty string ('')

> const [username, setUsername] = useState("");
