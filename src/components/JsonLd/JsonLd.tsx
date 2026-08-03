import {
	CONTACTS,
	MAIN_SITE_URL,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_TITLE,
	SITE_URL,
} from '@/src/lib/seo'

/**
 * Структурированные данные Schema.org (JSON-LD).
 *
 * Organization намеренно объявлена с @id основного домена: это одна и та же
 * компания на двух сайтах, и общий идентификатор помогает поисковику
 * склеить их в одну сущность, а не считать разными фирмами.
 */
const JsonLd = () => {
	const address = {
		'@type': 'PostalAddress',
		streetAddress: CONTACTS.street,
		addressLocality: CONTACTS.city,
		postalCode: CONTACTS.postalCode,
		addressCountry: CONTACTS.country,
	}

	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${MAIN_SITE_URL}/#organization`,
				name: SITE_NAME,
				alternateName: 'Fasady.kg',
				url: MAIN_SITE_URL,
				logo: {
					'@type': 'ImageObject',
					'@id': `${MAIN_SITE_URL}/#logo`,
					url: `${SITE_URL}/images/logo.svg`,
					caption: SITE_NAME,
				},
				image: { '@id': `${MAIN_SITE_URL}/#logo` },
				telephone: CONTACTS.phone,
				address,
				sameAs: [CONTACTS.whatsapp, CONTACTS.telegram, SITE_URL],
			},
			{
				'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
				'@id': `${SITE_URL}/#localbusiness`,
				name: SITE_NAME,
				url: SITE_URL,
				image: { '@id': `${MAIN_SITE_URL}/#logo` },
				description: SITE_DESCRIPTION,
				telephone: CONTACTS.phone,
				parentOrganization: { '@id': `${MAIN_SITE_URL}/#organization` },
				address,
				areaServed: [
					{ '@type': 'City', name: 'Бишкек' },
					{ '@type': 'Country', name: 'Кыргызстан' },
				],
				currenciesAccepted: 'KGS',
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Изготовление мебельных фасадов на заказ',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Product',
								name: 'Фасады МДФ',
								description: 'Фасады из МДФ с матовой эмалью.',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Product',
								name: 'Фрезерованные фасады любой сложности',
								description:
									'Фрезеровка фасадов из МДФ с матовой эмалью, включая сложные узоры.',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Product',
								name: 'Гладкие и классические фасады',
								description: 'Гладкие и классические фасады из МДФ.',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Product',
								name: 'Крашеные фасады',
								description: 'Покраска фасадов в мат, шелк и глянец.',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Product',
								name: 'Фасады нестандартных размеров и форм',
								description:
									'Изготовление фасадов по индивидуальным размерам и формам.',
							},
						},
					],
				},
			},
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				url: SITE_URL,
				name: SITE_TITLE,
				description: SITE_DESCRIPTION,
				publisher: { '@id': `${MAIN_SITE_URL}/#organization` },
				inLanguage: 'ru-RU',
			},
			{
				'@type': 'WebPage',
				'@id': `${SITE_URL}/#webpage`,
				url: SITE_URL,
				name: SITE_TITLE,
				description: SITE_DESCRIPTION,
				isPartOf: { '@id': `${SITE_URL}/#website` },
				about: { '@id': `${MAIN_SITE_URL}/#organization` },
				inLanguage: 'ru-RU',
			},
		],
	}

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	)
}

export default JsonLd
