# Open-Book Site Redesign Design Document

**Date:** 2025-01-17
**Status:** Approved
**Stakeholder:** Open-Book Accounting and Financial Advisory

---

## Overview

Comprehensive redesign of the Open-Book corporate website based on stakeholder requirements and brand guidelines. The redesign introduces dedicated service pages, improved navigation structure, and migration from Framer Motion to Motion One for better performance.

**Key Goals:**
1. Create 4 dedicated SEO-friendly service pages (Contábil, Financeiro, Fiscal, Departamento Pessoal)
2. Reorganize navigation for better UX
3. Integrate Onvio client portal access prominently
4. Migrate animations to Motion One (from Framer Motion)
5. Align visual design with brand guidelines

---

## 1. Site Architecture & Navigation

### Primary Navigation (6 items)
- **Home** - Landing page with comprehensive overview
- **Serviços** - Hub page with 4 service cards linking to detail pages
- **Cursos** - Training programs page
- **Sobre** - About Open-book (mission, vision, values, partners)
- **Clientes** - Client showcase and industries served
- **Contato** - Contact form and information

### Secondary Pages (not in main nav)
- `/servicos/contabil` - Accounting services
- `/servicos/financeiro` - Financial BPO
- `/servicos/fiscal` - Tax compliance
- `/servicos/departamento-pessoal` - Payroll & HR
- `/tecnologias` - Tech stack and tools (linked from footer)

