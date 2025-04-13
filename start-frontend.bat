@echo off
echo Setting up RecipeGenie Frontend...
echo.
echo First, let's configure the API connection:
node setup-api.js
echo.
echo Starting Expo development server...
npx expo start
pause
