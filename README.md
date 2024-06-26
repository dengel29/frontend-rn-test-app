# Welcome to the mobile nüli test app

For full instructions on what we'd like you to do please visit our [official developer test page](https://www.notion.so/nuliapp/Nuli-Mid-Level-Mobile-Developer-Test-83f53a4746824e4a8f924b8b9fc13d69#ac50bed4e72645a2a5b066ff67bb7a93).

## ❗️Please do this before running❗️
Please change the contents of `apollo.ts` to your current local address. The current contents are

```ts
const client = new ApolloClient({
  uri: "http://192.168.33.123:3000/graphql",
  cache: new InMemoryCache(),
});
```

Change the uri to the your local address which can be obtained by running (if on Mac)
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\   -f2
```

## For running the back-end 

In order to get data to the app, the back-end must be running and the database populated. Instructions for doing so can be found [here](https://github.com/dengel29/backend-nest-test-app/)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
