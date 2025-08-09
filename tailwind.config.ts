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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'slide-up': 'slide-up 0.8s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'parallax-float': 'parallax-float 8s ease-in-out infinite',
				'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite'
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
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
					'50%': { transform: 'translateY(-20px) rotateX(5deg)' }
				},
				'pulse-glow': {
					'0%': { 
						boxShadow: '0 0 20px hsl(var(--accent) / 0.3)' 
					},
					'100%': { 
						boxShadow: '0 0 60px hsl(var(--accent) / 0.8), 0 0 100px hsl(var(--accent) / 0.4)' 
					}
				},
				'slide-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(60px) rotateX(15deg)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)' 
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.9) rotateY(-5deg)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)' 
					}
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
					'25%': { transform: 'rotateY(90deg) rotateX(5deg)' },
					'50%': { transform: 'rotateY(180deg) rotateX(0deg)' },
					'75%': { transform: 'rotateY(270deg) rotateX(-5deg)' },
					'100%': { transform: 'rotateY(360deg) rotateX(0deg)' }
				},
				'parallax-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotateZ(0deg)' 
					},
					'33%': { 
						transform: 'translateY(-10px) translateX(10px) rotateZ(1deg)' 
					},
					'66%': { 
						transform: 'translateY(5px) translateX(-5px) rotateZ(-1deg)' 
					}
				},
				'glass-shimmer': {
					'0%': { 
						background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.1) 0%, hsl(0 0% 100% / 0.05) 100%)'
					},
					'50%': { 
						background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.15) 0%, hsl(0 0% 100% / 0.08) 100%)'
					},
					'100%': { 
						background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.1) 0%, hsl(0 0% 100% / 0.05) 100%)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
