import pug from 'pug'
import juice from 'juice'
import getTransporter from './helpers/getTransporter'

export default async function (config, to, code) {
	const subject = 'Password successfully reset'

	let transporter = await getTransporter()

	let html = pug.renderFile('node_modules/angra/views/reset.pug', {
		config,
		title: subject,
		name: config.meta.title,
		code,
	})

	juice.juiceResources(html, {}, async (err, html) => {
		await transporter.sendMail({
			from: user,
			to,
			subject,
			text: subject,
			html,
		})
	})
}
