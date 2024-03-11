'use cleint';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BlogPage from '../app/blog/page';

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
				I am passionate about employing the latest technologies to address real-world challenges, believing firmly in the capacity of well-crafted software to improve lives and foster progress. My coding philosophy centers on clarity and precision, ensuring that each project I undertake is not just a testament to technical prowess but also a step towards a better future for all.
				</h2>
			</div>
		
		</section>
	);
	
}


export default function Page() {
  return (
    <>
      <Home />
	  <BlogPage/>
	
    </>
  );
}
