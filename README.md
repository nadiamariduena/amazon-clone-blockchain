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
