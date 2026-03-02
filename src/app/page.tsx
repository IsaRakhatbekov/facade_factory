import Header from '../components/Header/Header'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Hero from '../components/sections/Hero/Hero'
import OurClients from '../components/sections/OurClients/OurClients'

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero />
				<AboutUs />
				<OurClients />
			</main>
		</div>
	)
}
