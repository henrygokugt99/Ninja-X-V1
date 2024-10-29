const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xF4B1ZoL#W7z_m961b2gi9Xv-n7pinePHHqRhGdR8_D_7aDZjAKI",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
