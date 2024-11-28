const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "nrsong",
    desc: "To download songs.",
    react: "🎧",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*🐭⃝💗 𝐍𝐑 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 💗⃝🐭*

🎵 *MUSIC FOUND!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

💗⃝🐭 *ENJOY THE MUSIC BROUGHT TO YOU!*

> *NR-RASHU-MD WHATSAPP BOT* 

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ʀᴜꜱʜ ᴍᴅ* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})

//====================video_dl=======================

cmd({
    pattern: "nrvideo",
    alias: ["video2"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*🐭⃝💗 𝐍𝐑 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 💗⃝🐭*

🎥 *VIDEOS FOUND!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

💗⃝🐭 *ENJOY THE MUSIC BROUGHT TO YOU!*

> *NR-RASHU-MD WHATSAPP BOT* 

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ʀᴜꜱʜ ᴍᴅ*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
