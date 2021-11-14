
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '/assets/images');

const testFolder = '../assets/images/workflow';
fs.readdir(testFolder, (err, files) => {
  const list = []
  files.forEach(file => {
    list.push({
      src: file,
      title: (file.charAt(0).toLocaleUpperCase() + file.slice(1)).replace(/\..+$/, '')
    });
  });
  console.log(list)
});