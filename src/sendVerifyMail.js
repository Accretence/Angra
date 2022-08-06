import pug from 'pug'
import juice from 'juice'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import getTransporter from './helpers/getTransporter.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const from = process.env.MAIL_SMTP_USER

export default async function (config, to, code) {
	const subject = 'Verify your Email'

	let transporter = await getTransporter()

	let html = pug.renderFile(
		path.join(__dirname, '..', 'views', 'confirmation.pug'),
		{
			config,
			title: subject,
			name: config.meta.title,
			code,
		}
	)

	juice.juiceResources(html, {}, async (err, html) => {
		await transporter.sendMail({
			from,
			to,
			subject,
			text: subject,
			html,
		})
	})
}
