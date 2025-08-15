# Product Requirements Document: Rolas Najera Personal Website (V1)

1. Project Overview

Purpose: Launch a personal website that positions Rolas Najera as an expert in fintech, software, and personal finance education.
Goal: Deliver a first version quickly, emphasizing clarity, professionalism, and SEO optimization.
Target Audience: Professionals, tech-savvy users, and individuals interested in personal finance and investing.
Tone & Style: Clear, approachable, realistic, and practical. Similar to Humphrey Talks and Your Rich BFF.


2. Tech Stack
	•	Astro: https://astro.build
	•	TailwindCSS: https://tailwindcss.com
	•	Node v22: https://nodejs.org/en
	•	Vercel (deployment): https://vercel.com
	•	NPM: https://www.npmjs.com
	•	Vite: https://docs.astro.build/en/recipes/add-yaml-support/

LLM Instructions: Generate code compatible with this stack. Use Astro pages and components, styled with TailwindCSS. Ensure responsive layout.
⸻

3. Site Structure & Content

3.1 Hero Section

Content:
	•	Name & Title: Rolas Najera – Educación financiera realista, para personas reales
	•	Tagline / Phrase:
Aprende a tomar el control de tu dinero y liberarte de deudas.
Construye una libertad financiera alcanzable, sin fórmulas mágicas ni promesas vacías.
	•	CTA Button: Comienza aquí → linking to Substack
	•	Hero Image: Professional headshot or abstract finance/tech graphic

Expected Output:
	•	Astro component with Hero text, button, and image
	•	Tailwind classes for layout (centered, mobile-friendly)


3.2 About Section

Content:
	•	Professional Background: Antiguo ingeniero de software especializado en banca digital, neobancos y fintechs. Combina experiencia tecnológica con finanzas personales e inversión.
	•	Motivation / Origin Story: Tras trabajar en bancos y fintechs, entendió que la educación financiera era limitada; este proyecto nace para ofrecer educación práctica y realista.
	•	Achievements / Reach: Proyecto en etapa inicial; experiencia técnica y financiera proporciona autoridad y perspectiva única.

Expected Output:
	•	Astro component with three sub-sections
	•	Short paragraphs (<3 lines each)
	•	Optional icons or visual accents for each point


3.3 Newsletter Section

Content:
	•	Title: Suscríbete y empieza tu camino hacia la libertad financiera
	•	Text: Recibe cada semana consejos prácticos de finanzas, inversión y tecnología financiera directamente en tu bandeja de entrada.
	•	Embed: Substack iframe

Expected Output:
	•	Astro component embedding Substack
	•	CTA styled as Tailwind button
	•	Responsive design


3.4 Contact & Social Section

Content:
	•	Email: info@rolasnajera.com
	•	Social Links: Instagram, Substack, LinkedIn

Expected Output:
	•	Astro component with clickable social icons
	•	Tailwind layout for desktop and mobile


3.5 SEO Section

Primary Keywords:
	•	educación financiera realista
	•	finanzas personales para profesionales
	•	inversión para principiantes
	•	libertad financiera sin fórmulas mágicas
	•	consejos financieros prácticos
	•	tecnología financiera (fintech)

Secondary / Long-tail Keywords:
	•	cómo salir de deudas rápido
	•	mejores hábitos financieros para programadores / profesionales tech
	•	invertir en fondos indexados desde España
	•	estrategias de ahorro para profesionales con altos ingresos
	•	herramientas tecnológicas para manejar tus finanzas
	•	errores comunes al invertir
	•	planificación financiera personal paso a paso

Expected Output:
	•	Meta title & description for homepage
	•	H1/H2/H3 headings using keywords
	•	Image alt text optimized for keywords
	•	Internal linking structure suggestion

Use these as examples for design, content structure, and tone:
	1.	Will Ericksson – Clean, minimal, professional layout with strong personal branding (https://willericksson.com)
	2.	Humphrey Talks – Informal, approachable tone; integrates blog, resources, and newsletter prominently (https://www.humphreytalks.com)
	3.	Your Rich BFF (Vivian Tu) – Combines storytelling, media, and financial advice; visually engaging with strong CTA (https://www.yourrichbff.com)
	4.	Tyler Gardner – Modern personal branding with portfolio-style presentation (https://www.tylergardner.com)

4. LLM-Specific Instructions
	1.	Generate Astro + Tailwind components for each section.
	2.	Ensure mobile-first responsive design.
	3.	Include SEO metadata (title, description, alt tags) for all pages.
	4.	Follow existing content; keep tone friendly and approachable.
	5.	Provide ready-to-deploy folder structure compatible with Astro + Vercel.
	6.	Output code and content in copy-paste ready format, with comments where customization is possible.

