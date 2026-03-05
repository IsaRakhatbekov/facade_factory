import { NextRequest, NextResponse } from 'next/server'

/** Webhook для Telegram (кнопка «Скопировать всё» убрана — просто отвечаем ok при любом запросе). */
export async function POST(request: NextRequest) {
	return NextResponse.json({ ok: true })
}
