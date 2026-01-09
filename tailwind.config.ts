import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Update this section in tailwind.config.ts
fontFamily: {
  display: ['MyCustomFont', 'Cinzel', 'serif'], // Add your font name here
  heading: ['Playfair Display', 'serif'],
  body: ['Raleway', 'sans-serif'],
},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Extended Space Theme Colors
				'cosmic-gold': 'hsl(var(--cosmic-gold))',
				'cosmic-gold-glow': 'hsl(var(--cosmic-gold-glow))',
				'nebula-purple': 'hsl(var(--nebula-purple))',
				'nebula-purple-dark': 'hsl(var(--nebula-purple-dark))',
				'nebula-pink': 'hsl(var(--nebula-pink))',
				'nebula-pink-glow': 'hsl(var(--nebula-pink-glow))',
				'cosmic-blue': 'hsl(var(--cosmic-blue))',
				'cosmic-blue-glow': 'hsl(var(--cosmic-blue-glow))',
				'star-white': 'hsl(var(--star-white))',
				'deep-space': 'hsl(var(--deep-space))',
				'void-black': 'hsl(var(--void-black))',
				'stardust': 'hsl(var(--stardust))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'twinkle': 'twinkle 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(180deg, hsl(240 30% 3%) 0%, hsl(260 40% 8%) 50%, hsl(280 35% 12%) 100%)',
				'gold-gradient': 'linear-gradient(90deg, #e6ab26 0% 60%, #91611f 60% 100%)',
				'nebula-gradient': 'linear-gradient(135deg, hsl(270 60% 50%) 0%, hsl(320 80% 55%) 100%)',
				'cosmic-gradient': 'linear-gradient(135deg, hsl(220 80% 50%) 0%, hsl(270 60% 50%) 50%, hsl(320 80% 55%) 100%)',
			},
			boxShadow: {
				'glow-gold': '0 0 40px hsla(35, 100%, 55%, 0.4)',
				'glow-nebula': '0 0 30px hsla(270, 60%, 50%, 0.4)',
				'glow-pink': '0 0 25px hsla(320, 80%, 55%, 0.35)',
				'glow-cosmic': '0 0 50px hsla(270, 60%, 50%, 0.3), 0 0 100px hsla(320, 80%, 55%, 0.2)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;