// setup-api.js
const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');

// Function to get the local IP address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  
  for (const interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];
    for (const info of interfaceInfo) {
      // Skip internal and non-IPv4 addresses
      if (info.family === 'IPv4' && !info.internal) {
        addresses.push(info.address);
      }
    }
  }
  
  return addresses;
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get all available IP addresses
const ipAddresses = getLocalIpAddress();

console.log('\n=== RecipeGenie API Setup ===');
console.log('This script will help you configure the API connection for your RecipeGenie app.\n');

console.log('Available IP addresses on your computer:');
ipAddresses.forEach((ip, index) => {
  console.log(`${index + 1}. ${ip}`);
});

// Ask user to select an IP address
rl.question('\nSelect the IP address to use (enter the number): ', (answer) => {
  const selection = parseInt(answer, 10);
  
  if (isNaN(selection) || selection < 1 || selection > ipAddresses.length) {
    console.log('Invalid selection. Please run the script again.');
    rl.close();
    return;
  }
  
  const selectedIp = ipAddresses[selection - 1];
  console.log(`\nSelected IP: ${selectedIp}`);
  
  // Create .env file
  const envContent = `EXPO_PUBLIC_API_URL=http://${selectedIp}:5000`;
  fs.writeFileSync(path.join(__dirname, '.env'), envContent);
  
  console.log('\nCreated .env file with the following content:');
  console.log(envContent);
  
  console.log('\nInstructions:');
  console.log('1. Start your backend server:');
  console.log('   cd backend');
  console.log('   python app.py');
  console.log('\n2. In a new terminal, start your frontend:');
  console.log('   npx expo start');
  console.log('\n3. On your mobile device, make sure you are connected to the same WiFi network');
  console.log('   and scan the QR code from the Expo terminal.');
  console.log('\n4. If you still have connection issues, check your firewall settings and make');
  console.log('   sure port 5000 is allowed for incoming connections.');
  
  rl.close();
});
