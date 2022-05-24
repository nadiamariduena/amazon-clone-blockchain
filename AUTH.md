## 🥭

#### This is just a small part of the authentication process

- You will find the entire section inside the branch 2-context-provider-Auth

#### So what its going to happen here:

- in step 1, its going to check if there is an user connected to our app

<br>

- in the 2 step, its going to check if there is something in the input field

<br>

- in the 3 step, its going to add a column in our **moralis** database (we have rows and columns), the column is going to be called **nickname** , then its going to store (in moralis), the name you add in the input as the **nickname**

<br>

- in step 4, we will **save** the new nickname / or you will just **update the database**

<br>

- in the 5 step, it will clear the input field **once its done saving or updating**

<br>

- in step 6, we will console log a message that says **Cant set empty nickname**, (this is temporary)

```javascript
const handleSetUsername = () => {
  // 1
  if (user) {
    // 2
    if (nickname) {
      // 3
      user.set(`nickname`, nickname);
      // 4
      user.save();
      // 5
      setNickname("");
    } else {
      console.log("Cant set empty nickname");
    }
    //
  } else {
    // if there is not user...
    console.log("there is not user");
  }
};
```
