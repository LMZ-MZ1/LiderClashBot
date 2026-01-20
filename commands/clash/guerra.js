import axios from 'axios'

export default {
  command: ['guerra',],
  category: 'clash',
  info: {
    desc: 'Muestra el estado actual de la guerra de esta semana del clan',
    uso: '.riverrace #TAG'
  },
  run: async (client, m, args) => {
    if (!args[0])
      return m.reply('Uso: .riverrace #TAG')

    const clanTag = args[0].replace('#', '%23')

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

      let text = `🏞️ *River Race*\n\n`
      text += `🏰 Clan: ${clan.name}\n`
      text += `🏷️ Tag: ${clan.tag}\n`
      text += `⚔️ Estado del clan: ${data.state}\n`
      text += `👥 Participantes en la guerra: ${participants.length}\n\n`
      text += `📋 *Actividad del clan*\n`

      participants.forEach((p, i) => {
        text += `\n${i + 1}. ${p.name}\n`
        text += `   🟢 Puntos: ${p.fame} (debes tener mín. 1000 el domingo en la noche)\n`
        text += `   🚢 Ataques al barco: ${p.boatAttacks}\n`
        text += `   🃏 Mazos usados hoy: ${p.decksUsedToday}`
      })

      m.reply(text.trim())

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
