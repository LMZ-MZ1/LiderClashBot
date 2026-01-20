import axios from 'axios'

const DEFAULT_CLAN_TAG = 'QGVQPY0Y' // TAG por defecto

export default {
  command: ['guerra'],
  category: 'clash',
  info: {
    desc: 'Muestra el estado actual de la guerra de esta semana del clan'
  },

  run: async (client, m, args) => {
    // si no pasan tag, usa el default
    const tag = args[0] || `#${DEFAULT_CLAN_TAG}`
    const clanTag = tag.replace('#', '%23')

    try {
      const res = await axios.get(
        `${global.clash.baseURL}/clans/${clanTag}/currentriverrace`,
        {
          headers: {
            Authorization: `Bearer ${global.clash.token}`
          }
        }
      )

      const data = res.data
      const clan = data.clan
      const participants = clan.participants || []

      let text = `🏞️ *Carrera del Río*\n`
      text += `> 🏰 *Clan: ${clan.name}*\n`
      text += `> 🏷️ Tag: ${clan.tag}\n`
      text += `> ⚔️ Miembros del clan: ${data.state}\n`
      text += `> 👥 Participantes en la guerra: ${participants.length}\n\n`
      text += `📋 *Actividad del clan (recuerden que para cada domingo en la noche todos deben tener minimo 1000)*\n`

      participants.forEach((p, i) => {
        const cumple = p.fame >= 1000
        const icono = cumple ? '🟢' : '🔴'

        text += `\n*${i + 1}. ${p.name}*\n`
        text += `   ${icono} Puntos: \`${p.fame}\`\n`
        text += `   🚢 Ataques al barco: ${p.boatAttacks}\n`
        text += `   🃏 Mazos usados hoy: ${p.decksUsedToday}\n`
      })

      await m.reply(text.trim())

    } catch (err) {
      if (err.response) {
        if (err.response.status === 403)
          return m.reply('🚫 Acceso denegado (token o IP no autorizada)')
        if (err.response.status === 404)
          return m.reply('❌ Clan no encontrado')
        if (err.response.status === 429)
          return m.reply('⏳ Demasiadas peticiones, intenta luego')
      }

      console.error(err)
      m.reply('🌱 Error al obtener la River Race')
    }
  }
}
