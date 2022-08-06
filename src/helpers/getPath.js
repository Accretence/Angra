import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default async function (name) {
	return path.join(__dirname, '..', '..', 'views', name)
}
