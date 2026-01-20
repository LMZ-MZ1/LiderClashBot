export default {
  command: ['clanpic'],
  category: 'clash',
  info: {
    desc: 'Descarga el escudo de armas del clan',
    uso: ''
  },
  run: async (client, m) => {

    if (!m.isGroup)
      return m.reply('🍒 Este comando solo puede usarse en grupos.')

    try {
      // Obtener la foto del grupo
      const img = await client.profilePictureUrl(m.chat, 'image')
        .catch(() => null)

      if (!img)
        return m.reply('🦩 El grupo no tiene foto de perfil.')

      await client.sendMessage(
        m.chat,
        { image: { url: img }, caption: '🏰 Escudo del clan' },
        { quoted: m }
      )

    } catch (e) {
      console.error(e)
      m.reply('🌱 Error al obtener la foto del grupo.')
    }
  }
}
