export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Zac Hartman - Full Stack Engineer",
	description: "Story",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Contact",
			href: "/contact",
		  },
    {
      label: "Projects",
      href: "/projects",
    },

    {
      label: "Skills",
      href: "/skills",
    }
	],
	navMenuItems: [
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Skills",
			href: "/skills",
		},

	],
	links: {
		github: "https://github.com/pnwdevzac/",
		email: "mailto:Zbh206@gmail.com",
	
		linkedin: "https://www.linkedin.com/in/zachary-hartman-a5550868/",

	},
};
