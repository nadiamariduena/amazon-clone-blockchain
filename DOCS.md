### [NomicLabs](https://nomic.foundation) / [hardhad](https://hardhat.org)

<br>

> **Nomic Labs** (creator of Hardhat) is becoming the Nomic Foundation, a non-profit organization dedicated to Ethereum’s developer platform, on a mission to empower developers to decentralize the world.

[Naomic labs by medium](https://medium.com/nomic-foundation-blog/introducing-the-nomic-foundation-an-ethereum-public-goods-organization-31012af67df9)

<br>
<br>

---

<br>
<br>

## 🚧 👷

## Hardhat

(to test but for real contracts, the opposite of remix)

<br>

> **Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software**. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introducing more functionality around this workflow.

<br>

> ✋ **REMIX** is good to get started but in real life projects developers use something more robust like **Truffle** or **hardhat** ✋

<br>

### [Truffle](https://trufflesuite.com/) & [hardhat](https://hardhat.org/)

> Are command lines tools, written in **node.js** and you can install them easily with **npm**

<br>

### Hardhat vs Truffle: Which one is better for writing Smart Contracts?

- With the rising interest and adoption of Web3, there has been an increased demand for developers that know how to write Smart Contracts. Most people who learn to write Smart Contracts will use Remix which is an online IDE. But an online IDE is not feasible for any size development team. You need a tool to be able to write Smart Contracts on your laptop. In this scenario you have two choices: HardHat or Truffle. Let's explore how they compare.

<br>
<br>

---

<br>
<br>

## POLYGON

<br>

##### Polygon solves for high gas fees and slow speeds, without sacrificing on security. Also, if you’re building on Ethereum, you're already got all it takes to be a Polygon Developer.

<br>

> 1. **Polygon Network** is a side chain for increased capacity and lower costs. Written by Seb. Polygon is a protocol and framework for connecting Ethereum compatible blockchains, Polygon also operates a hybrid Proof of Stake and Plasma sidechains.

<br>

> 2. **Polygon**, formerly known as the Matic Network, is a scaling solution that aims to provide multiple tools to improve the speed and reduce the cost and complexities of transactions on blockchain networks.

The Ethereum blockchain is home to a vast range of economic activity — from NFT markets and games to the growing DeFi ecosystem. **Ethereum is well suited to this activity because it’s compatible with smart contracts**, which can be used to build a vast range of applications.

<br>

##### [What is Polygon (MATIC)?](https://www.coinbase.com/learn/crypto-basics/what-is-polygon)

However, the growing popularity of these applications adds many transactions to the Ethereum blockchain — and as a result, transaction fees (also known as “gas”) can sometimes rise to the point where making small or frequent investments can be economically unviable.

<br>

Enter **Polygon**, which is a “Layer 2” scaling solution (or “sidechain”) that’s emerged to **provide faster transactions and lower costs for users.** It acts as a speedy parallel blockchain running alongside the main Ethereum blockchain. To use it, you can “bridge” some of your crypto over to Polygon, and then interact with a wide range of popular crypto apps that were once exclusive to the main Ethereum blockchain.

<br>

<br>

### Choose the POS option (like in the gif)

> If you're an Ethereum Developer, you're already a Polygon developer. All the tools you're familiar with are supported on Polygon out of the box: Truffle, Remix, Web3js. Switch over to Polygon's RPC and get started!

[<img src="./img-read/polygon-docs1.gif"/>]()

<br>

# 🍊

#### In the same page, look at the left bar and click on the Network Details then in Network or just Go to this page [ Network / Polygon-Mainnet ](https://docs.polygon.technology/docs/develop/network-details/network)

<br>

<br>

## Mumbai-testnet

#### For this project in the beginning we will be using Mumbai-Testnet

- 👍 Mumbai Testnet replicates the Polygon Mainnet, which is to be used for testing. Testnet coins are separate and distinct from actual tokens/assets, and are never supposed to have any value. This allows application developers or validators/testers to experiment, without having to use real assets or worrying about breaking the main Polygon chain.

<br>

| Network name | ParentChain | chainId |
| ------------ | ----------- | ------- |
| Mumbai       | Goerli      | 80001   |

<br>

[<img src="./img-read/polygon-testing-networks.gif"/>]()

 <br>

> Public RPCs may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL at the following:

 <br>
 
**Alchemy**  ( ✋ I used alchemy in this project [opensea-marketplace](https://github.com/nadiamariduena/opensea-marketplace))
Ankr
Blast (Bware Labs)
BlockPI
Chainstack
DataHub (Figment)
Getblock
**Infura**
MaticVigil
Moralis
Pocket Network
QuickNode
SettleMint

 <br>
 <br>

---

 <br>
 <br>

# INFURA 🌈

#### Another service that you will use is [INFURA](https://infura.io), infura is an API that runs ethereum clients for you.

- its not easy to run ethereum client, so infura is very useful when you want to send a transaction to mainnet

> ✋ Many of Web3’s most remarkable projects—MetaMask, Aragon, Gnosis, OpenZeppelin, and more—utilize Infura’s APIs to connect their applications to the Ethereum network. In doing so, Infura provides the fundamental infrastructure required to handle both the short-term spikes that can often occur during token launches and essential, longer-term scaling solutions. <br><br> ✋
> "Our suite of high availability APIs and Developer Tools provide quick, reliable access to the Ethereum and IPFS networks so you can focus on building and scaling next generation software."

<br>

### [Why Infura Is the Secret Weapon of Ethereum Infrastructure](https://consensys.net/blog/news/why-infura-is-the-secret-weapon-of-ethereum-infrastructure/)

##### Find out how applications and protocols like MetaMask, Aragon, Gnosis, and OpenZeppelin all use Infura for scalable blockchain solutions.

<br>

#### Create an account there, once its ready, do the following:

<br>
<br>

# 🌈

# [Moralis](https://admin.moralis.io/servers)

<br>

([Moralis](https://admin.moralis.io/servers) is like the firebase of crypto development, so its going to make things much easier as it has already read made functions for that and more.)

<br>
<br>

> **Moralis provides managed backend for blockchain projects.** Automatically syncing the balances of your users into the database, allowing you to set up on-chain alerts, watch smart contract events, build indexes, and so much more. All features are accessed through an easy-to-use SDK.

#### Create an account there

###### Check also [Moralis Metaverse](https://moralis.io/metaverse/)

<br>

#### Once you have your account setup, proceed to create the server in Moralis

- at the left you will see a couple of options, right now we will be creating the server, so click on **servers** , then click on the green button and choose the **testnet server**

<br>

- 🔴 when the form will open, you will add a name for the server, you will also **select a region** , choose the **testnet server** again and then for the **chain** (the colorful icons) select the **Rinkeby testnet**

<br>

[<img src="./img-read/moralis-1.gif"/>]()

<br>

#### As you can see here below, we will be using 3 things

<br>

- Server Url

- Application Id

- Master key

<br>

[<img src="./img-read/moralis2.gif"/>]()

<br>

> What you see at the end of the gif is a dashboard, there we will see the sensitive data related to the user (later on)

<br>

<br>

### What is <u>WalletConnect</u> used for?

WalletConnect is an open protocol for connecting desktop Dapps to mobile Wallets using end-to-end encryption by scanning a QR code. Opening up a whole world of Dapps that were once only available to Metamask.

<br>

#### What is a <u>web3 provider</u> ?

- **Web3 providers, also known as Node providers**, are essentially blockchain data keepers. These projects run networks of hundreds of blockchain nodes, and are tasked with providing applications with the latest and historical blockchain data. The Web3 provider is an essential part of a blockchain-powered application

<br>

##### Read more here: [The Importance of Web3 Provider Redundancy](https://blog.quicknode.com/the-importance-of-web3-provider-redundancy/)

<br>

### What is <u>Ethers</u> ?

The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.

<br>

<br>

# 🍨

<br>

### [Magic](https://magic.link) SDK

> [Magic](https://magic.link/docs?utm_term=development%20kit&utm_campaign=New+website+clicks+campaign&utm_source=adwords&utm_medium=ppc&hsa_acc=7367440521&hsa_cam=13250211335&hsa_grp=125623972231&hsa_ad=523835832850&hsa_src=g&hsa_tgt=kwd-21353726&hsa_kw=development%20kit&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw-JyUBhCuARIsANUqQ_Kysd6a8zuhwPEztViI1ePysfJoZWPp1uWyDwBWvIz8wKSDsc40RSMaAqkoEALw_wcB) is a developer SDK that integrates with your application **to enable passwordless Web3 onboarding (no seed phrases) and authentication using magic links (similar to Slack and Medium)** ✋. Magic enables blazing-fast, hardware-secured, passwordless login, Web3 onboarding, and access to over 20 blockchains with a few lines of code — even if you have an existing auth solution.

<br>

### [Web3UI Kit](https://github.com/web3ui/web3uikit)

<br>

Lightweight reusable Web3 UI components for dapps developers. Web3UIKit accelerates your dapp development and empowers you to build beautiful dapps.

See how it works here [Web3UI Kit](https://github.com/web3ui/web3uikit)

[<img src="./img-read/web3ui-kit.png"/>]()
