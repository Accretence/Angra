import getTransporter from './helpers/getTransporter.js'
import getEpilogue from './markdown/getEpilogue.js'
import getPrologue from './markdown/getPrologue.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to, code) {
	const subject = 'Verify your Email'

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
		<h4>Hello! Welcome to ${config.meta.title}!</h4>
		<p>
			There’s one quick step you need to complete before gaining full
			access to your account. Let’s make sure this is the right address we
			should use for your new account.
		</p>
		<br />
		<p>
			Please enter this verification code on our
			<a href=${config.urls.verify}>verification page.</a>
		</p>
		<h2>${code}</h2>
	`
}
