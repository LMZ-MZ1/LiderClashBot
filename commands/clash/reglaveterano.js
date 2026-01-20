export default {
  command: ['reglaveterano'],
  category: 'clash',
  info: {
    desc: 'Reglas para miembros con rango Veterano',
    uso: '.reglavet'
  },
  run: async (client, m) => {

    const lider = '522226671751@s.whatsapp.net'

    const text = `
> ⭐ *Reglas para Veteranos del Clan*

⚔️ *Mantenimiento del rango*  
• Para llegar a *Veterano* ya fue necesario aportar **1500+ puntos en guerra durante 3 semanas seguidas**. De modo que se espera un **buen aporte constante de puntos**  
• Si realizas **menos de 1000 puntos** por 📅 **3 semanas consecutivas**, 🔻 serás regresado a *Miembro*

━━━━━━━━━━━━━━

🚫 *Ascensos*  
• Los Veteranos **NO pueden ascender** a otros miembros  
• Los ascensos son responsabilidad exclusiva del líder 👑 @LegnaMetalZoa  
(basado en analíticas y desempeño real)

━━━━━━━━━━━━━━

📣 *Responsabilidad en guerra*  
• En la pestaña de **Guerra del Clan** pueden 👉 dar *toques* a los miembros que no han participado  
• Esa así como ayudar a mantener un ambiente sano en el clan es una de sus funciones principales como Veteranos
`.trim()

    await client.sendMessage(
      m.chat,
      { text, mentions: [lider] },
      { quoted: m }
    )
  }
}
