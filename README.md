### [Build Amazon Web 3.0 Blockchain App with Solidity | Moralis | Next.js | Ethers.js | Tailwind CSS](https://youtu.be/HMdwbq1JJT0)

 <br>
 <br>

#### Check the [installation ✋](https://github.com/nadiamariduena/amazon-clone-blockchain/blob/2-Auth-moralis-context/INSTALLATION.md)

#### Check the [docs ✋](https://github.com/nadiamariduena/amazon-clone-blockchain/blob/2-Auth-moralis-context/DOCS.md)

#### Check: [Moralis server basic](https://github.com/nadiamariduena/amazon-clone-blockchain/blob/2-Auth-moralis-context/MORALISSERVER.md)

#### Check: [tailwind](https://github.com/nadiamariduena/amazon-clone-blockchain/blob/2-Auth-moralis-context/TAILWIND.md)

 <br>
 <br>

---

 <br>
 <br>

#### 🔴 Pause

> I will pause this tutorial until I learn how to create smart contracts for this type of projects **(I am in process of doing it)**, as the creator of the tutorial ignored this part.

 <br>
 <br>

---

 <br>
 <br>

# 🚧 in progress

<details>
<summary>This is what I have until now</summary>

<br>

<!--
[<img src="./img-read/amazon-logo.gif"/>]() -->

### Showing the assets in our App

- Before adding the assets, we will need to create a new component in our App, this component will be called **components/Main.js**

<br>

- Add the following

```javascript
import React from "react";

const Main = () => {
  return <div>Main</div>;
};

export default Main;
```

<br>

#### Now go to the pages/indexjs and uncover the Main.js

```javascript
export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Main />
    </div>
  );
}
```

<br>

[<img src="./img-read/main-component.jpg"/>]()

<br>

#### Now lets start implementing the Main.js

- import the **context**

```javascript
import React, { useContext } from "react";
import { AmazonContext } from "../context/AmazonContext";
```

<br>

#### Next, add the following 3 components (hide them because you will have some errors after you add them)

```javascript
// <Header />
//   <Featured />
<Cards />
```

- In this 3 components we are going to store all the digital **assets**

<br>

#### Add the styles

```javascript
const styles = {
  container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
  recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
  recentTransactionsList: `flex flex-col`,
  transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
};
```

<br>

##### At this point you will have an error, but its because we havent created the _Cards.js_ component

- Go to the components folder and create the Cards.js

- You should have something like this in the Main.js

```javascript
import React, { useContext, useEffect } from "react";
import { AmazonContext } from "../context/AmazonContext";
import Cards from "./Cards";

const Main = () => {
  //
  //
  const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
    recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
    recentTransactionsList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
  };
  //
  //
  return (
    <div className={styles.container}>
      {/* <Header />
      <Featured /> */}
      <Cards />
    </div>
  );
};

export default Main;
```

<br>

- ✋ At this point you should be able to see the 'cards' text in your browser

<br>

#### Now add the following to the Cards.js components

<br>

```javascript
import React, { useContext } from "react";
import { AmazonContext } from "../context/AmazonContext";

const Cards = () => {
  //
  //
  const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        // ✋ here we will be mapping into another component to grab the assets,
        So for every ASSET we will add a new card component, like so:
        <Card />✋
      </div>
    </div>
  );
};

export default Cards;
```

<br>
<br>

#### So for every ASSET we will add a new card component, like so:

```javascript

        <Card />✋
```

<br>

</details>

<br>

#### Paid courses

> I decided to pay for an NFT course, and I think it was a great idea, yes it's a bit expensive but its worth it!! 👍

<br>

- [blockchain](https://oxford.esmelearning.com/pages/oxford-blockchain-strategy-2?utm_source=g&utm_medium=paid_search&utm_campaign=OXF-BCH+|+Search+|+Tier+3+Countries+|+Non-Brand&utm_term=blockchain%20online%20course&utm_device=c_&utm_placement=&utm_content=Course+-+Broad&gclid=Cj0KCQjwnNyUBhCZARIsAI9AYlE65XjAAflYImQHf6wcjR4KDkufUPzt8zcLy3JiqO61wp1tepHzmQoaApPcEALw_wcB)

<br>

- [Best NFT Courses Online 2022](https://www.courselounge.com/nft-courses-online/)
