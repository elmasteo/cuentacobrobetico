const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.resolve(__dirname, '../../assets/templatev2.pdf');
  const file = fs.readFileSync(filePath);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Access-Control-Allow-Origin': '*',
    },
    body: file.toString('base64'),
    isBase64Encoded: true,
  };
};
