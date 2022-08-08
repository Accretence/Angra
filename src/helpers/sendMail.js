import getEpilogue from '../markdown/getEpilogue.js'
import getPrologue from '../markdown/getPrologue.js'
import getTransporter from './getTransporter.js'

const address = process.env.MAIL_SMTP_USER
const verbose = process.env.MAIL_SMTP_VERBOSE

export default async function (name, to, subject, body, unsubscribe_url) {
	let transporter = await getTransporter()

	const mail = await transporter.sendMail({
		from: {
			name,
			address,
		},
		to,
		subject,
		text: subject,
		html:
			getPrologue(subject, name) +
			body +
			getEpilogue(name, unsubscribe_url),
	})

	if (verbose && verbose == 'true') {
		console.log({ mail })
	}
}
