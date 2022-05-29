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
