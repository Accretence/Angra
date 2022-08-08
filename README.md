<a href="https://npmjs.com/package/angra">
   <p align="center">
   <img src="https://img.shields.io/npm/v/angra?style=for-the-badge&labelColor=000000">
   <img src="https://img.shields.io/npm/dw/angra?color=000&style=for-the-badge">
   </p>
</a>

## What is Angra?

Angra exposes several functions that let you send transctional emails with minimum setup:

```js
await sendVerifyMail()
await sendForgotPassword()
await sendResetPassword()
await sendSubscribe()
await sendUnsubscribe()
```

## Install

```shell
npm install angra
```

## Setup

You need to provide `SMTP` credentials obtained from your Email provider in `.env`.

```shell
MAIL_SMTP_HOST =
MAIL_SMTP_USER =
MAIL_SMTP_PASS =
MAIL_SMTP_PORT =
MAIL_SMTP_SECURE = // Boolean
MAIL_SMTP_TLS_REJECT_UNAUTHORIZED = // Boolean
MAIL_SMTP_TLS_CIPHER =
MAIL_SMTP_SERVICE =
MAIL_SMTP_VERBOSE = // Boolean, Nodemailer will log details if true
```

Not all of these parameters are required. For example if you're using Gmail you only need these parameters:

```shell
MAIL_SMTP_USER = // Your Gmail Address
MAIL_SMTP_PASS = // Google App Password
MAIL_SMTP_SERVICE = 'Gmail'
```

## Usage

Each of the exposed function require a certain set of parameters passed into the function, For example:

```js
await sendVerifyMail(
	sender_title,
	recipient_address,
	email_verification_code,
	verify_url,
	unsubscribe_url
)
```
