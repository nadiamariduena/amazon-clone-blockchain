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

# 🥭

<!--
[<img src="./img-read/amazon-logo.gif"/>]() -->

## Moralis - Mongodb

When you are using Moralis, you need not setup MongoDB manually nor do you have to provide connections to your DB. Moralis comes with an inbuilt Mongo DB that you can query and edit as you please. [stolen from this forum](https://docs.moralis.io/moralis-dapp/database/objects)

You can start learning how to use the database from here – https://docs.moralis.io/objects

<br>

#### Moralis.Object

Storing data on Moralis is built around Moralis.Object. Each Moralis.Object contains key-value pairs of JSON-compatible data. This data is schemaless, which means that you don’t need to specify ahead of time what keys exist on each Moralis.Object.

<br>

#### You simply set whatever key-value pairs you want, and our back-end will store them.

For example, let’s say you’re building an NFT game where the characters are monsters. A single Moralis.Object could contain:

<br>

```javascript
strength: 1024, ownerName: "Aegon", canFly: true
```

<br>

Keys must be alphanumeric strings. Values can be strings, numbers, booleans, or even arrays and dictionaries - anything that can be JSON-encoded.

##### Each Moralis.Object is an instance of a specific subclass with a class name that you can use to distinguish different sorts of data. For example, we could call the object a LegendaryMonster.

##### [Read More here](https://docs.moralis.io/moralis-dapp/database/objects#moralis.object)

<br>
<br>

---

<br>
<br>

### Lets get started! 🔥

#### <u>Moralis database</u> is build on top of MongoDb (read the text above)

<br>

so lets setup the **Moralis database**

- In Order to pull our assets from the database, we need to first add the assets to Moralis Database.

#### steps:

- Click on the + button

<br>

- It will open a small window ( Add new class, create a new collection of objects), so as you can see, **YOU CAN CREATE a new class**

<br>

- Select the class that you need, as you can notice, all the classes it offers us are already in our rows in the blue dashboard, but there is a **custom option**

<br>

- Once you choose **custom option**, call it **assets**

<br>

### Columns

#### Next 🍭

- Once you create the class, Add the fields for the assets by creating **COLUMNS** 👍

[<img src="./img-read/creatingClass-in-moralis-also-creatingColumn.gif"/>]()

<br>

- Here we will add the **src** column that will store the images

[<img src="./img-read/creatingClass-in-moralis-also-creatingColumn2.gif"/>]()

<br>

[<img src="./img-read/class-colums.jpg"/>]()

<br><br>

### Rows

- Click on the green button to add a row

[<img src="./img-read/row1.gif"/>]()

<br>

# 🍭

#### Now that we have the row, lets fill the columns we created before

- Here we will be adding the **name, price and src**, once we have all that we will click **add**

<br>

### Img's

- Go to [giphy.com](https://giphy.com/search/nft) and choose some **nft** related images, we will be using them inside the **src**

<br>

[<img src="./img-read/adding-images-to-thesrc-moralis.gif"/>]()

#### So as you can see above, I took some imgs from giphy and added them to the src

<br>

### Create another row 🍭

- We can do it one by one, but you can do it faster by using a json file

<br>

##### one by one

[<img src="./img-read/row2.gif"/>]()

<br>

#### Json

- CReate a json file inside the root directory of your app, call it: **products.js**

<br>

- 🦙 You can add more if your want, but for an example is good enough:

<br>

```javascript
[
  {
    name: "Bricktopianaa",
    price: "2",
    src: "https://media2.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=ecf05e4777hi0cj92l99kvubgeb6uy23m0zkpjz3yoh5bmi5&rid=giphy.gif&ct=g",
  },
  {
    name: "RFTFKT Punk",
    price: "3",
    src: "https://media3.giphy.com/media/k0IRv7HUUqL3BJqYbI/giphy.gif?cid=790b7611e57a1df68e681f8c94e55c74a684e4b23a5b56df&rid=giphy.gif&ct=g",
  },
  {
    name: "Pineapple",
    price: "2",
    src: "https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=790b7611e22c770ae80d973d82677afdb2bb369ab3b23bc4&rid=giphy.gif&ct=g",
  },
];
```

> In the tutorial they didnt explain how to add it through json file, but I think I found something that could help me in the future, ✋ [here in this](https://youtu.be/tBMk1iZa85Y) tutorial, you can see that to add the **json data** of the products (with the img's etc) you need to do it through the **smart** contract and using the **mainnet server** 🔴 which I think is the

<br>

##### What Is a Mainnet In Cryptocurrency?

A mainnet is a blockchain that performs the functionality of transferring a digital currency from a sender to a recipient. **Mainnet is simply the main network, whereby actual transactions take place on a distributed ledger**.

<br>

In contrast, a **testnet is a test network whereby Decentralized applications and EDCCs get tested and developed**.

<br>

✋ I also found this:

### JSON RPC

<br>

> Click on the "HTTP" tab and copy the link for the mainnet (or your desired environment). It will look something like this:

[](https://docs.moralis.io/speedy-nodes/connecting-to-rpc-nodes/connect-to-avalanche-node#json-rpc)

<br>
<br>

### Interestig to read and watch

##### [Ultimate NFT Programming Tutorial - FULL COURSE](https://youtu.be/tBMk1iZa85Y)

##### [NFT Programming for Beginners](https://moralis.io/nft-programming-for-beginners/)

##### [Class level permissions](https://docs.moralis.io/moralis-dapp/database/security#class-level-permissions)

<br>
<br>

# 🌈

#### Showing the assets in our App
