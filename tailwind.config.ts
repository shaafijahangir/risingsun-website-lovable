
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
				// Brand color palette using HSL tokens
				"thai-gold": 'hsl(var(--thai-gold))',
				"thai-blue": 'hsl(var(--thai-blue))', 
				"thai-teal": 'hsl(var(--thai-teal))',
				"thai-orange": 'hsl(var(--thai-orange))',
				"thai-cream": 'hsl(var(--thai-cream))',
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
			},
			fontFamily: {
				heading: ['Inter', 'sans-serif'],
				sans: ['Inter', 'Nunito Sans', 'sans-serif'],
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
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'stagger-fade': {
					'0%': { opacity: '0', transform: 'translateY(15px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 4px 12px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.16)' },
					'50%': { boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.20), 0 0 20px rgba(212, 175, 55, 0.3)' }
				},
				'magnetic': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.02)' },
					'100%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'stagger-fade': 'stagger-fade 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'magnetic': 'magnetic 0.3s ease-out forwards'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/placeholder.svg')",
				'sunrise-gradient': 'linear-gradient(135deg, #FFD700, #FFA07A)',
				'sky-gradient': 'linear-gradient(135deg, #87CEEB, #1E78C8)',
			},
			boxShadow: {
				'soft': '0 4px 12px rgba(0,0,0,0.05)',
				'glow': '0 0 15px rgba(212, 175, 55, 0.5)',
				'3d-sm': '0 2px 4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)',
				'3d-md': '0 4px 12px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.16)',
				'3d-lg': '0 8px 24px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.20)',
				'3d-xl': '0 16px 48px rgba(0,0,0,0.18), 0 8px 16px rgba(0,0,0,0.25)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
				'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.2)',
				'float': '0 12px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
