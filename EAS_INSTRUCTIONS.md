# Using EAS with RecipeGenie

Expo has moved from the older `expo publish` and `expo build` commands to the new EAS (Expo Application Services) system. Here's how to use it with RecipeGenie:

## Prerequisites

1. Install the EAS CLI:
```bash
npm install -g eas-cli
```

2. Log in to your Expo account:
```bash
eas login
```

## Publishing Updates

To publish an update to your app (similar to the old `expo publish`):

```bash
eas update
```

This will create an update that users of your app can download without having to install a new version.

## Building Your App

To build your app for distribution (similar to the old `expo build`):

### For Android:

```bash
eas build -p android
```

### For iOS:

```bash
eas build -p ios
```

## Creating Preview Builds

To create a preview build that you can share with testers:

```bash
eas build -p android --profile preview
eas build -p ios --profile preview
```

## Submitting to App Stores

To submit your app to the app stores:

### For Android:

```bash
eas submit -p android
```

### For iOS:

```bash
eas submit -p ios
```

## Troubleshooting

If you encounter issues with the backend connection:

1. Make sure your backend server is running
2. Check that the API_BASE_URL in src/services/api.js is correctly set to your computer's IP address
3. Ensure your phone and computer are on the same network
4. Check for any firewall settings that might be blocking the connection

For more information, see the [EAS documentation](https://docs.expo.dev/eas/).
