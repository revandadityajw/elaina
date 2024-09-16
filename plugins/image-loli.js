import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	conn.sendFile(m.chat, url, null, 'Tch, dasar pedo', m)
}
handler.help = ['loli']
handler.tags = ['nsfw']
handler.command = /^(loli)$/i
handler.premium = false
export default handler

global.paptt = [
"https://i.pinimg.com/736x/aa/7a/dd/aa7add75a9a801f36146f8b5da2225b6.jpg","https://telegra.ph/file/9b10a3ff599e93d48ec52.jpg","https://telegra.ph/file/67d839b645ea5736d4fdb.jpg","https://telegra.ph/file/72421d78aa7f26f40cffb.jpg","https://telegra.ph/file/93d30149548dd2d2b6abb.jpg","https://telegra.ph/file/9aec109695a05a8315ef6.jpg","https://telegra.ph/file/b2e435b86f316785ec540.jpg","https://telegra.ph/file/e1661cbd6a96612112f7c.jpg","https://i.pinimg.com/originals/37/5a/61/375a61f5dff6828d7852af805aca8f5d.jpg","https://i.pinimg.com/originals/82/95/02/82950275dfcf97a75e5e9b3a01949bdf.jpg","https://i.pinimg.com/originals/25/4b/f6/254bf66d98877a642566e1e3adb4ed0b.jpg","https://i.pinimg.com/originals/26/5a/2b/265a2b5d525cafb2df818beb02a50b32.jpg","https://telegra.ph/file/dc51050f77f3c4ec1c851.jpg","https://telegra.ph/file/49aee3a3fe8b677694474.jpg","https://telegra.ph/file/a2aa293a7943f52db73fc.jpg","https://telegra.ph/file/cbe74e29b869bc408c820.jpg","https://telegra.ph/file/c22cbef32bcd7e40afa8c.png","https://telegra.ph/file/413bd0dcb1b1a2036a92e.jpg","https://telegra.ph/file/9de6c08e1a505b821c1b6.jpg","https://telegra.ph/file/fa85a02c0fe64b32e591f.jpg","https://telegra.ph/file/38f6db2f02a730b37c3c6.jpg","https://i.pinimg.com/474x/f6/5a/75/f65a75e5d194062309ed4e18d2e5c96f.jpg","https://i.pinimg.com/736x/5e/a0/d1/5ea0d1409f0e3ce93da8dfe3e7c88bdb.jpg","https://i.pinimg.com/474x/3d/11/f8/3d11f856c798db9f1a3033ed7f2152eb.jpg","https://i.pinimg.com/474x/a6/5b/c6/a65bc61091d318833390168831de129c.jpg","https://i.pinimg.com/736x/cb/35/3a/cb353a77e86a86c3ea0ae72c27f0f5f7.jpg"
]