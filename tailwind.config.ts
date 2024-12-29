import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary : {
				DEFAULT: "hsl(var(--color-primary-100))",
				100 : 'hsl(var(--color-primary-100))',
				80 : 'hsl(var(--color-primary-80))',
				foreground: 'hsl(var(--color-white-100))'
				// foreground: 'hsl(var(--popover-foreground))'
				
			},
			secondary: {
				DEFAULT: "hsl(var(--color-secondary-100))",
				100 : 'hsl(var(--color-secondary-100))',
				foreground: 'hsl(var(--color-white-100))'
				
				// foreground: 'hsl(var(--secondary-foreground))'
				
			},
			white : {
				100 : 'hsl(var(--color-white-100))',
				80 : 'hsl(var(--color-white-80))',
			},
			black : {
				100 : 'hsl(var(--color-black-100))',
				80 : 'hsl(var(--color-black-80))',
			},
			'neutral-light' : {
				100 : 'hsl(var(--color-neutral-light-100))',
				80 : 'hsl(var(--color-neutral-light-80))',
				60 : 'hsl(var(--color-neutral-light-60))',
			},
			'neutral-dark' : {
				100 : 'hsl(var(--color-neutral-dark-100))',
				80 : 'hsl(var(--color-neutral-dark-80))',
				60 : 'hsl(var(--color-neutral-dark-60))',
				40 : 'hsl(var(--color-neutral-dark-40))',
			},  
			  
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',	
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		fontSize : {
			title : '48px',
			subtitle : '32px',
			lead : '18px',
			base : '16px',
			small : '12px',
		},
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// }
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
