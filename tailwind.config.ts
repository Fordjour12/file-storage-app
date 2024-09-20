import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontSize: {
				sm: "clamp(0.8rem, 0.16vi + 0.76rem, 0.89rem)",
				base: "clamp(1rem, 0.33vi + 0.93rem, 1.19rem)",
				lg: "clamp(1.25rem, 0.58vi + 1.12rem, 1.58rem)",
				xl: "clamp(1.56rem, 0.95vi + 1.35rem, 2.11rem)",
				"2xl": "clamp(1.95rem, 1.49vi + 1.62rem, 2.81rem)",
				"3xl": "clamp(2.44rem, 2.27vi + 1.93rem, 3.75rem)",
				"4xl": "clamp(3.05rem, 3.38vi + 2.29rem, 5rem)",
				"5xl": "clamp(3.81rem, 4.95vi + 2.7rem, 6.66rem)",
				"6xl": "clamp(4.77rem, 7.15vi + 3.16rem, 8.88rem)",
				"7xl": "clamp(5.96rem, 10.22vi + 3.66rem, 11.84rem)",
				"8xl": "clamp(7.45rem, 14.49vi + 4.19rem, 15.78rem)",
				"9xl": "clamp(9.31rem, 20.39vi + 4.73rem, 21.03rem)",
				"10xl": "clamp(11.64rem, 28.52vi + 5.23rem, 28.04rem)",
				"11xl": "clamp(14.55rem, 39.69vi + 5.62rem, 37.38rem)",
				"12xl": "clamp(18.19rem, 55.01vi + 5.81rem, 49.82rem)",
				"13xl": "clamp(22.74rem, 75.96vi + 5.65rem, 66.41rem)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

				// Custom colors
				"app-100": "hsl(var(--app-100))",
				"app-200": "hsl(var(--app-200))",
				"app-300": "hsl(var(--app-300))",
				"app-400": "hsl(var(--app-400))",
				"app-500": "hsl(var(--app-500))",
				"app-600": "hsl(var(--app-600))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				shimmer: {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				shimmer: "shimmer 8s infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
