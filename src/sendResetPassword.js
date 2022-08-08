import sendMail from './helpers/sendMail.js'

export default async function (name, to, unsubscribe_url) {
	const subject = 'Password successfully reset'

	await sendMail(name, to, subject, getBody(), unsubscribe_url)
}

function getBody() {
	return `
		<p>
			You successfully reset your password.
		</p>
	`
}
