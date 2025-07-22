const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const filePath = path.resolve(__dirname, "templatev2.pdf");
    const fileBuffer = fs.readFileSync(filePath);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Access-Control-Allow-Origin": "*",
      },
      body: fileBuffer.toString("base64"),
      isBase64Encoded: true, // 👈 clave
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Error: ${err.message}`,
    };
  }
};
