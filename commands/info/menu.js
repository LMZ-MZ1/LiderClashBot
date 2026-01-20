import { getDevice } from '@whiskeysockets/baileys'
import moment from 'moment-timezone'

export default {
  command: ['help', 'menu'],
  category: 'info',
  info: {
    desc: 'Muestra el menú de comandos',
    uso: ''
  },

  run: async (client, m, args, command, text, prefix) => {
    try {
      const now = new Date()
      const colombianTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'America/Bogota' })
      )

      const tiempo = colombianTime
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
        .replace(/,/g, '')

      const tiempo2 = moment.tz('America/Bogota').format('hh:mm A')

      const botId = client?.user?.id.split(':')[0] + '@s.whatsapp.net'
      const settings = global.db.data.settings[botId] || {}

      const botname2 = settings.namebot2 || ''
      const owner = settings.owner || ''
      const banner = settings.banner || ''
      const link = settings.link || ''

      const users = Object.keys(global.db.data.users).length
      const device = getDevice(m.key.id)

      let menu = `> *¡ʜᴏʟᴀ!* ${global.db.data.users[m.sender]?.name || 'Usuario'}, mucho gusto mi nombre es *${botname2}*

→ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ::* ${owner || 'LMetalZoa | MetalZero/One'}
→ *sɪsᴛᴇᴍᴀ/ᴏᴘʀ ::* ${device}

→ *Fecha y Hora ::* ${tiempo}, ${tiempo2}
→ *Usuarios en el bot ::* ${users.toLocaleString()}
→ *ᴜʀʟ ::* ${link}

乂 *ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* 乂
`

      /* =====================================================
         AGRUPAMOS COMANDOS POR CATEGORY
      ===================================================== */

      const categoryArg = args[0]?.toLowerCase()
      const categories = {}

      for (const [name, cmd] of global.comandos.entries()) {
        const category = cmd.category || 'otros'
        if (!categories[category]) categories[category] = []

        categories[category].push({
          name,
          desc: cmd.info?.desc || 'Sin descripción',
          uso: cmd.info?.uso || ''
        })
      }

      if (categoryArg && !categories[categoryArg]) {
        return m.reply(`La categoría *${categoryArg}* no fue encontrada.`)
      }

      /* =====================================================
         ORDEN PERSONALIZADO DE CATEGORÍAS
      ===================================================== */

      const orderedCategories = [
        'clash',
        'ai',
        'grupo',
        'info',
        'utils',
        'downloader'
      ]

      const printed = new Set()

      // 1️⃣ Imprimimos las categorías en el orden deseado
      for (const category of orderedCategories) {
        if (!categories[category]) continue
        if (categoryArg && category !== categoryArg) continue

        printed.add(category)

        const catName =
          category.charAt(0).toUpperCase() + category.slice(1)

        menu += `\n .  . ︵ *${catName}*.  ◌Ⳋ𝅄\n`

        categories[category].forEach(cmd => {
          menu += `• ${prefix}${cmd.name} ${cmd.uso ? `+ ${cmd.uso}` : ''}\n`
          menu += `> ${cmd.desc}\n`
        })
      }

      // 2️⃣ Cualquier categoría NO listada va al final
      for (const [category, cmds] of Object.entries(categories)) {
        if (printed.has(category)) continue
        if (categoryArg && category !== categoryArg) continue

        const catName =
          category.charAt(0).toUpperCase() + category.slice(1)

        menu += `\n .  . ︵ *${catName}*.  ◌Ⳋ𝅄\n`

        cmds.forEach(cmd => {
          menu += `• ${prefix}${cmd.name} ${cmd.uso ? `+ ${cmd.uso}` : ''}\n`
          menu += `> ${cmd.desc}\n`
        })
      }

      menu += `\n> *${botname2} desarrollado por LMZ-MZ1*`

      if (banner && /\.(mp4|gif|webm)$/i.test(banner)) {
        await client.sendMessage(
          m.chat,
          { video: { url: banner }, gifPlayback: true, caption: menu },
          { quoted: m }
        )
      } else {
        await client.sendMessage(
          m.chat,
          { text: menu },
          { quoted: m }
        )
      }

    } catch (e) {
      console.error(e)
      await m.reply('❌ Error al generar el menú:\n' + e.message)
    }
  }
}

function formatearMs(ms) {
  const segundos = Math.floor(ms / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)

  return [
    dias && `${dias}d`,
    `${horas % 24}h`,
    `${minutos % 60}m`,
    `${segundos % 60}s`
  ]
    .filter(Boolean)
    .join(' ')
}
