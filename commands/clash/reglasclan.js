export default {
  command: ['reglasclan'],
  category: 'clash',
  info: {
    desc: 'Muestra las reglas para permanecer en el clan',
    uso: '.reglas'
  },
  run: async (client, m) => {

    const text = `
> 📜 *Reglas para permanecer en el clan*

1️⃣ 🟢⚔ *Guerra (OBLIGATORIO)*  
Debes hacer **mínimo 1000 puntos en guerra cada semana** para poder permanecer en el clan.

2️⃣ 🎁 *Actividad*  
Se requiere ser un miembro activo dentro del clan, **donar cartas** y apoyar a los compañeros del clan.

4️⃣ 🤝 *Respeto*  
🚫 No se permiten insultos, faltas de respeto ni conflictos entre miembros.

5️⃣ ⏳ *Inactividad*  
Si un miembro permanece **inactivo más de 14 días**, será expulsado del clan.

6️⃣ 👑 *Rangos y poder*  
No se permite **abusar del rango o poder** para expulsar o ascender miembros.  
👉 De la administración de rangos **me encargo yo**.

ℹ️ Para conocer las reglas de ascenso a *Veterano* y *Colíder*, usa el comando:
👉 */ascensos*
`.trim()

    m.reply(text)
  }
}
