import pug from 'pug'
import juice from 'juice'
import getTransporter from './helpers/getTransporter.js'
import getPath from './helpers/getPath.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to, code) {
	const subject = 'Password successfully reset'

	let transporter = await getTransporter()

	let html = pug.renderFile(await getPath('reset.pug'), {
		config,
		title: subject,
		name: config.meta.title,
		code,
	})

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
