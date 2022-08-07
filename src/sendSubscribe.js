import getTransporter from './helpers/getTransporter.js'
import getEpilogue from './markdown/getEpilogue.js'
import getPrologue from './markdown/getPrologue.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to) {
	const subject = 'Successfully subscribed'

	let transporter = await getTransporter()

	await transporter.sendMail({
		from,
		to,
		subject,
		text: subject,
		html: getPrologue(config, subject) + getBody() + getEpilogue(config),
	})
}

function getBody() {
	return `
		<p>
			You successfully subscribed from our emaill list.
		</p>
	`
}
