
const env = process.env

export const PORT = env.PORT ?? "3000"
export const HOST = env.host ?? "0.0.0.0"
export const SERVER_URL = `http://${HOST}:${PORT}`


export default {
    PORT,
    HOST,
    SERVER_URL 
}