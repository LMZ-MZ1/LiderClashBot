export default {
  command: [
    'welcome', 'bienvenidas',
    'alerts', 'alertas',
    'antilink', 'antienlaces', 'antilinks',
    'adminonly', 'onlyadmin',
  ],
  category: 'grupo',
  isAdmin: true,
    run: async (client, m, args, command, text, prefix) => {
    const chatData = global.db.data.chats[m.chat]
    const stateArg = args[0]?.toLowerCase()
    const validStates = ['on', 'off', 'enable', 'disable']

    const mapTerms = {
      antilinks: 'antilinks',
      antienlaces: 'antilinks',
      antilink: 'antilinks',
      welcome: 'welcome',
      bienvenidas: 'welcome',
      alerts: 'alerts',
      alertas: 'alerts',
      adminonly: 'adminonly',
      onlyadmin: 'adminonly',
    }

    const featureNames = {
      antilinks: 'el *AntiEnlace*',
      welcome: 'el mensaje de *Bienvenida*',
      alerts: 'las *Alertas*',
      adminonly: 'el modo *Solo Admin*',
    }

    const featureTitles = {
      antilinks: 'AntiEnlace',
      welcome: 'Bienvenida',
      alerts: 'Alertas',
      adminonly: 'AdminOnly',
    }

    const normalizedKey = mapTerms[command] || command
    const current = chatData[normalizedKey] === true
    const estado = current ? '✓ Activado' : '✗ Desactivado'
    const nombreBonito = featureNames[normalizedKey] || `la función *${normalizedKey}*`
    const titulo = featureTitles[normalizedKey] || normalizedKey

    if (!stateArg) {
      return client.reply(
        m.chat,
        `*✩ ${titulo} (✿❛◡❛)*\n` +
        `❒ *Estado ›* ${estado}\n\n` +
        `ꕥ Un administrador puede activar o desactivar ${nombreBonito} utilizando:\n\n` +
        `> ● _Habilitar ›_ *${prefix + normalizedKey} enable*\n` +
        `> ● _Deshabilitar ›_ *${prefix + normalizedKey} disable*\n\n${dev}`,
        m
      )
    }

    if (!validStates.includes(stateArg)) {
      return m.reply(
        `🌽 Estado no válido. Usa *on*, *off*, *enable* o *disable*\n\nEjemplo:\n${prefix}${normalizedKey} enable`
      )
    }

    const enabled = ['on', 'enable'].includes(stateArg)

    if (chatData[normalizedKey] === enabled) {
      return m.reply(`🌱 *${titulo}* ya estaba *${enabled ? 'activado' : 'desactivado'}*.`)
    }

    chatData[normalizedKey] = enabled
    return m.reply(`🌽 Has *${enabled ? 'activado' : 'desactivado'}* ${nombreBonito}.`)
  }
};