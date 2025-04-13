# Recipe Genie

Recipe Genie is an application that generates recipes based on the ingredients you have. It uses a machine learning model to create personalized recipes and provides allergen warnings.

## Project Structure

- `backend/`: Flask backend with the recipe generation model
- `src/`: React Native frontend application

## Setup Instructions

### Prerequisites

- Node.js and npm
- Python 3.8+ with pip
- Flask and Flask-CORS
- PyTorch and Transformers libraries
- Waitress (for production-ready server)

### Quick Start (Windows)

We've created convenient scripts to help you get started quickly:

1. Start the backend server:
   - Double-click `start-backend.bat` or run it from the command line

2. In a new terminal, start the frontend:
   - Double-click `start-frontend.bat` or run it from the command line
   - This will help you configure the correct IP address and start the Expo server

### Manual Setup

#### Backend Setup

1. Install the required Python packages:

```bash
cd RecipeGeniee/backend
pip install flask flask-cors torch transformers waitress
```

2. Start the Flask backend server:

```bash
python app.py
```

The backend server will start on http://0.0.0.0:5000 (accessible from other devices on your network).

#### Frontend Setup

1. Install the required npm packages:

```bash
cd RecipeGeniee
npm install
```

2. Configure the API connection:

```bash
node setup-api.js
```

3. Start the Expo development server:

```bash
npx expo start
```

## Using the Application

1. Enter the ingredients you have in the input field
2. Click "Generate Recipe"
3. View the generated recipe with ingredients, instructions, and allergen warnings
4. Save your favorite recipes for later

## API Endpoints

- `POST /api/generate-recipe`: Generate a recipe based on provided ingredients
- `GET /health`: Check the health status of the API

## Integration Details

The frontend communicates with the backend through the API service defined in `src/services/api.js`. The API endpoint is configured to point to the local Flask server running on port 5000.

## Troubleshooting

### Connection Issues

- **"Cannot connect to the recipe server"**: This usually means your phone cannot reach your computer's server
  - Make sure your phone and computer are on the same WiFi network
  - Use the `setup-api.js` script to configure the correct IP address
  - Check if your computer's firewall is blocking port 5000
  - Try temporarily disabling your firewall to test the connection

### Other Common Issues

- If you encounter CORS issues, make sure the Flask-CORS extension is properly installed and configured
- If the model fails to load, check the model paths in `backend/app.py`
- For React Native issues, check the [Expo documentation](https://docs.expo.dev/)

## Network Configuration

The backend server needs to be accessible from your mobile device. The `setup-api.js` script helps configure this automatically, but if you're having issues:

1. Find your computer's IP address on your local network (run `ipconfig` on Windows)
2. Make sure port 5000 is allowed through your firewall
3. Update the API URL in `src/services/api.js` if needed
