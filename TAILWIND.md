#### Now lets start adding tailwind to the project

- Here we are adding tailwind to the **container**

<br>

## 🥭

## [width](https://tailwindcss.com/docs/width) [height](https://tailwindcss.com/docs/height)

### Here below you can see how it works

- **h-full height: 100%;** & **w-full height: 100%;**

- **h-screen height: 100vh;**

<br>

```javascript
const styles = {
  // Check the links to see how it works
  //   h-full	height: 100%; &  w-full	height: 100%;
  //   h-screen	height: 100vh;
  // h-full https://tailwindcss.com/docs/height
  // w-full https://tailwindcss.com/docs/width
  container: `h-full w-full flex bg-[#fff]`,
};

export default function Home() {
  return <div className={styles.container}></div>;
}
```

#### flex settings [flex](https://tailwindcss.com/docs/flex)

<br>

### Gradients

```javascript
bg-gradient-to-t from-[#0d141c] to-[#42667e]
```
