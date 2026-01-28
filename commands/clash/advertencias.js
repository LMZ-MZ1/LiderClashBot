import fs from 'fs'
import path from 'path'
import { resolveLidToRealJid } from "../../lib/utils.js"

const WARN_DIR = 'C:/Users/Ryzen 5/Desktop/Bot/AlyaBot-MD-Stellar/LiderBot Clash/commands/ListaAdvs'

export default {
  command: ['advertencias'],
  category: 'clash',
  info: {
    desc: 'Muestra la lista de advertencias que tiene un miembro del clan',
    uso: ''
  },
  isAdmin: true,
  run: async (client, m) => {

    const mentioned = m.mentionedJid
    const who2 =
      mentioned.length > 0
        ? mentioned[0]
        : m.quoted
        ? m.quoted.sender
        : false

    if (!who2) {
      return m.reply('🍒 Menciona o responde a un usuario válido para ver sus advertencias.')
    }

    const userId = await resolveLidToRealJid(who2, client, m.chat)

    const filePath = path.join(WARN_DIR, `${m.chat}.json`)

    // si no existe el archivo → no hay advertencias
    if (!fs.existsSync(filePath)) {
      return client.reply(
        m.chat,
        `🌽 @${userId.split('@')[0]} no tiene advertencias registradas.`,
        m,
        { mentions: [userId] }
      )
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const warnings = data[userId] || []
    const total = warnings.length

    if (total === 0) {
      return client.reply(
        m.chat,
        `🌽 @${userId.split('@')[0]} no tiene advertencias registradas.`,
        m,
        { mentions: [userId] }
      )
    }

    const name = global.db.data.users?.[userId]?.name || 'Usuario'

    const warningList = warnings
      .map((w, i) => {
        const index = total - i
        const author = w.by ? `\n> » Por: @${w.by.split('@')[0]}` : ''
        return `\`#${index}\` » ${w.reason}\n> » Fecha: ${w.timestamp}${author}`
      })
      .join('\n')

    await client.reply(
      m.chat,
      `✐ Advertencias de @${userId.split('@')[0]} (${name}):\n> ✧ Total de advertencias: \`${total}\`\n\n${warningList}`,
      m,
      { mentions: [userId, ...warnings.map(w => w.by).filter(Boolean)] }
    )
  },
}
