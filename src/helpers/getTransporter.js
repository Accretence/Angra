import nodemailer from 'nodemailer'

const host = process.env.MAIL_SMTP_HOST
const port = process.env.MAIL_SMTP_PORT
const user = process.env.MAIL_SMTP_USER
const pass = process.env.MAIL_SMTP_PASS
const secure = process.env.MAIL_SMTP_SECURE

export default async function () {
	return nodemailer.createTransport({
		host,
		port,
		secure: secure == 'true' ? true : false,
		auth: {
			user,
			pass,
		},
	})
}
