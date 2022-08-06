import pug from 'pug'
import juice from 'juice'
import getTransporter from './helpers/getTransporter.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to, code) {
	console.log(__dirname)
	const subject = 'Request to reset password'

	let transporter = await getTransporter()

	let html = pug.renderFile('views/forgot.pug', {
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
