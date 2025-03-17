export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
      const body = await readBody(event)
  
      setCookie(event, 'isDarkMode', body.isDarkMode ? 'true' : 'false', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
  
      setCookie(event, 'lang', body.lang || '0', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
  
      return { success: true }
    }
  
    const isDarkMode = getCookie(event, 'isDarkMode') === 'true'
    const lang = getCookie(event, 'lang') || 'vi'
  
    return { isDarkMode, lang }
  })
  