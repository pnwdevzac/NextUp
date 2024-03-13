'use client';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HistoryPage from '../app/history/page';

 	function Home() {
		return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xxl text-center justify-center">
				<h1 className={title({ color: "cyan" })}>Zac Hartman&nbsp;</h1><br></br>
				<h1 className={title({ color: "violet" })}>Full Stack Software Engineer&nbsp;</h1>
				<br />

				<h2 className={subtitle({ class: "mt-4" })}>
				As a Software Engineer with a robust five-year tenure in the industry, I am deeply invested in the transformative potential of technology. My professional path has been marked by a commitment to leveraging cutting-edge tools and microservices to create web applications and backend systems that not only drive innovation but also contribute positively to our world.<br></br><br></br>
				With a solid foundation in both academic study and two years of industry experience, complemented by a year of self-directed learning, my journey is a testament to the power of continuous growth and adaptation in the ever-evolving tech landscape.<br></br><br></br>
				I am passionate about employing the latest technologies to address real-world challenges, believing firmly in the capacity of well-crafted software to improve lives and foster progress. My coding philosophy centers on clarity and precision, ensuring that each project I undertake is not just a testament to technical prowess but also a step towards a better future for all. <br></br><br></br>
				When I’m not debugging the complexities of code, you’ll find me unplugged, recharging amidst family, friends, and the joyful company of dogs. Whether it’s a hike through nature’s splendor or a casual backyard BBQ, these moments are my sanctuary. They remind me that life, much like coding, is best enjoyed with a touch of humor and the companionship of those who make your tail wag.<br></br><br></br>
				The algorithm below is designed to calculate the operation time and the duration of a progress bar animation based on the speed of a processor. The operation time is calculated by dividing the number of operations (set to one billion) by the speed of the processor in Hertz. The speed is converted to Hertz from KHz, MHz, or GHz based on the unit provided. If no unit is provided, it is assumed to be MHz. The duration of the progress bar animation is calculated differently. If the speed is not available, a default duration of 3 seconds is used. If the speed is available, it is converted to MHz from KHz or GHz, and then used to calculate the duration. The duration is calculated as the ratio of a baseline speed (set to 10 MHz, representing the speed from the 1970s) to the relative speed of the processor, multiplied by a base duration of 15 seconds. This approach allows the algorithm to adapt to different processor speeds and provide a visual representation of the operation time through the progress bar animation. 
				
				</h2>
			</div>
		
		</section>
	);
	
}


export default function Page() {
  return (
    <>
      <Home />
	  <HistoryPage />	
	 
	
    </>
  );
}
