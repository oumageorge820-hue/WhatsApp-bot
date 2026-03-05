const { default: makeWASocket, useMultiFileAuthState } = require("@adiwajshing/baileys")

async function startBot() {
const { state, saveCreds } = await useMultiFileAuthState("auth")

const sock = makeWASocket({
auth: state
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("messages.upsert", async ({ messages }) => {
const m = messages[0]
if(!m.message) return

const msg = m.message.conversation

if(msg === "hi"){
await sock.sendMessage(m.key.remoteJid,{text:"Hello 👋 I am a WhatsApp bot"})
}
})

}

startBot()
