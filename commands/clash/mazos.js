export default {
  command: ['mazos'],
  category: 'clash',
  info: {
    desc: 'Links de mazos por arquetipo para mejorar en Clash Royale',
    uso: '.mazos'
  },
  run: async (client, m) => {

    const lider = '522226671751@s.whatsapp.net'
    const nombre = m.pushName || 'Jugador'

    const text = `
👋 Hola *${nombre}* 💪 ¿Así que quieres mejorar? Muy bien 😎  
> Aquí te dejo *mazos por arquetipo* para que elijas el que más te guste.
> 🧠 Si necesitas un *arquetipo en específico* o ayuda para *crear tu propio mazo*, escríbele al Supremo y Amadísimo líder 👑 @LegnaMetalZoa
> 📲 *¿Cómo copiar un mazo?* Si ves un mazo que te guste: 👉 toca el botón azul con el símbolo de *compartir* ↗️ y se copiará directamente en Clash Royale.

━━━━━━━━━━━━━━
🎯 *Logbait clasicos con barril de duende*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=goblin-barrel-ev1&&global_exclude=false

🎯 *Logbait ultra rapidos con barril de esqueletos*  
🔗 
https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=4&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=suspicious-bush&&global_exclude=false

━━━━━━━━━━━━━━
💥 *Megacaballero, mazos balanceados*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=mega-knight-ev1&&global_exclude=false

⭐ *Este es el mazo de Mega Caballero que usa el líder:*  
🔗 https://link.clashroyale.com/en/?clashroyale://copyDeck?deck=26000040;26000055;26000072;26000056;28000007;26000025;28000001;26000030&l=Royals&tt=159000000

━━━━━━━━━━━━━━
🛠️ *Excavadora*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=goblin-drill-ev1&&global_exclude=false

━━━━━━━━━━━━━━
🛡️ *Reclutas Reales*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=royal-recruits-ev1&&global_exclude=false

━━━━━━━━━━━━━━

⚰️ *Cementerio*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=graveyard&&global_exclude=false

━━━━━━━━━━━━━━

🎯 *Gigante Noble*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=royal-giant-ev1&&global_exclude=false

━━━━━━━━━━━━━━
🐀 *Gólem de Elixir*  
(rata el que los use 😭🐀)  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=elixir-golem&&global_exclude=false

━━━━━━━━━━━━━━
🪨 *Gólem*  
🔗 https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=golem&&global_exclude=false

━━━━━━━━━━━━━━
✊🏾🐗 *Ciclado rápido de monta*
🔗 https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=3&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=hog-rider&&global_exclude=false

*ciclado lento de monta*
🔗 https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=4&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=hog-rider&&global_exclude=false

━━━━━━━━━━━━━━
🎈💣 *Globos*
🔗 
https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=5.6&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&&&global_exclude=false

🔗 https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=1&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&inc=balloon&&global_exclude=false

━━━━━━━━━━━━━━
🐘 *Ciclado lento y pesado en general*(Gólems, Triple Mosquetera, PEKKA, Mega Caballero)
🔗 
https://royaleapi.com/decks/popular?time=7d&sort=win&size=20&players=PvP&min_ranked_trophies=0&max_ranked_trophies=4400&min_elixir=5.6&max_elixir=9&evo=None&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=TopRanked&&&global_exclude=false

> Si quieres que añada mas arquetipos de mazos aqui o si necesitas ayuda para hacer un mazo especifico para ti, pideme ayuda
`.trim()

    await client.sendMessage(
      m.chat,
      { text, mentions: [lider] },
      { quoted: m }
    )
  }
}
