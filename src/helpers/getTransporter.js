import nodemailer from 'nodemailer'

const host = process.env.MAIL_SMTP_HOST
const port = process.env.MAIL_SMTP_PORT
const user = process.env.MAIL_SMTP_USER
const pass = process.env.MAIL_SMTP_PASS
const secure = process.env.MAIL_SMTP_SECURE
const tls = process.env.MAIL_SMTP_TLS_REJECT_UNAUTHORIZED
const cipher = process.env.MAIL_SMTP_TLS_CIPHER
const service = process.env.MAIL_SMTP_SERVICE

export default async function () {
	return nodemailer.createTransport({
		host,
		port,
		secure: secure == 'true' ? true : false,
		auth: {
			user,
			pass,
		},
		tls: {
			rejectUnauthorized: tls == 'true' ? true : false,
			ciphers: cipher ? cipher : null,
		},
		service: service ? service : null,
	})
}
