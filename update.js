var fs = require('fs');

fs.unlink('one.js', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
