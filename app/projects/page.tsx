import { title } from "@/components/primitives";

export default function ProjectsPage() {
  const portfolioItems = [
    { imgSrc: "/hoot.png", altText: "Hoot", itemTitle: "Project 1", link: "https://hootnhollerfest.com/" },
    { imgSrc: "/dash.png", altText: "Dash", itemTitle: "Project 2", link: "https://admindashapp.netlify.app/" },
    { imgSrc: "/eat.png", altText: "Eat", itemTitle: "Project 3", link: "https://pnwdeveats.netlify.app/" },
    { imgSrc: "/gym.png", altText: "Gym", itemTitle: "Project 4", link: "https://pnwgym.netlify.app/" },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-4xl font-bold my-8">
        <span className={title({ color: "cyan" })}>Pro</span>
        <span className={title({ color: "violet" })}>jects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {portfolioItems.map((item, index) => (
  <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <img src={item.imgSrc} alt={item.altText} className="w-full h-64 object-cover" />
    </a>
    <div className="p-4">
      <h3 className={title({ color: index % 2 === 0 ? "cyan" : "violet" }) + " text-xl font-semibold mb-2"}>{item.itemTitle}</h3>
      <p><a href={item.link} target="_blank" rel="noopener noreferrer" className={index % 2 === 0 ? "text-violet-500 hover:underline sm:text-lg md:text-xl" : "text-cyan-500 hover:underline sm:text-lg md:text-xl"}>{item.link}</a></p>
    </div>
  </div>
))}

      </div>
    </div>
  );
}
