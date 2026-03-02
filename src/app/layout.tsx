import localFont from 'next/font/local'

import { Manrope } from 'next/font/google'
import '../styles/global.scss'
import '../styles/reset.scss'

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-manrope',
})

const benzin = localFont({
	src: [
		{
			path: '../../public/fonts/Benzin-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Benzin-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Benzin-Semibold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/benzin-bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-benzin',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${manrope.variable} ${benzin.variable}`}>
				{children}
			</body>
		</html>
	)
}
