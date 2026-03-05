const FORM_SECTION_ID = 'form'

export function scrollToForm() {
	const el = document.getElementById(FORM_SECTION_ID)
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}
