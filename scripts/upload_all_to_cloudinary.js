const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'jstp2ba5',
  api_key: '765653389451232',
  api_secret: 'zDj90-GBIS8AexMWqTw9HKb8IeA',
  secure: true
});

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

async function uploadAll() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const allImages = getAllFiles(imagesDir);

  console.log(`Found ${allImages.length} images to upload to Cloudinary.`);
  const results = {};

  for (let i = 0; i < allImages.length; i++) {
    const file = allImages[i];
    const relativePath = path.relative(path.join(__dirname, '..', 'public'), file).replace(/\\/g, '/');
    const publicId = relativePath.replace(/^images\//, '').replace(/\.[^/.]+$/, '');
    
    console.log(`[${i + 1}/${allImages.length}] Uploading: ${relativePath}...`);
    try {
      const res = await cloudinary.uploader.upload(file, {
        folder: 'read_pustak_with_avni',
        public_id: publicId,
        overwrite: true
      });
      console.log(` ✓ Done: ${res.secure_url}`);
      results[relativePath] = res.secure_url;
    } catch (err) {
      console.error(` ✗ Failed ${relativePath}:`, err.message || err);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, '..', 'cloudinary_mapping.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('Upload process completed. Results saved to cloudinary_mapping.json');
}

uploadAll().catch(console.error);
