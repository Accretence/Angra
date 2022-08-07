import getTransporter from './helpers/getTransporter.js'
import getEpilogue from './markdown/getEpilogue.js'
import getPrologue from './markdown/getPrologue.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to, code) {
	const subject = 'Request to reset password'

	let transporter = await getTransporter()

	await transporter.sendMail({
		from,
		to,
		subject,
		text: subject,
		html:
			getPrologue(config, subject) +
			getBody(config, code) +
			getEpilogue(config),
	})
}

function getBody(config, code) {
	return `
		<p>
			You requested to reset your password. Please enter this password reset verification code on our
			<a href=${config.urls.reset}>password reset page.</a>
		</p>
		<h2>${code}</h2>
	`
}
