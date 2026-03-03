import Header from '../components/Header/Header'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Hero from '../components/sections/Hero/Hero'
import OurClients from '../components/sections/OurClients/OurClients'
import Production from '../components/sections/Production/Production'
import ReadyProjects from '../components/sections/ReadyProjects/ReadyProjects'
import WorkProcess from '../components/sections/WorkProcess /WorkProcess'

export default function Home() {
	return (
		<div className='page-layout'>
			<Header />
			<main>
				<Hero />
				<AboutUs />
				<OurClients />
				<Production />
				<WorkProcess />
				{/* <WhyWe /> */}
				<ReadyProjects />
				{/* <SpecialConditions /> */}
				{/* <Form /> */}
			</main>
			{/* <Footer /> */}
		</div>
	)
}
