# 🌈

# [Moralis / server](https://admin.moralis.io/servers)

### .ENV.LOCAL

[Next.js Tutorial - 64 - Environment Variables](https://youtu.be/vS86x_e0zBk)

- Create a **.env.local** (nextjs version of the .env) file , there we will store sensitive data, (the data we have in Moralis)

<br>

> Copy your own credentials from [Moralis / server](https://admin.moralis.io/servers) ✋ (take the **Server URL** and the **Application ID**)

<br>

[<img src="./img-read/moralis-server-credentials.png"/>]()

<br>

#### Create the variables inside the .env.local:

<br>

- the variables are: **NEXT_PUBLIC_MORALIS_SERVER**

- **NEXT_PUBLIC_MORALIS_APP_ID**

```javascript
NEXT_PUBLIC_MORALIS_SERVER=https://https:yourlongcode/server
NEXT_PUBLIC_MORALIS_APP_ID=JLzlehyourlongcode
```

<br>

### 🐒 Moralis provider

<br>

- Go to the **pages/\_app.js**

- import moralisprovider: **import { MoralisProvider } from "react-moralis";**

- Wrap the app content inside the **Moralis provider**

```javascript
function MyApp({ Component, pageProps }) {
  <MoralisProvider>
    return <Component {...pageProps} />;
  </MoralisProvider>;
}
```

<br>

### Now inside the Moralis provider tag

- add the **serverUrl** but here we will use the environments we added insid ethe **.env.local**

<br>

```javascript
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
```

<br>

#### Like so:

```javascript
<MoralisProvider
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
>
  return <Component {...pageProps} />;
</MoralisProvider>
```

<br>
<br>

#### Right now we have this inside the **\_app.js**

```javascript
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
```

#### if at this point you have an error, just check that you didnt mistype anything or that you dont have semi colons where it shouldnt be, then stop the server and relaunch it again

```javascript
npm run dev
```

<br>
<br>

### Connect Button

- Go to the **SideBar.js** and import the **web3uikit** library, this button will be ready to use.

<br>

- import the

```javascript
import { ConnectButton } from "web3uikit";
```

#### And use it like so

```javascript
import React from "react";
import { ConnectButton } from "web3uikit";

const SideBar = () => {
  return (
    <div>
      <ConnectButton /> ✋
    </div>
  );
};

export default SideBar;
```

<br>

#### The incredible of this button is that it has already some functionality, so if you click on it you will have some options, since I am using metamask, i will click on it.

<br>

[<img src="./img-read/button-web3uikit_1.gif"/>]()

<br>

#### after you click on metamask, you have to click to sign in "moralis"

[<img src="./img-read/button-web3uikit_2.gif"/>]()

<br>
<br>

---

<br>
<br>

### Connect Button

- Go to the **SideBar.js** and import the **web3uikit** library, this button will be ready to use.

<br>

- import the

```javascript
import { ConnectButton } from "web3uikit";
```

#### And use it like so

```javascript
import React from "react";
import { ConnectButton } from "web3uikit";

const SideBar = () => {
  return (
    <div>
      <ConnectButton /> ✋
    </div>
  );
};

export default SideBar;
```

<br>

> 💯 **The incredible of this button, is that it has already some functionality!!!**, so if you click on it you will have some options(_since I am using metamask, i will click on it._)

<br>

[<img src="./img-read/button-web3uikit_1.gif"/>]()

<br>

#### after you click on metamask, you have to click to sign in "moralis" (you cannot really see it on the image, but you have to click in the blue button that is on the side of the cancel button)

[<img src="./img-read/button-web3uikit_2.gif"/>]()

<br>

> You will see that we have a user, and that is because every time we log in(**by clicking on the button** we just added), it will count as a new user. 🌈

<br>
<br>

## To recap 🥭

##### 1. log into Moralis

##### 2. Click on the button we just added in our app

##### 3. Log in Metamask

##### 4. While logged in Metamask, click in the signin Moralis (through the popup window of the metamask)

##### 5. Go to Moralis (click on the arrow to unfold some options)

##### 6. click on the dashboard

##### 7. Once you are in the dashboard

> you will see that we have a user, and that is because every time we log in(**by clicking on the button** we just added), it will count as a new user. 🌈

<br>
<br>

[<img src="./img-read/dashboard-.gif"/>]()

<br>
<br>
---

<br>
<br>
