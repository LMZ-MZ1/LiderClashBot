export default {
  command: ['ascensos'],
  category: 'clash',
  info: {
    desc: 'Muestra las reglas de ascensos a Veterano y Colíder',
    uso: '.ascensos'
  },
  run: async (client, m) => {

    const text = `
> 🏅 *Reglas de Ascensos del Clan*

📌 *IMPORTANTE*  
La **única forma de ascender** a *Veterano* o *Colíder* es mediante:
• Participación constante en **guerra**
• O un **aporte extraordinario** al clan  
(ejemplo: *Danielmt27*, quien realizó una donación para organizar un torneo con premio)

🚫 *NO existen ascensos* por:
• Donar cartas
• Estar en los primeros lugares del clan
• Antigüedad sin aporte real

━━━━━━━━━━━━━━

⭐ *Ascenso a Veterano*  
El mínimo de puntos en guerra es de 1000 por semana por lo que debes lograr **más de 1500 puntos** en guerra durante 📅 **3 semanas consecutivas**.

👑 *Ascenso a Colíder*  
Debes lograr **más de 3100 puntos** en guerra durante 📅 **5 semanas consecutivas**.

━━━━━━━━━━━━━━

⚠️ *Advertencia*  
Una vez siendo *Veterano* o *Colíder*, es obligatorio  
mantener un **aporte constante de puntos**.  
De lo contrario, el rango **puede ser degradado**.

━━━━━━━━━━━━━━

ℹ️ Para conocer las reglas específicas de cada rango usa:
👉 */reglaveterano*  
👉 */reglacolider*
`.trim()

    m.reply(text)
  }
}
