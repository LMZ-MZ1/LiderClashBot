const linkRegex = /(https?:\/\/)?(chat\.whatsapp\.com\/[0-9A-Za-z]{20,24}|whatsapp\.com\/channel\/[0-9A-Za-z]{20,24})/i

const allowedLinks = [
  'https://whatsapp.com/channel/0029VbApwZ9ISTkEBb6ttS3F',
  'https://whatsapp.com/channel/0029Vb6IdnEGU3BTahqaLL2V',
  'https://chat.whatsapp.com/JL3lRO1Fx3sFVEfUDnMrul?mode=ems_copy_t'
]

const joinCommands = [
  '/invite', '#invite', '-invite',
  '!invite', '.invite', '+invite'
]

export default async (m, client) => {
  // Solo actúa si es grupo y hay texto
  if (!m.isGroup || !m.text) return

  // Se eliminó toda la lógica de anti-links
  // Esto significa que el bot ya no eliminará mensajes ni expulsará usuarios

  // Opcional: si quieres, puedes dejarlo solo como log, por ejemplo:
  // console.log(`[ANTI-LINK DESACTIVADO] ${m.sender} envió un enlace: ${m.text}`)
}
