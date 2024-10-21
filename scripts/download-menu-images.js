const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);

// Function to convert string to camelCase
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

// Function to download image
async function downloadImage(url, filename) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });
    await writeFileAsync(filename, response.data);
    console.log(`Downloaded: ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${filename}: ${error.message}`);
  }
}

// Main function
async function downloadMenuImages() {
  try {
    // Read the menu-items.json file
    const data = await fs.promises.readFile('menu-items.json', 'utf8');
    const menuItems = JSON.parse(data);

    // Create a directory for the images if it doesn't exist
    const imageDir = 'menu-images';
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir);
    }

    // Download images for each menu item
    for (const item of menuItems) {
      const imageName = toCamelCase(item.name);
      const imageUrl = item.image;
      const imagePath = path.join(imageDir, `${imageName}.jpg`);
      await downloadImage(imageUrl, imagePath);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the script
downloadMenuImages();