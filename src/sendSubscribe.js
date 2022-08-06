import pug from 'pug'
import juice from 'juice'
import getTransporter from './helpers/getTransporter.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to) {
	const subject = 'Successfully subscribed'

	let transporter = await getTransporter()

	let html = pug.renderFile('views/subscribe.pug', {
		config,
		title: subject,
		name: config.meta.title,
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
