### 1. create the folder for our app 🍨

- Create or go to any folder where you want the project to take place.

<br>

- Open the terminal in that folder and type the following:

```javascript
// mkdir is going to create the folder where you want
mkdir amazon-clone-blockchain
```

<br>

#### 2. Once you do that, you have to <u>cd </u> in the folder

```javascript
// cd will enter to the folder
cd amazon-clone-blockchain
```

<br>

```javascript
npx create-next-app@latest .
```

> the **dot** here above, will make that everything that you are going to upload **"the starter packets related to netxjs"** is going to be downloaded to the amazon-clone-blockchain (so that we dont have a folder under a folder), lets see what happens if we dont add the dot

<br>

###### Here you can see what happens when i remove the dot in the beginning

[<img src="./img-read/dependencies0nextjs.gif"/>]()

<br>
<br>

### 3. Create another folder

- Inside the **amazon-clone-blockchain** create another folder

```javascript
mkdir smart-contracts
```

<br>
<br>

### 4. [Tailwind](https://tailwindcss.com/docs/installation)

```javascript
yarn add -D tailwindcss postcss autoprefixer
// or
npm i -D tailwindcss postcss autoprefixer
```

<br>

#### 5. Now we need to initialize tailwind, run this:

<br>

```javascript
 npx tailwindcss init -p
```

<br>
<br>

- 🔴 It will generate 2 files, **postcss.config.js** and **tailwind.config.js**

 <br>

#### In the files you will find something like this:

<br>

```javascript
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
//
// postcss.config.js
//
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> ✋ Later on you will see how we can use them.

<br>

## tailwind configuration

- Go to the **tailwind.config.js** and paste the following:

```javascript

 "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
```

<br>

#### Like so:

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

<br>

#### Now go to the styles/globals.css, and paste the following code there:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 



*/
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

body {
  background: #fff;
  font-family: "Ubuntu", sans-serif;
}
```

<br>
<br>

#### At this point we are ready to launch the server to see if the app is working

```javascript
npm run dev
```

<br>
<br>

# 🌈

## [Moralis](https://admin.moralis.io/servers)

([Moralis](https://admin.moralis.io/servers) is like the firebase of crypto development)

> **Moralis provides managed backend for blockchain projects.** Automatically syncing the balances of your users into the database, allowing you to set up on-chain alerts, watch smart contract events, build indexes, and so much more. All features are accessed through an easy-to-use SDK.

#### Create an account there

###### Check also [Moralis Metaverse](https://moralis.io/metaverse/)

<br>

#### Once you have your account setup, proceed to create the server in Moralis

- at the left you will see a couple of options, right now we will be creating the server, so click on **servers** , then click on the green button and choose the **testnet server**

<br>

- ✋ when the form will open, you will add a name for the server, you will also **select a region** , choose the **testnet server** again and then for the **chain** select the **Rinkeby testnet**

<br>

[<img src="./img-read/moralis-1.gif"/>]()
