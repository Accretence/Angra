import sendMail from './helpers/sendMail.js'

export default async function (
	name,
	to,
	reset_password_code,
	reset_url,
	unsubscribe_url
) {
	const subject = 'Request to reset password'

	await sendMail(
		name,
		to,
		subject,
		getBody(reset_password_code, reset_url),
		unsubscribe_url
	)
}

function getBody(reset_password_code, reset_url) {
	return `
		<p>
			You requested to reset your password. Please enter this password reset verification code on our
			<a href=${reset_url}>password reset page.</a>
		</p>
		<h2>${reset_password_code}</h2>
	`
}
