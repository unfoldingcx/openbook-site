# Open-Book — Contabilidade e Assessoria Financeira

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://app.netlify.com)
[![License](https://img.shields.io/badge/licença-privado-red)](#)

> Site institucional da **Open-Book Contabilidade e Assessoria Financeira**, escritório de contabilidade localizado em São Paulo, Brasil. Bilíngue (Português/Inglês), com foco em performance, SEO e acessibilidade.

<p align="center">
  <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Open-Book Preview" width="600" />
</p>

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Internacionalização (i18n)](#internacionalização-i18n)
- [Design System](#design-system)
- [Animações](#animações)
- [SEO](#seo)
- [Deploy](#deploy)
- [Rotas](#rotas)

---

## Visão Geral

O site apresenta os serviços de contabilidade, assessoria financeira, departamento fiscal, departamento pessoal e treinamentos oferecidos pela Open-Book. Foi desenvolvido como uma Single Page Application (SPA) com carregamento lazy de páginas, animações fluidas e suporte completo a dois idiomas.

---

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev) | 18 | Biblioteca de interfaces |
| [TypeScript](https://www.typescriptlang.org) | 5.9 | Tipagem estática |
| [Vite](https://vitejs.dev) | 5 | Bundler e dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utilitários CSS |
| [Motion](https://motion.dev) | 12 | Animações declarativas (ex-Framer Motion) |
| [React Router](https://reactrouter.com) | 7 | Roteamento SPA |
| [i18next](https://www.i18next.com) | 25 | Internacionalização |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | 2 | Meta tags dinâmicas para SEO |
| [Lucide React](https://lucide.dev) | 0.344 | Biblioteca de ícones |

---

## Pré-requisitos

- **Node.js** >= 18
- **npm** >= 9 (ou **bun** como alternativa)

---

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/openbook.git
cd openbook

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor será iniciado em `http://localhost:5173`.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run typecheck` | Verifica tipos TypeScript (sem emitir arquivos) |

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── layout/           # Header, Footer, Layout (shell da aplicação)
│   ├── seo/              # Componente SEO com react-helmet-async
│   └── ui/               # Componentes reutilizáveis (AnimatedCard, SectionTitle, etc.)
├── i18n/                 # Configuração i18next e arquivos de tradução (pt.json, en.json)
├── pages/                # Componentes de página (lazy-loaded)
│   └── services/         # Sub-páginas de serviços específicos
├── utils/                # Utilitários (presets de animação)
├── App.tsx               # Definição de rotas e AnimatePresence
├── main.tsx              # Ponto de entrada (StrictMode + HelmetProvider)
└── index.css             # Estilos base, componentes e utilitários Tailwind
```

---

## Internacionalização (i18n)

O site é bilíngue com suporte a **Português (BR)** e **Inglês**.

- **Idioma padrão**: Português (`pt`)
- **Arquivos de tradução**: `src/i18n/pt.json` e `src/i18n/en.json`
- **Persistência**: a preferência de idioma é salva no `localStorage` sob a chave `language`
- **Troca de idioma**: disponível no header via botões PT/EN

### Adicionando novas traduções

Ao adicionar qualquer texto visível ao usuário, adicione a chave correspondente em **ambos** os arquivos de tradução. As chaves são organizadas por funcionalidade (ex: `nav.*`, `hero.*`, `features.*`, `seo.*`).

```typescript
// Uso em componentes
const { t } = useTranslation();
<h1>{t("hero.title")}</h1>
```

---

## Design System

### Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Background | `#010101` | Fundo principal (tema escuro) |
| Ouro escuro | `#9f7423` | Cor de destaque principal |
| Ouro claro | `#d4a84b` | Gradiente e hover |
| Texto | `#ffffff` com opacidade | Texto sobre fundo escuro |

### Tipografia

- **Fonte**: Inter (Google Fonts), pesos 300–700
- Carregada via `@import` no `src/index.css`

### Classes Utilitárias Customizadas

| Classe | Descrição |
|---|---|
| `.text-gradient` | Gradiente dourado em texto |
| `.btn-primary` | Botão principal (dourado, arredondado) |
| `.btn-secondary` | Botão secundário (borda, transparente) |
| `.card-glass` | Cartão com efeito glassmorphism |
| `.section-padding` | Padding padrão de seção |
| `.content-auto` | `content-visibility: auto` para performance |

---

## Animações

As animações utilizam a biblioteca **Motion** (importada de `motion/react`).

### Presets compartilhados

Presets reutilizáveis estão definidos em `src/utils/motion.ts`:

- `fadeInUp` / `fadeIn` — entrada com fade
- `scaleIn` — entrada com escala
- `pageTransition` — transição entre páginas
- `hoverScale` / `buttonPress` — feedback de interação
- `prefersReducedMotion()` — verifica preferência de acessibilidade

### Componentes de animação

- **`AnimatedSection`** — wrapper de seção com fade-in, respeita `prefers-reduced-motion`
- **`AnimatedCard`** — cartão com animação de entrada e hover

### Padrão de uso

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
>
  {/* conteúdo */}
</motion.div>
```

---

## SEO

Cada página inclui o componente `<SEO>` que gerencia meta tags via `react-helmet-async`:

```tsx
<SEO page="home" path="/" />
```

O componente gera automaticamente:
- `<title>` e `<meta description>`
- Tags Open Graph (Facebook)
- Tags Twitter Card
- Link canônico
- Atributo `lang` no `<html>`
- Locales alternativas (pt_BR / en_US)

As traduções de SEO seguem o padrão `seo.<página>.title` e `seo.<página>.description`.

---

## Deploy

O projeto está configurado para deploy no **Netlify**.

### Configuração (`netlify.toml`)

```toml
[build]
command = "bun run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

O redirect catch-all garante que o roteamento client-side funcione corretamente.

### Deploy manual

```bash
npm run build
# O diretório dist/ contém os arquivos estáticos prontos para deploy
```

---

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Página inicial com hero, features e CTA |
| `/about` | Sobre | História e informações da empresa |
| `/services` | Serviços | Visão geral dos serviços |
| `/services/accounting` | Contabilidade | Detalhes do serviço de contabilidade |
| `/services/financial` | Financeiro | Detalhes da assessoria financeira |
| `/services/tax` | Fiscal | Detalhes do departamento fiscal |
| `/services/payroll` | Pessoal | Detalhes do departamento pessoal |
| `/training` | Treinamentos | Cursos e capacitações |
| `/technologies` | Tecnologias | Stack tecnológica utilizada |
| `/clients` | Clientes | Portfólio de clientes |
| `/contact` | Contato | Informações de contato |

---

<p align="center">
  <sub>Desenvolvido com ☕ por Open-Book Contabilidade e Assessoria Financeira</sub>
</p>
