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
