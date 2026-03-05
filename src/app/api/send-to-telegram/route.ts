import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_API = 'https://api.telegram.org/bot'

function escapeHtml(text: string): string {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { name, phone, message, role, source } = body as {
			name?: string
			phone?: string
			message?: string
			role?: string
			/** b2c (сайт для частных) или b2b — чтобы разделять заявки в одном чате */
			source?: string
		}
		const sourceNorm = source === 'b2b' ? 'B2B' : 'B2C'

		const botToken = process.env.BOT_TOKEN?.trim().replace(/^["']|["']$/g, '')
		const chatId = process.env.CHAT_ID?.trim().replace(/^["']|["']$/g, '')

		if (!botToken || !chatId) {
			return NextResponse.json(
				{
					error: !chatId
						? 'В .env не задан CHAT_ID. Узнайте его через getUpdates (см. инструкцию).'
						: 'BOT_TOKEN или CHAT_ID не заданы в .env',
				},
				{ status: 500 },
			)
		}

		const safe = (s: string | undefined) =>
			escapeHtml(String(s ?? '').trim()) || '—'

		const text = [
			'<b>🆕 Новая заявка</b> · <b>' + sourceNorm + '</b>',
			'',
			'<i>Нажмите на значение, чтобы скопировать</i>',
			'',
			'<b>Имя:</b>',
			'<code>' + safe(name) + '</code>',
			'',
			'<b>Телефон / WhatsApp:</b>',
			'<code>' + safe(phone) + '</code>',
			'',
			'<b>Комментарий:</b>',
			'<code>' + safe(message) + '</code>',
			'',
			'<b>Кого представляет:</b>',
			'<code>' + safe(role) + '</code>',
		].join('\n')

		const url = `${TELEGRAM_API}${botToken}/sendMessage`
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId.includes('-') ? chatId : Number(chatId),
				text,
				parse_mode: 'HTML',
			}),
		})

		const data = (await res.json().catch(() => ({}))) as {
			ok?: boolean
			description?: string
		}
		if (!res.ok) {
			return NextResponse.json(
				{ error: data.description || 'Ошибка Telegram API' },
				{ status: res.status },
			)
		}

		return NextResponse.json({ ok: true })
	} catch (e) {
		console.error('send-to-telegram:', e)
		return NextResponse.json(
			{ error: 'Ошибка при отправке заявки' },
			{ status: 500 },
		)
	}
}
