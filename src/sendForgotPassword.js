import pug from 'pug'
import juice from 'juice'
import nodemailer from 'nodemailer'

const host = process.env.MAIL_SMTP_HOST
const port = process.env.MAIL_SMTP_PORT
const user = process.env.MAIL_SMTP_USER
const pass = process.env.MAIL_SMTP_PASS

export default async function (config, to, code) {
	const subject = 'Welcome! Verify your Email to gain full access.'

	let transporter = nodemailer.createTransport({
		host,
		port,
		secure: true,
		auth: {
			user,
			pass,
		},
	})

	let html = pug.renderFile('node_modules/angra/views/forgot.pug', {
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