### Header Structure
- Logo on left (Open-book)
- Nav items center
- Right side: Language toggle (PT/EN) + "🔐 Acesso Onvio" button (distinct color)
- Onvio button: Dark green (#034633) background, white text

### Footer Links
- All main pages
- Tecnologias
- Privacy Policy, Terms (if needed)
- Social media links

---

## 2. Visual Design System

### Color Palette
| Name | Value | Usage |
|------|-------|-------|
| Primary Dark | `#034633` | Headers, footer, serious elements |
| Primary Gold | `#9F7423` | CTAs, highlights, accents |
| Background Light | `#F6F6F6` | Section backgrounds |
| Text Dark | `#1A1A1A` | Headings |
| Text Body | `#4A4A4A` | Body text |
| White | `#FFFFFF` | Cards, main content areas |

### Typography
- **Headings:** `Inter` or `Montserrat` (closest Google Fonts to Gilroy)
- **Body:** `Lato` or `Open Sans`

### Component Styling Patterns

**Cards:**
- White background
- Subtle shadow
- Gold border accent on hover
- Dark green text for headings

**Buttons (Primary):**
- Gold background with dark green text
- Rounded corners
- Slight lift on hover

**Buttons (Onvio):**
- Dark green background (#034633)
- White text
- Distinct from gold CTAs

**Section Headers:**
- Large dark green title
- Gold underline accent
- Centered

---

## 3. Motion & Animation System (Motion One)

### Principles (Apple HIG Aligned)
- **Easing:** `ease-out` for entering, `ease-in` for exiting
- **Duration:** 200-400ms for UI transitions
- **Scroll:** Fade in + slide up (16-24px) as elements enter viewport
- **Page Transitions:** Simple crossfade, 200ms
- **Hover States:** Subtle scale (1.02-1.05), 150ms ease-out
- **Button Presses:** Immediate scale to 0.98, 100ms
- **Reduce Motion:** Check `prefers-reduced-motion` preference

### Migration: Framer Motion → Motion One

```bash
npm uninstall framer-motion
npm install motion
npm install motion-plus  # Paid features
```

**Import Pattern:**
```tsx
import { motion, useScroll, useInView } from "motion/react"
```

**Scroll Animation Pattern:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
/>
```

**Benefits:** ~30% smaller bundle, better performance, access to Motion+ features

---

## 4. Home Page Structure

### Hero Section
- Headline: "Transparência que impulsiona resultados"
- Subheadline: Strategic partnership message
- Primary CTA: "Fale com um especialista" (gold button) → Contact
- Secondary CTA: "Saiba mais" → Services hub
- Onvio button in header (not hero)

### Services Section ("Nossos Serviços")
- 4 cards in grid (2x2 desktop, 1x1 mobile):
  - 🧾 Contábil
  - 💰 Financeiro
  - 📑 Fiscal
  - 👥 Departamento Pessoal
- Each card: Icon, title, 2-line description, "Saiba mais →"
- Staggered entrance animation

### About Teaser Section
- "Sobre a Open-book" heading
- 3 key values: Transparência | Ética | Compromisso
- Brief mission statement
- CTA: "Conheça nossa história →"

### Technologies Preview
- Tool names: Onvio, Domínio, Jetax, Econet
- Brief description
- Link to full Tecnologias page

### Clients Snapshot
- "Nossos Clientes" heading
- Industry badges or client logos
- Diversified sectors message
- Link to full Clientes page

### Training Section
- "Cursos & Treinamentos" heading
- 4-6 training topic cards
- "Sob medida para sua empresa" messaging
- CTA button

### Final CTA Section
- Dark green background (#034633)
- "Pronto para transformar sua gestão?"
- Two buttons: "Fale com especialista" | "Envie sua pergunta"
- Contact info visible

---

## 5. Service Pages Design

### Template Structure (Each Service Page)

**Header/Hero:**
- Service icon + title
- Tagline from stakeholder content
- Brief intro paragraph
- Background: Subtle gradient or off-white with gold accent

**Services List Section:**
- "O que fazemos" heading
- List of specific services with checkmarks
- Each item gets subtle entrance animation

**Why This Matters Section:**
- "Por que escolher" heading
- 3-4 benefit cards:
  - Compliance e segurança
  - Relatórios estratégicos
  - Atendimento personalizado
  - Expertise internacional

**CTA Section:**
- "Fale com nossos especialistas"
- Contact info
- Onvio access reminder

**Cross-linking:** At bottom, link to other related services

### Service-Specific Content

**Contábil (/servicos/contabil):**
- Escrituração contábil completa
- Balancetes mensais e demonstrações de resultado
- Balanço Patrimonial e demonstrações obrigatórias
- Reconciliações contábeis periódicas
- Relatórios gerenciais e análises estratégicas
- Reporte contábil internacional

**Financeiro (/servicos/financeiro):**
- Contas a pagar e a receber
- Conciliação bancária
- Fluxo de caixa e planejamento financeiro
- Relatórios financeiros gerenciais
- Operações de câmbio e suporte a transações internacionais

**Fiscal (/servicos/fiscal):**
- Apuração de tributos federais, estaduais e municipais
- Obrigações acessórias eletrônicas
- Escrituração e controle de notas fiscais
- Tratamento de retenções tributárias
- Atendimento a fiscalizações
- ECD, DEFIS e demais declarações obrigatórias

**Departamento Pessoal (/servicos/departamento-pessoal):**
- Folha de pagamento e encargos sociais
- Admissões, demissões e férias
- Pró-labore e distribuição de lucros
- eSocial, RAIS, FGTS e CAGED
- Atualização contínua da legislação trabalhista

---

## 6. Components & Interactions

### New Components

**ServiceCard:**
- Props: `icon`, `title`, `description`, `link`
- Hover: Scale 1.02, shadow increase, gold border
- Motion `layout` prop for smooth changes

**OnvioButton:**
- Dark green styling (#034633)
- Icon: 🔐 lock icon
- Text: "Acesso Onvio" / "Onvio Access"
- External link: `https://onvio.com.br/login/#/`
- Always visible in header

**AnimatedSection:**
- Wraps any section content
- Applies scroll-triggered fade-in + slide-up
- Props: `delay`, `children`

**Accordion (optional for FAQ):**
- Motion's native accordion with `layout` prop
- Smooth height animation
- Keyboard accessible

### Enhanced Components

**SectionTitle:**
- Large dark green text
- Gold underline bar (animated: grows from center on scroll)
- Optional subtitle

**LanguageToggle:**
- PT/EN switch with smooth transition
- Persist in localStorage

**ContactForm:**
- Fields: Name, Email, Phone, Company, Message
- Validation on blur with subtle shake animation
- Success state: Green checkmark animation
- Consider Supabase integration

### Mobile Considerations
- Header: Hamburger menu with full-screen overlay
- Service cards: Single column mobile, 2x2 tablet
- Touch targets: Minimum 44x44px
- Swipeable card galleries for testimonials (if added)

---

## 7. Technical Implementation

### Package Changes
```bash
npm uninstall framer-motion
npm install motion
npm install motion-plus
```

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Add Onvio button
│   │   ├── Footer.tsx          # Update links
│   │   └── Navigation.tsx      # Extract nav logic
│   ├── ui/
│   │   ├── AnimatedCard.tsx    # Convert to Motion
│   │   ├── SectionTitle.tsx    # Add underline animation
│   │   ├── ServiceCard.tsx     # New
│   │   ├── OnvioButton.tsx     # New
│   │   ├── AnimatedSection.tsx # New wrapper
│   │   └── Accordion.tsx       # New (optional)
│   └── seo/
│       └── SEO.tsx             # Update meta tags
├── pages/
│   ├── Home.tsx                # Restructure
│   ├── Services.tsx            # Convert to hub
│   ├── About.tsx               # Keep
│   ├── Clients.tsx             # Keep
│   ├── Contact.tsx             # Update
│   ├── Technologies.tsx        # Keep
│   ├── Training.tsx            # New
│   └── services/               # New directory
│       ├── Accounting.tsx
│       ├── Financial.tsx
│       ├── Tax.tsx
│       └── Payroll.tsx
├── i18n/
│   ├── pt.json                 # Add new keys
│   └── en.json                 # Add new keys
└── utils/
    └── motion.ts               # Shared animation configs
```

### Route Updates (App.tsx)
```tsx
<Route path="/" element={<Home />} />
<Route path="/servicos" element={<Services />} />
<Route path="/servicos/contabil" element={<Accounting />} />
<Route path="/servicos/financeiro" element={<Financial />} />
<Route path="/servicos/fiscal" element={<Tax />} />
<Route path="/servicos/departamento-pessoal" element={<Payroll />} />
<Route path="/cursos" element={<Training />} />
<Route path="/sobre" element={<About />} />
<Route path="/clientes" element={<Clients />} />
<Route path="/tecnologias" element={<Technologies />} />
<Route path="/contato" element={<Contact />} />
```

### Animation Config (utils/motion.ts)
```tsx
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
}

export const staggerContainer = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
}
```

### Performance Considerations
- Lazy load route components with `React.lazy()`
- Motion's `whileInView` is more performant than scroll event listeners
- Image optimization for service icons/client logos

---

## 8. i18n Key Structure

### New Namespaces to Add

**services.accounting, services.financial, services.tax, services.payroll:**
- `title`, `tagline`, `description`
- `services.list[]` - array of service items
- `benefits.list[]` - array of benefits

**training:**
- `title`, `subtitle`, `description`
- `topics.list[]` - training areas
- `cta`

**onvio:**
- `buttonText`, `buttonLabel`
- `alreadyClient` - "Já é cliente? Acesse o Onvio"

---

## 9. Brand Alignment

This design aligns with Open-Book's brand identity:
- **Strategic Partnership** messaging throughout
- **Transparency** as core value (primary color, messaging)
- **International Expertise** highlighted in service content
- **Human-Centered** approach in tone and imagery
- **Professional Yet Warm** aesthetic (dark green + gold)

---

## Next Steps

1. Install Motion One packages
2. Create new component files
3. Update routing structure
4. Add i18n translation keys
5. Implement service pages with shared template
6. Reorganize home page sections
7. Update header with Onvio button
8. Test animations and interactions
9. Mobile responsive testing
10. SEO optimization for new pages

---

**Stakeholder approval:** Received 2025-01-17
**Design by:** Claude Code with stakeholder collaboration
