import path from 'path'
import process from 'process'

export default async function (name) {
	return path.join(process.cwd(), 'node_modules', 'angra', 'views', name)
}
