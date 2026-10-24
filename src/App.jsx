import React from 'react'
import Header from './componates/Header'
import Section1 from './componates/SectionOne'
import SectionOne from './componates/SectionOne'
import Sectiontwo from './componates/Sectiontwo'
import SectionThree from './componates/SectionThree'
import SectionFour from './componates/SectionFour'
import SectionFive from './componates/SectionFive'
import Fotterr from './componates/Fotterr'

export default function App() {
  return (
	<div className="w-full h-dvh overflow-auto font-jsans" data-them="light">
	<Header />
	<SectionOne/>
	<Sectiontwo/>
	<SectionThree/>
	<SectionFour/>
	<SectionFive/>
	<Fotterr/>
	
	</div>
  );
}
