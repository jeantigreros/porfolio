/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Sora Variable"', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				gradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "100% 50%" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				gradient: "gradient 4s linear infinite",
				gradient2: "gradient 2s linear infinite",
				"fade-in": "fade-in 0.6s ease-out",
			},
		},
	},
	plugins: [],
};
