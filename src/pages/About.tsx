import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Eye,
  Target,
  Heart,
  Briefcase,
  Users2,
  CheckCircle2,
  Quote,
  Laptop,
  Home as HomeIcon,
} from "lucide-react";
import AnimatedCard from "../components/ui/AnimatedCard";
import SEO from "../components/seo/SEO";

export default function About() {
  const { t } = useTranslation();

  const values = t("about.values.items", { returnObjects: true }) as Array<{
    title: string;
    value: string;
  }>;
  const lilianeFullText = `Perfil profissional
Liliane Cristina Segura é profissional da área contábil e financeira, com sólida atuação em finanças corporativas, contabilidade corporativa, governança, e consultoria empresarial. É sócia-diretora da Open-Book Assessoria Contábil e Financeira e da LL Segura Cursos Técnicos e Gerenciais, com atuação especializada nas áreas contábil e financeira. Também atua como professora pesquisadora na Universidade Presbiteriana Mackenzie, com atividades de ensino e pesquisa nos níveis de graduação, mestrado e doutorado.
Possui trajetória que combina experiência executiva, consultoria e pesquisa aplicada. Possui atuação em projetos nacionais e internacionais, participação em programas de MBA e cursos in company, além de experiência profissional relevante nas áreas financeira e contábil, especialmente em empresas do varejo.
Formação acadêmica
Liliane é doutora em Administração de Empresas pela Universidade Presbiteriana Mackenzie, mestre em Administração pela FEA-USP e bacharel em Ciências Contábeis pela FEA-USP. Realizou pós-doutorado em Administração na Universidad de Salamanca, na Espanha, e possui formação internacional em plano de negócios para empreendedores pela California State University, Fresno, nos Estados Unidos.
Também possui certificação internacional em IFRS — International Financial Reporting Standards, concedida pela International Association of Certified Accountants and Financial Managers — IACAFM.
Experiência profissional e acadêmica
Na Open-Book, Liliane atua com consultoria contábil e financeira, apoio à gestão empresarial, estruturação de informações contábeis e financeiras e suporte estratégico para empresas. Possui experiência de 30 anos no mercado.
Na área acadêmica, atua como professora pesquisadora da Universidade Presbiteriana Mackenzie em cursos de graduação, mestrado profissional e doutorado profissional.
Além da atuação no Brasil, possui experiência internacional como professora visitante na London Metropolitan University, no Reino Unido, e no Instituto Politécnico da Guarda, em Portugal.
Áreas de especialização
• Contabilidade corporativa e financeira.
• Finanças corporativas.
• Governança corporativa.
• Responsabilidade social corporativa.
• IFRS e normas internacionais de contabilidade.
• Planejamento financeiro e gestão empresarial.
• Empresas familiares, estrutura de capital e endividamento.
• Consultoria contábil e financeira para empresas.
Essas áreas estão alinhadas às linhas de pesquisa e atuação profissional, especialmente governança corporativa, responsabilidade social corporativa, finanças corporativas e contabilidade corporativa.
Livros e Artigos publicados:
Título
Autores
Link para acesso
Carbon emission reduction: The impact on the financial and operational performance of international companies
I Gallego-Álvarez, L Segura, J Martínez-Ferrero
Acessar
Board of directors characteristics and disclosure practices of corporate social responsibility: a comparative study between Brazilian and Spanish companies
H Formigoni, L Segura, I Gallego-Álvarez
Acessar
The voluntary disclosure of sustainable information: a comparative analysis of spanish and brazilian companies
MCP Grecco, MAF Milani, LC Segura, IMG Sanchez, LR Dominguez
Acessar
Influência do controle e da gestão familiar no endividamento das empresas abertas Brasileiras: um estudo quantitativo
LC Segura, H Formigoni
Acessar
Percepção dos profissionais brasileiros com relação ao processo de convergência contábil às normas internacionais
MCP Grecco, H Formigoni, CMS Geron, LC Segura
Acessar
Um estudo sobre a relação entre adesão das companhias abertas ao Refis eo seu capital de giro líquido
LC Segura, H Formigoni, MCP Grecco
Acessar
ESG dimensions and corporate value: insights for sustainable investments
LC Segura, A Naser, R Abreu, JA Perez-Lopez
Acessar
Um estudo sobre a pesquisa em custos no Brasil
ÉL Riccio, LC Segura, MCG Sakata
Acessar
E-banking services: Why fraud is important
R Abreu, F David, L Segura
Acessar
Ethics and fraud in E-banking services
R Abreu, F David, M Legčevič, L Segura, H Formigoni, F Mantovani
Acessar
Influence of control and family management in the indebtedness of Brazilian open business: A quantitative study
LC Segura, H Formigoni
Acessar
Análise de crédito: um estudo exploratório sobre a sua aplicação nos setores industrial e financeiro
LC Segura, L Molini, C Ferreira
Acessar
Competências de liderança para a cultura inovativa na gestão pública
AR Rocha, LC Segura, FN Zatta, W Gonçalves
Acessar
Women, sustainable entrepreneurship and the economy: A global perspective
KT Çalıyurt, L Segura
Acessar
The relationship between higher education and employment in Portugal
F David, R Abreu, L Segura, H Formigoni, F Mantovani
Acessar
Um estudo sobre a pesquisa em custos no Brasil: período de 1967 a 1999
EL RICCIO, LC Segura, MCG Sakata
Acessar
Contribuição da auditoria interna para os trabalhos da auditoria externa
H Formigoni
Acessar
A Relação entre a presença de Mulheres no Conselho e o Gerenciamento de Resultados nas Companhias Abertas Brasileiras
LC Segura, H Formigoni, R Abreu, RG Costa
Acessar
Relação entre incentivos fiscais e indicadores econômicos-financeiros de empresas abertas brasileiras
H Formigoni
Acessar
Blue Accounting: Looking for a New Standard
R Abreu, F David, LL Santos, L Segura, H Formigoni
Acessar
Contabilidade e auditoria pública: evidência empírica da sua relação
F David, R Abreu, L Segura, H Formigoni, F Mantovani
Acessar
Women and sustainability in business: a global perspective
K Caliyurt
Acessar
A relação entre os incentivos fiscais da Lei do Bem (PDTI) e a geração de riqueza pelas companhias abertas brasileiras
H Formigoni, MIV Carneiro, MER Gomes, LC Segura
Acessar
Escrituração Contábil Digital nas Empresas Tributadas pelo Lucro Real
GP Batista, JS de Oliveira Vieira, KRL Germano, H Formigoni, LC Segura
Acessar
Disclosure of tax incentives and the corporate liabilities in Brazilian public companies: a quantitative study
H Formigoni, LC Segura, FR Mantovani, FA Carreira, R Abreu
Acessar
The management of accounting and taxation knowledge in Portugal
R Abreu, F David, L Segura
Acessar
Os gestores das PMEs e os relatórios contábeis: uma pesquisa sobre o conhecimento dos gestores com vistas para a implantação do CPC para PME
LC Segura, JC Magalhães, LA Santos, RJ Mizoguchi, WDA Marques
Acessar
Carina Goncalves; SOUZA, Stephanie Alves de. Uma análise do endividamento das empresas familiares brasileiras nos diversos setores da Economia
LC SEGURA, DE OLIVEIRA
Acessar
Operational competencies rooted in resource theory: operations strategy and supply chain performance
FN Zatta, E Tambosi Filho, RR Freitas, W Gonçalves, RR Oliveira, ...
Acessar
DOES THE INSTITUTIONAL ENVIRONMENT AFFECT PERFORMANCE? EVIDENCES FROM DIFERENT COUNTRIES
LC Segura, VF Maciel, H Formigoni, JA Portillo, DGB de Sa
Acessar
Controllership as an instrument to reduce information asymmetry in public companies: a Brazilian public company case study in the port sector
RP Pinheiro, ALFDS Vasconcelos, LC Segura, JMGD Santos
Acessar
As alterações ocorridas nos Escritórios de Contabilidade através da Implantação do SPED
EL Dos Anjos, LC Segura, R Abreu
Acessar
Accounting for Sustainability: The case study of Petrobras
R Abreu, F David, L Segura, H Formigoni, F Mantovani
Acessar
The influence of women on earnings management: Public companies in Brazil
L Segura, H Formigoni, F David, R Abreu
Acessar
Bolsas de Valores dos BRICS: Uma Análise das Informações Financeiras Baseada na Lei de Benford
MAF Milani Filho, JH Poker, MM Belli, LC Segura
Acessar
Impact of the economic crisis on the higher education: the case of Portugal
F David, R Abreu, L Segura, H Formigoni, F Mantovani
Acessar
A divulgação voluntária de informações sustentáveis: uma análise comparativa das empresas espanholas e brasileiras
MCP Grecco, MA FM Filho, LC Segura, IMG Sanchez, LR Dominguez
Acessar
Influência da gestão e do controle familiares e do fundador sobre o endividamento das empresas abertas brasileiras: evidências empíricas
LC Segura
Acessar
Adoção da metodologia design science research nas pesquisas das micros, pequenas e médias empresas
EB Ferreira, ALF de Souza Vasconcelos, LC Segura, R de Abreu
Acessar
Financial perspective of non-governmental organizations
LH de Lacerda Sanglard, AL Fontes de Souza Vasconcelos, LC Segura, ...
Acessar
Implementação do gerenciamento de riscos operacionais na área de recebimento integrado: uma abordagem intervencionista em uma editora nacional
W de Moraes, LC Segura, JO Imoniana
Acessar
SPED–Sistema Público de Escrituração Digital: Percepção das Empresas de Auditoria em relação os impactos de sua adoção
APM Ferreira, CMC Attanasio, MJF Martins, LC Segura, H Formigoni
Acessar
Planejamento estratégico e diferenciação em empresas de pequeno porte
LC Segura, MCG Sakata, ÉL Riccio
Acessar
Exploring Qualitative Research in Business: Approaches, Strategies, And Methods: Approaches, Strategies, And Methods
LC Segura, ALFS Vasconcelos, VG Slomski
Acessar
Analysis of provisions and contingent liabilities relating to the company's environmental disaster samarco mineração
H Formigoni, LC Segura, IEF de Souza, R Popadiuk
Acessar
Gestão e Automatização no Monitoramento e Avaliação do Desempenho de Fornecedores: o caso da CEMIG
PRQS Soares, LC Segura
Acessar
Idle Costs in the Pandemic
LC Segura, FN Zatta, H Formigoni, W Gonçalves
Acessar
O impacto da adoção do IFRS na valorização das ações no Brasil: um estudo exploratório
AP Moro, FR Bauman, LC Fogaza, LC Segura
Acessar
Blue accounting: First insights
R Abreu, F David, LL Santos, L Segura, H Formigoni
Acessar
Equity Valuation and Negative Earnings
APM Gama, A Paula, LC Segura, MAF Milani Filho
Acessar
The Ohlson and Feltham Ohlson Models
AP Matias Gama, LC Segura, MAF Milani Filho
Acessar
Avaliação do uso de accruals discricionários: uma abordagem qualitativa quanto às práticas de auditoria e seu poder de mitigação
LC Segura, RR Leite, H Formigoni, FR Mantovani
Acessar
Gerenciamento de Resultado no Brasil: Posicionamento Estratégico Como Nova Variável Explanatória
DC SERAFIM, L CARNEIRO, JM SOUZA, LC SEGURA, ...
Acessar
Greenhouse gas emissions variation and corporate performance in international companies
I Gallego-Á lvarez, LC Segura
Acessar
Um estudo sobre a influência do controle e gestão familiar no endividamento das empresas abertas brasileiras
LC Segura, H Formigoni, PA Merofa
Acessar
Assessing accounting for citizenship: an empirical analysis of the corporate control and capital structure decisions
LC Segura, R Abreu, MAFM Filho
Acessar
Avaliação do uso de accruals discricionários: uma abordagem qualitativa quanto às práticas de auditoria e seu poder de mitigação
RR Leite
Acessar
Estudo De Caso: Metodologia De Pesquisa Em Contabilidad y Gestão
L Segura
Acessar
Estudo das pesquisas sobre custos
ÉL Riccio, LC Segura, MCG Sakata
Acessar
Integrating Sustainability Principles with AI-driven Entrepreneurial Strategies
MA Naser, JS Kadyan, LC Segura
Acessar
HIGHER EDUCATION DUAL STUDY IN BRAZIL AND ITS CONTRIBUTION FOR STUDENTS, COMPANIES AND EDUCATION INSTITUTIONS
R Suzuki, LC Segura, W Lemos
Acessar
Financial Planning for SMEs: A Literature Review
LC Segura, CV Silva, AC Borrego, F Caetano
Acessar
Accounting Planning for Acceleration in Small Companies: A Case in a Brazilian Beauty Hair Company
EB Ferreira, LC Segura, ALF de Souza Vasconcelos, R Abreu
Acessar
Handbook of Research on Acceleration Programs for SMEs
I Lisboa, N Teixeira, L Segura, T Krulický, V Machová
Acessar
Adherence of Fraud Pentagon Dimensions in Cases Reported by Security Exchange Commission in United States Between 2018 and 2019
ALF de Souza Vasconcelos, LC Segura, MA Serbonchini, ...
Acessar
Desafios da implantação e manutenção do CEBAS para as entidades do terceiro setor
RR Júnior, ALF de Souza Vasconcelos, EB Ferreira, LC Segura, ...
Acessar
A relação entre a divulgação do resultado contábil e o retorno das ações das companhias abertas brasileiras em decorrência do covid-19
LC Segura, CG Cabral, DGC Tardio
Acessar
56. Crowdfunding versus Crowdlending: is there social responsibility?
R Abreu, L Segura, J Legcevic
Acessar
OS IMPACTOS DA IMPLANTAÇÃO DO SPED NOS RECURSOS ORGANIZACIONAIS DAS EMPRESAS
LS Coelho, H Formigoni, LC Segura, LL Oliveira, VC Moraes
Acessar
The Value Relevance of the Variables Earnings and Book Value of Equity for Valuation Purposes
MG AP, LC Segura, MAF Milani Filho
Acessar
The Impact of Investment in Intangible Assets on the Market Value
AP Matias Gama, LC Segura, MAF Milani Filho
Acessar
The Value Relevance of the Variables Earnings and Book Value of Equity for Valuation Purposes
AP Matias Gama, LC Segura, MAF Milani Filho
Acessar
Education and Political Participation of Women: The Case of Portugal
F David, J Morais, R Abreu, L Marques, L Segura
Acessar
Relatório contábil-financeiro: Instrumento fundamental para qualidade da gestão
L Segura, H Formigoni, R Abreu, F David
Acessar
Concentração de controle acionário e as decisões de estrutura de capital das empresas abertas brasileiras
LC Segura, R Abreu, H Formigoni, M de Fátima David
Acessar
The effect of family ownership on the liability decision
R Abreu, L Segura, M Milani, F David
Acessar
Estudo sobre gerenciamento de receitas no contexto das Microempresas (ME) e Empresas de Pequeno Porte (EPP)
H Formigoni, MTP Antunes, LC Segura, CFA Pellegrino
Acessar
Brazilian professionals' perception in relation to the accounting convergence process to IFRS
MCP Grecco, H Formigoni, CMS Geron, LC Segura
Acessar
Investigating Technological Solutions in Internal Auditing: A Systematic Review of the Literature
A Rodrigues, LC Segura, R Abreu
Acessar
Educação Profissional Continuada e Penalidades Disciplinares: Uma Análise da Sinalização e da Conformidade na Auditoria
LC Segura, ALF de Souza Vasconcelos, CR Bifi, MJT Pinto
Acessar
Evaluating ESG Practices and Cost of Capital in BRICS Listed Companies
CV Silva, WT Nakamura, LC Segura, R Abreu
Acessar
FREE Time for the Accountant 5.0 App: Starting the Research for the Future
F Carreira, LC Segura, JÁ Pérez-López
Acessar
Legal, Accounting, and Tax Structuring of e-sports in Brazil
LR Segura, H Formigoni, LC Segura, R Abreu
Acessar
An Evaluation of Esg Reporting Practices in Banks Holding Automotive Financing Portfolios
LB Emrich, LC Segura
Acessar
Sustainability in SMEs: A Descriptive Analysis of Practices and Indicators Based on Academic Literature
P da Silva Marinho, ALF de S. Vasconcelos, LC Segura, E da Silva Flores
Acessar
The Importance of Integrating Second and Third Line Functions to Prevent Corporate Fraud
RG Andrich, LC Segura
Acessar
Evolving designs, applications, technological advances, and the future of qualitative research
LC Segura, ALFS Vasconcelos, VG Slomski
Acessar
Combined assurance: Avaliando relatórios financeiros de forma integrada
RG Andrich, LC Segura
Acessar
The Role of the Taxation Strategies of the Portuguese Municipalities in Shaping Electoral Outcomes
F Caetano, JÁ Pérez-López, L Segura
Acessar
Combined Assurance: Enhancing Financial Report Integrity Through Integrated Assessment.
RG Andrich, LC Segura
Acessar
Exploring qualitative research in business: Approaches, strategies, and methods
LC Segura, A Vasconcelos, VG Slomski
Acessar
The influence of AI on the accounting and finance sector and its implications
L Segura, A Naser, R Abreu
Acessar
Fundamentos e estratégias para avaliação do impacto da pesquisa em contabilidade na sociedade
MRS Farias, ALF de Souza Vasconcelos, AR de Aguiar Valim Filho, ...
Acessar
Impacts of innovation and cognition in management
W Bataglia, LC Segura
Acessar
PERCEPÇÃO DA FAMÍLIA FUNDADORA, SOBRE A EXISTÊNCIA E A PRESERVAÇÃO DAS DIMENSÕES DA RIQUEZA SOCIOEMOCIONAL
LC Segura, H Formigoni, ALF de Souza Vasconcelos, L Dal Ré
Acessar
USO HÍBRIDO DO ANALYTIC HIERARCHY PROCESS E DA MICROSSIMULAÇÃO DE TRÁFEGO: UMA CONTRIBUIÇÃO AO PLANEJAMENTO DA MOBILIDADE URBANA
W Gonçalves, J do Rozario Clarindo, LC Segura, FN Zatta, RR de Oliveira
Acessar
Disclosure of Uncertain Tax Position: An Analysis of Multiple Case Studies
MT Pinto, LC Segura, H Formigoni, C Geron, R Abreu, JÁ Pézez-López
Acessar
The Role of the Taxation Strategies of the Portuguese Municipalities in Shaping Electoral Outcomes
R Abreu, F Carreira, AC Borrego, S Nunes, F Caetano, JÁ Pérez-López, ...
Acessar
Effects on learning for internal audit in mitigating the risk of corruption in companies involved with the Operation Car Wash
AEM dos Santos, LC Segura, ALF de Souza Vasconcelos, JO Imoniana
Acessar
Women in Accounting and Finance: A Global Perspective
KT Caliyurt, L Segura
Acessar`;

  const leniFullText = `Leni Regina Segura
Doutoranda e Mestre em Controladoria Empresarial pela Universidade Presbiteriana Mackenzie; Mestre em Direito Empresarial pela ESEADE (Escuela Superior de Administración y Derecho), bacharel em Direito pela Pontifícia Universidade de São Paulo (2002), inscrita na Ordem dos Advogados do Brasil – Seção São Paulo (2002) e Seção Rio de Janeiro (2022), especialista em Direito dos Contratos pela Pontifícia Universidade de São Paulo (2004); especialista em Direito Empresarial pela Escola Superior de Advocacia da Ordem dos Advogados de São Paulo (2007), especialista em Direito Tributário pela Pontifícia Universidade de São Paulo (2009), especialista em Direito Empresarial pela Pontifícia Universidade Católica de São Paulo (2014); bacharel em Ciências Contábeis pela Universidade Presbiteriana Mackenzie (2016); inscrita no Conselho Regional de Contabilidade (2016), sócia fundadora da Segura & Martins Sociedade de Advogados, da Open-Book Assessoria e Consultoria Contábil e Financeira Ltda. e da L&L Segura Cursos Técnicos e Gerenciais Ltda. e da Shamayim Consultoria em Negócios Ltda., com vasta experiência na área societária - em especial de planejamento de grupos empresariais, investimento estrangeiro no Brasil e investimento brasileiro no exterior -, na área de contratos internacionais de engenharia, tecnologia da informação, transferência de tecnologia em geral e comércio exterior; responsável pela área societária internacional da Segura & Martins Sociedade de Advogados e pela área tributária e de obrigações acessórias relacionadas ao Banco Central do Brasil da Open-Book Consultoria Contábil e Financeira; participou do projeto internacional de elaboração da minuta da atual Lei de Falências e Recuperação de Empresas de Moçambique (2008); participou de projeto de implantação e customização de software contábil e tributário em Angola (2009), entre outros projetos internacionais. Professora da Universidade Presbiteriana Mackenzie nos cursos de Pós-Graduação Lato Sensu em Direito Tributário (Faculdade de Direito) e em Direito Empresarial, Gestão Estratégica de Negócios, Gestão de Serviços Contábeis (MBA); Gestão Estratégica de Serviços e Mercado de Capitais, Pós-Graduação em Controladoria Financeira e Pós-Graduação em Controladoria Empresarial (CCSA). Professora da Fundação Getúlio Vargas no MBA de Gestão Financeira e Econômica de Tributos (Tributos sobre o Lucro). Professora convidada da FMU no MBA em Controladoria (Monitoramento de Riscos Empresariais). Presidente da Comissão de Direito Tributário da OAB/NSO. Palestrante convidada do Instituto Politécnico da Guarda (Portugal), Sindont e CRC/SP. Fluente em inglês e espanhol.`;

  const lilianeLines = lilianeFullText.split("\n");
  const lilianePublicationsTitleIndex = lilianeLines.indexOf(
    "Livros e Artigos publicados:"
  );
  const lilianePublicationsStartIndex = lilianeLines.indexOf("Link para acesso");
  const lilianeMainLines = lilianeLines.slice(0, lilianePublicationsTitleIndex);
  const lilianePublicationRows = lilianeLines.slice(lilianePublicationsStartIndex + 1);
  const lilianePublications: Array<{
    title: string;
    authors: string;
    link?: string;
  }> = [];

  for (let index = 0; index < lilianePublicationRows.length; index += 3) {
    const title = lilianePublicationRows[index];
    const authors = lilianePublicationRows[index + 1];
    const access = lilianePublicationRows[index + 2];

    if (title && authors && access) {
      lilianePublications.push({ title, authors });
    }
  }

  const lilianePublicationLinks = [
    "https://www.sciencedirect.com/science/article/pii/S0959652614008701",
    "https://www.emerald.com/srj/article/17/2/282-298/356363",
    "https://revistas.usp.br/rco/en/article/view/56690",
    "https://www.bbronline.com.br/index.php/bbr/article/download/184/276/",
    "https://periodicos.uem.br/ojs/index.php/Enfoque/article/view/17587",
    "https://asaa.emnuvens.com.br/asaa/article/view/112",
    "https://www.mdpi.com/2071-1050/16/17/7376",
    "https://repositorio.usp.br/item/001039098",
    "https://www.jisem-journal.com/article/RWBNFXH9",
    "https://dspace.mackenzie.br/items/9b05bff7-b397-4f55-a121-93809e5d62bd/full",
    "https://www.bbronline.com.br/index.php/bbr/article/download/184/276/",
    "https://revistas.pucsp.br/redeca/article/view/30619/",
    "https://doi.org/10.22478/ufpb.2238-104X.2022v13n1.64604",
    "https://www.taylorfrancis.com/books/edit/10.4324/9780429488597/women-sustainable-entrepreneurship-economy-k%C4%B1ymet-tunca-%C3%A7al%C4%B1yurt-liliane-segura",
    "https://bdigital.ipg.pt/dspace/handle/10314/2300",
    "https://anaiscbc.emnuvens.com.br/anais/article/view/3129",
    "https://revistas.pucsp.br/redeca/article/view/35881",
    "https://revistas.pucsp.br/redeca/article/view/29164",
    "https://revistas.pucsp.br/redeca/article/view/46722",
    "https://link.springer.com/chapter/10.1007/978-981-13-1047-8_3",
    "https://scholar.google.com/scholar?q=Contabilidade+e+auditoria+p%C3%BAblica+evid%C3%AAncia+emp%C3%ADrica+da+sua+rela%C3%A7%C3%A3o+F+David+R+Abreu+L+Segura",
    "https://www.routledge.com/Women-and-Sustainability-in-Business-A-Global-Perspective/Caliyurt/p/book/9780367606008",
    "https://revistas.fucamp.edu.br/index.php/contabilometria/article/download/451/369",
    "https://revistas.pucsp.br/redeca/article/view/34890/0",
    "https://comum.rcaap.pt/bitstream/10400.26/21860/1/2016-IJAUDIT030202-Disclosure.pdf",
    "https://scholar.google.com/scholar?q=The+management+of+accounting+and+taxation+knowledge+in+Portugal+R+Abreu%2C+F+David%2C+L+Segura",
    "https://anaiscbc.emnuvens.com.br/anais/article/view/655",
    "https://scholar.google.com/scholar?q=Carina+Goncalves%3B+SOUZA%2C+Stephanie+Alves+de.+Uma+an%C3%A1lise+do+endividamento+das+empresas+familiares+brasileiras+nos+diversos+setores+da+Economia+LC+SEGURA%2C+DE+OLIVEIRA",
    "https://www.ijmp.jor.br/index.php/ijmp/article/view/1161/1772",
    "https://scholar.google.com/scholar?q=DOES+THE+INSTITUTIONAL+ENVIRONMENT+AFFECT+PERFORMANCE%3F+EVIDENCES+FROM+DIFERENT+COUNTRIES+LC+Segura%2C+VF+Maciel%2C+H+Formigoni%2C+JA+Portillo%2C+DGB+de+Sa",
    "https://www.inderscience.com/info/inarticle.php?artid=115928",
    "https://revistas.pucsp.br/redeca/article/view/40165/0",
    "https://link.springer.com/book/10.1007/978-3-319-63561-3",
    "https://www.taylorfrancis.com/chapters/edit/10.4324/9781315546834-19/influence-women-earnings-management-public-companies-brazil-liliane-segura-henrique-formigoni-fatima-david-rute-abreu",
    "https://revistas.face.ufmg.br/index.php/contabilidadevistaerevista/article/view/2833/0",
    "https://scholar.google.com/scholar?q=Impact+of+the+economic+crisis+on+the+higher+education%3A+the+case+of+Portugal+F+David%2C+R+Abreu%2C+L+Segura%2C+H+Formigoni%2C+F+Mantovani",
    "https://revistas.usp.br/rco/article/view/56690",
    "https://dspace.mackenzie.br/items/772d81b8-27e1-479b-bdb9-3900aefd65cc/full",
    "https://revistas.pucsp.br/redeca/article/view/59002",
    "https://www.emerald.com/books/edited-volume/14014/chapter/84899399/Financial-Perspective-of-Non-governmental",
    "https://dspace.mackenzie.br/items/fd475bb0-c58e-41d8-990b-eefa2d9348a5",
    "https://revistas.pucsp.br/redeca/article/view/40167",
    "https://scholar.google.com/scholar?q=Planejamento+estrat%C3%A9gico+e+diferencia%C3%A7%C3%A3o+em+empresas+de+pequeno+porte+LC+Segura%2C+MCG+Sakata%2C+%C3%89L+Riccio",
    "https://www.irma-international.org/book/exploring-qualitative-research-business/349235/",
    "https://link.springer.com/book/10.1007/978-981-16-9364-9",
    "https://sistema.emprad.org.br/arquivos/2020/117.pdf",
    "https://www.igi-global.com/chapter/idle-costs-in-the-pandemic/279446",
    "https://scholar.google.com/scholar?q=O+impacto+da+ado%C3%A7%C3%A3o+do+IFRS+na+valoriza%C3%A7%C3%A3o+das+a%C3%A7%C3%B5es+no+Brasil%3A+um+estudo+explorat%C3%B3rio+AP+Moro%2C+FR+Bauman%2C+LC+Fogaza%2C+LC+Segura",
    "https://iconline.ipleiria.pt/bitstream/10400.8/5804/1/paper%20publicado.pdf",
    "https://link.springer.com/book/10.1007/978-981-10-3009-3",
    "https://link.springer.com/chapter/10.1007/978-981-10-3009-3_2",
    "https://scholar.google.com/scholar?q=Avalia%C3%A7%C3%A3o+do+uso+de+accruals+discricion%C3%A1rios%3A+uma+abordagem+qualitativa+quanto+%C3%A0s+pr%C3%A1ticas+de+auditoria+e+seu+poder+de+mitiga%C3%A7%C3%A3o+LC+Segura%2C+RR+Leite%2C+H+Formigoni%2C+FR+Mantovani",
    "https://scholar.google.com/scholar?q=Gerenciamento+de+Resultado+no+Brasil%3A+Posicionamento+Estrat%C3%A9gico+Como+Nova+Vari%C3%A1vel+Explanat%C3%B3ria+DC+SERAFIM%2C+L+CARNEIRO%2C+JM+SOUZA%2C+LC+SEGURA%2C+...",
    "https://www.inderscience.com/info/inarticle.php?artid=73055",
    "https://scholar.google.com/scholar?q=Um+estudo+sobre+a+influ%C3%AAncia+do+controle+e+gest%C3%A3o+familiar+no+endividamento+das+empresas+abertas+brasileiras+LC+Segura%2C+H+Formigoni%2C+PA+Merofa",
    "https://www.inderscience.com/info/e_inarticle.php?artid=64319",
    "https://scholar.google.com/scholar?q=Avalia%C3%A7%C3%A3o+do+uso+de+accruals+discricion%C3%A1rios%3A+uma+abordagem+qualitativa+quanto+%C3%A0s+pr%C3%A1ticas+de+auditoria+e+seu+poder+de+mitiga%C3%A7%C3%A3o+RR+Leite",
    "https://scholar.google.com/scholar?q=Estudo+De+Caso%3A+Metodologia+De+Pesquisa+Em+Contabilidad+y+Gest%C3%A3o+L+Segura",
    "https://anaiscbc.emnuvens.com.br/anais/article/view/3129",
    "https://scholar.google.com/scholar?q=Integrating+Sustainability+Principles+with+AI-driven+Entrepreneurial+Strategies+MA+Naser%2C+JS+Kadyan%2C+LC+Segura",
    "https://scholar.google.com/scholar?q=HIGHER+EDUCATION+DUAL+STUDY+IN+BRAZIL+AND+ITS+CONTRIBUTION+FOR+STUDENTS%2C+COMPANIES+AND+EDUCATION+INSTITUTIONS+R+Suzuki%2C+LC+Segura%2C+W+Lemos",
    "https://www.igi-global.com/chapter/financial-planning-for-smes/315906",
    "https://www.igi-global.com/chapter/accounting-planning-for-acceleration-in-small-companies/315923",
    "https://www.igi-global.com/book/handbook-research-acceleration-programs-smes/296686",
    "https://scholar.google.com/scholar?q=Adherence+of+Fraud+Pentagon+Dimensions+in+Cases+Reported+by+Security+Exchange+Commission+in+United+States+Between+2018+and+2019+ALF+de+Souza+Vasconcelos%2C+LC+Segura%2C+MA+Serbonchini%2C+...",
    "https://scholar.google.com/scholar?q=Desafios+da+implanta%C3%A7%C3%A3o+e+manuten%C3%A7%C3%A3o+do+CEBAS+para+as+entidades+do+terceiro+setor+RR+J%C3%BAnior%2C+ALF+de+Souza+Vasconcelos%2C+EB+Ferreira%2C+LC+Segura%2C+...",
    "https://scholar.google.com/scholar?q=A+rela%C3%A7%C3%A3o+entre+a+divulga%C3%A7%C3%A3o+do+resultado+cont%C3%A1bil+e+o+retorno+das+a%C3%A7%C3%B5es+das+companhias+abertas+brasileiras+em+decorr%C3%AAncia+do+covid-19+LC+Segura%2C+CG+Cabral%2C+DGC+Tardio",
    "https://scholar.google.com/scholar?q=56.+Crowdfunding+versus+Crowdlending%3A+is+there+social+responsibility%3F+R+Abreu%2C+L+Segura%2C+J+Legcevic",
    "https://scholar.google.com/scholar?q=OS+IMPACTOS+DA+IMPLANTA%C3%87%C3%83O+DO+SPED+NOS+RECURSOS+ORGANIZACIONAIS+DAS+EMPRESAS+LS+Coelho%2C+H+Formigoni%2C+LC+Segura%2C+LL+Oliveira%2C+VC+Moraes",
    "https://link.springer.com/book/10.1007/978-981-10-3009-3",
    "https://scholar.google.com/scholar?q=Education+and+Political+Participation+of+Women%3A+The+Case+of+Portugal+F+David%2C+J+Morais%2C+R+Abreu%2C+L+Marques%2C+L+Segura",
    "https://scholar.google.com/scholar?q=Relat%C3%B3rio+cont%C3%A1bil-financeiro%3A+Instrumento+fundamental+para+qualidade+da+gest%C3%A3o+L+Segura%2C+H+Formigoni%2C+R+Abreu%2C+F+David",
    "https://scholar.google.com/scholar?q=Concentra%C3%A7%C3%A3o+de+controle+acion%C3%A1rio+e+as+decis%C3%B5es+de+estrutura+de+capital+das+empresas+abertas+brasileiras+LC+Segura%2C+R+Abreu%2C+H+Formigoni%2C+M+de+F%C3%A1tima+David",
    "https://scholar.google.com/scholar?q=The+effect+of+family+ownership+on+the+liability+decision+R+Abreu%2C+L+Segura%2C+M+Milani%2C+F+David",
    "https://scholar.google.com/scholar?q=Estudo+sobre+gerenciamento+de+receitas+no+contexto+das+Microempresas+%28ME%29+e+Empresas+de+Pequeno+Porte+%28EPP%29+H+Formigoni%2C+MTP+Antunes%2C+LC+Segura%2C+CFA+Pellegrino",
    "https://doi.org/10.4025/enfoque.v32i3.17587",
    "https://link.springer.com/chapter/10.1007/978-3-032-16268-7_24",
    "https://www.revistas.uneb.br/financ/article/view/20087",
    "https://link.springer.com/chapter/10.1007/978-3-031-96641-5_89",
    "https://scholar.google.com/scholar?q=FREE+Time+for+the+Accountant+5.0+App%3A+Starting+the+Research+for+the+Future+F+Carreira%2C+LC+Segura%2C+J%C3%81+P%C3%A9rez-L%C3%B3pez",
    "https://link.springer.com/chapter/10.1007/978-3-032-16268-7_26",
    "https://link.springer.com/chapter/10.1007/978-3-032-16268-7_11",
    "https://link.springer.com/chapter/10.1007/978-3-032-16268-7_31",
    "https://link.springer.com/chapter/10.1007/978-3-032-16268-7_34",
    "https://scholar.google.com/scholar?q=Evolving+designs%2C+applications%2C+technological+advances%2C+and+the+future+of+qualitative+research+LC+Segura%2C+ALFS+Vasconcelos%2C+VG+Slomski",
    "https://sustainableinstitutional.org/Journals/article/view/163",
    "https://link.springer.com/chapter/10.1007/978-3-031-77531-4",
    "https://sustainableinstitutional.org/Journals/article/view/163",
    "https://www.irma-international.org/book/exploring-qualitative-research-business/349235/",
    "https://www.irma-international.org/chapter/the-influence-of-ai-on-the-accounting-and-finance-sector-and-its-implications/359956/",
    "https://ojs.scientificmanagementjournal.com/ojs/index.php/smj/article/view/1183",
    "https://www.vitalsource.com/products/impacts-of-innovation-and-cognition-in-management-igi-global-v9798369357804",
    "https://revista.fumec.br/index.php/facesp/article/view/10011",
    "https://scholar.google.com/scholar?q=USO+H%C3%8DBRIDO+DO+ANALYTIC+HIERARCHY+PROCESS+E+DA+MICROSSIMULA%C3%87%C3%83O+DE+TR%C3%81FEGO%3A+UMA+CONTRIBUI%C3%87%C3%83O+AO+PLANEJAMENTO+DA+MOBILIDADE+URBANA+W+Gon%C3%A7alves%2C+J+do+Rozario+Clarindo%2C+LC+Segura%2C+FN+Zatta%2C+RR+de+Oliveira",
    "https://link.springer.com/chapter/10.1007/978-3-031-77531-4_9",
    "https://link.springer.com/chapter/10.1007/978-3-031-77531-4",
    "https://scholar.google.com/scholar?q=Effects+on+learning+for+internal+audit+in+mitigating+the+risk+of+corruption+in+companies+involved+with+the+Operation+Car+Wash+AEM+dos+Santos%2C+LC+Segura%2C+ALF+de+Souza+Vasconcelos%2C+JO+Imoniana",
    "https://www.amazon.com/Women-Accounting-Finance-Perspective-Sustainable/dp/1138594733",
    "https://scholar.google.com/scholar?q=Effects+on+learning+for+internal+audit+in+mitigating+the+risk+of+corruption+in+companies+involved+with+the+Operation+Car+Wash+AEM+dos+Santos%2C+LC+Segura%2C+ALF+de+Souza+Vasconcelos%2C+JO+Imoniana",
    "https://www.amazon.com/Women-Accounting-Finance-Perspective-Sustainable/dp/1138594733",
  ];
  const lilianePublicationsWithLinks = lilianePublications.map(
    (publication, index) => ({
      ...publication,
      link: lilianePublicationLinks[index],
    })
  );

  const lilianeSectionTitles = new Set([
    "Perfil profissional",
    "Formação acadêmica",
    "Experiência profissional e acadêmica",
    "Áreas de especialização",
  ]);
  const leniLines = leniFullText.split("\n");
  const leniTitle = leniLines[0];
  const leniBody = leniLines.slice(1).join("\n");
  const leniSection1End =
    "inscrita no Conselho Regional de Contabilidade (2016),";
  const leniSection2 =
    "Sócia fundadora da Segura & Martins Sociedade de Advogados, da Open-Book Assessoria e Consultoria Contábil e Financeira Ltda. e da L&L Segura Cursos Técnicos e Gerenciais Ltda. E da Shamayim Consultoria em Negócios Ltda. com vasta experiência na área societária - em especial de planejamento de grupos empresariais, investimento estrangeiro no Brasil e investimento brasileiro no Exterior -, na área de contratos internacionais de engenharia, tecnologia de informação, transferência de tecnologia em geral e comércio exterior; responsável pela área societária internacional da Segura & Martins Sociedade de Advogados e pela área tributária e de obrigações acessórias relacionadas ao Banco Central do Brasil da Open-Book Consultoria Contábil e Financeira;";
  const leniSection3 =
    "Participou do Projeto internacional de elaboração da minuta da atual Lei de Falências e Recuperação de Empresas de Moçambique (2008); participou de projeto de implantação e customização de software contábil e tributário em Angola (2009) entre outros projetos internacionais.";
  const leniSection4 =
    "Professora da Universidade Presbiteriana Mackenzie nos cursos de Pós Graduação Latu Senso em Direito Tributário (Faculdade de Direito) e em Direito Empresarial, Gestão Estratégica de Negócios, Gestão de Serviços Contábeis (MBA); Gestão Estratégica de Serviços e Mercado de Capitais, Pós Graduação em Controladoria Financeira e Pós Graduação em Controladoria Empresarial (CCSA). Professora da Fundação Getúlio Vargas no MBA de Gestão Financeira e Econômica de Tributos (Tributos sobre o Lucro). Professora convidada da FMU no MBA em Controladoria (Monitoramento de Riscos Empresariais).";
  const leniSection5 =
    "Presidente da Comissão de Direito Tributário da OAB/NSO. Palestrante convidada da, Instituto Politécnico da Guarda (Portugal), Sindont e CRC/SP. Fluente em inglês e espanhol.";
  const leniSection1Index = leniBody.indexOf(leniSection1End);
  const leniSection1 =
    leniSection1Index >= 0
      ? leniBody.slice(0, leniSection1Index + leniSection1End.length)
      : leniBody;
  const leniSections = [
    { title: "Formação acadêmica e credenciais", text: leniSection1 },
    { title: "Atuação executiva e societária", text: leniSection2 },
    { title: "Experiência internacional", text: leniSection3 },
    { title: "Atuação docente", text: leniSection4 },
    { title: "Liderança institucional e idiomas", text: leniSection5 },
  ];
  const lucianoProfile = {
    name: "Luciano R. Segura",
    role: "Equipe",
    education: [
      "Pós-Graduado (Especialista) em História, História das Religiões, Ciência das Religiões, Filologia Românica, Direito Empresarial, Direito Processual Civil e Literatura Latina.",
      "Pós-Graduado (Extensão) em Direito do Trabalho: Reforma Trabalhista.",
      "Licenciado em Letras, Filosofia, Sociologia e História. Bacharel em Direito e Teologia. Contabilidade (Graduação – Trancada).",
    ],
    specificExperience: [
      "Coordenador de Linguagens do Curso Intergraus. Supervisor de material didático, promotor de atividades de treinamento e capacitação para professores das escolas conveniadas e orientador de estudos para os alunos das unidades do curso.",
      "Educador e consultor pedagógico com sólida carreira em ensino de Língua Portuguesa, Redação, História e Filosofia para ensino médio e pré-vestibular.",
      "Experiência aprofundada na elaboração de materiais didáticos, capítulos de livros e artigos científicos, além de formulação e resolução de questões para os principais exames vestibulares.",
      "Expertise na formulação e resolução de questões de alta complexidade para vestibulares, além de desenvolvimento de conteúdo didático e treinamentos para professores.",
      "Advogado (Contencioso Cível e Consumidor) atuante e regularmente inscrito na OAB/SP.",
    ],
    professionalExperience: [
      "2025 - 2026. Orientador de Estudos no Curso Intergraus",
      "2024 - 2026. Coordenador de Linguagens do Curso Pré-Vestibular Intergraus",
      "2023 (até junho). Coordenador de Linguagens do Curso Pré-Vestibular Intergraus",
      "2022. Professor-representante de Língua Portuguesa",
      "2015 - 2021. Professor de Redação do Curso Pré-Vestibular Intergraus",
      "2010 - 2014. Professor de Redação e Coordenador de Correção do Curso Pré-Vestibular Intergraus",
      "2007 - 2010. Professor de Redação no Curso Pré-Vestibular Intergraus",
      "2007 - 2009. Professor de Língua Portuguesa do Colégio Augusto Laranja",
      "2007 - 2008. Coordenador de Conteúdo da Revista Discutindo Língua Portuguesa",
      "2007. Professor do Curso Pop Vestibulares (Arujá)",
      "2005 - 2006. Professor de Língua Portuguesa do Colégio Mater Amabilis",
      "2004 - 2006. Professor de Redação do Curso Pré-Vestibular Alferes Vestibulares",
      "1998 - 2006. Corretor de Redação, Plantonista de Redação e Gramática e Professor de Redação no Curso Anglo Vestibulares",
      "1997 - 1999. Professor de Língua Portuguesa da E.E.P.S.G. Francisco Gonçalves Vieira",
    ],
    additionalInfo: [
      "Conhecimentos em Informática (HTML, programação básica, Linguagem C, Pacote Office, Google Suite) e Eletrônica (Arduino, circuitos).",
      "Possui diversos artigos publicados em revistas e jornais, além de artigos científicos.",
      "Escreveu capítulos de livros.",
      "Escreveu, em parceria, as apostilas 8 e 9 de Literatura do Curso Intergraus.",
      "Foi palestrante, pela Almada Consultoria, para a OAB da Sé.",
      "Publicou capítulo do material didático do Ensino Fundamental do Mackenzie.",
      "Escreveu as apostilas de Filosofia (1 a 9) do Curso Intergraus.",
      "Realizou treinamentos de preparação para provas orais (ESPM, INSPER, FGV).",
      "Realizou treinamentos de atualização e aperfeiçoamento para professores.",
      "Realizou palestras para a Editora Paulos sobre Machado de Assis.",
    ],
    languages:
      "Português, Inglês (Intermediário), Espanhol, Latim (básico), Grego Antigo (iniciante), Francês (iniciante), Russo (iniciante).",
  };

  return (
    <>
      <SEO page="about" path="/about" />
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#010101] to-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9f7423]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10">
              {t("about.title")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("about.intro.title")}
            </h1>
            <p className="text-lg text-white/70">{t("about.intro.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                {t("about.intro.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("about.vision.title")}
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">
                {t("about.vision.text")}
              </p>
              <div className="space-y-4">
                {(
                  t("about.vision.points", { returnObjects: true }) as string[]
                ).map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team planning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Strategic planning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("about.mission.title")}
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">
                {t("about.mission.text")}
              </p>
              <div className="space-y-4">
                {(
                  t("about.mission.points", { returnObjects: true }) as string[]
                ).map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Heart className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("about.values.title")}
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            {t("about.values.text")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {values.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#9f7423] mb-2">
                  {item.value}
                </div>
                <div className="text-white/80 text-sm">{item.title}</div>
              </AnimatedCard>
            ))}
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              {t("about.fundamentalCommitments")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(
                t("about.values.commitments", {
                  returnObjects: true,
                }) as string[]
              ).map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Laptop className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("about.workStyle.title")}
            </h2>
          </div>

          <p className="text-[#9f7423] text-lg text-center mb-8">
            {t("about.workStyle.subtitle")}
          </p>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            {t("about.workStyle.text")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard delay={0.1}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9f7423]/20 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-[#9f7423]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t("about.workStyle.benefits.title.employees")}
                </h3>
              </div>
              <p className="text-white/60">
                {t("about.workStyle.benefits.employees")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9f7423]/20 flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-[#9f7423]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t("about.workStyle.benefits.title.clients")}
                </h3>
              </div>
              <p className="text-white/60">
                {t("about.workStyle.benefits.clients")}
              </p>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#9f7423]/10 rounded-2xl p-8 border border-[#9f7423]/30 text-center"
          >
            <p className="text-white/80 text-lg italic">
              {t("about.workStyle.conclusion")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Partners"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[#9f7423] font-semibold text-lg">
                    {t("about.partners.founders")}
                  </p>
                  <p className="text-white/60 text-sm">{t("about.founders")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("about.partners.title")}
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-[#9f7423]/30" />
                <p className="text-white/70 leading-relaxed mb-6 pl-8">
                  {t("about.partners.text")}
                </p>
                <p className="text-white/70 leading-relaxed pl-8">
                  {t("about.partners.text2")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Users2 className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("about.leadership.title", { defaultValue: "Liderança" })}
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            {t("about.leadership.subtitle", {
              defaultValue:
                "Currículos completos das sócias, conforme conteúdo institucional fornecido.",
            })}
          </p>

          <div className="space-y-8">
            <AnimatedCard delay={0.1}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Liliane Cristina Segura
              </h3>
              <div className="space-y-4">
                {lilianeMainLines.map((line) => {
                  if (lilianeSectionTitles.has(line)) {
                    return (
                      <h4
                        key={line}
                        className="text-lg font-semibold text-[#9f7423] mt-6 first:mt-0"
                      >
                        {line}
                      </h4>
                    );
                  }

                  if (line.startsWith("• ")) {
                    return (
                      <div key={line} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#9f7423] flex-shrink-0 mt-1" />
                        <span className="text-white/80">{line}</span>
                      </div>
                    );
                  }

                  return (
                    <p key={line} className="text-white/80 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Livros e Artigos publicados:
                </h4>
                <p className="text-white/60 text-sm mb-6">
                  Título | Autores | Link para acesso
                </p>

                <div className="space-y-4 max-h-[32rem] overflow-auto pr-2">
                  {lilianePublicationsWithLinks.map((publication) => (
                    <div
                      key={`${publication.title}-${publication.authors}`}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-white font-medium mb-2">
                        {publication.title}
                      </p>
                      <p className="text-white/70 text-sm mb-2">
                        {publication.authors}
                      </p>
                      {publication.link ? (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9f7423] text-sm underline underline-offset-4 hover:text-[#d4a84b] transition-colors"
                        >
                          Acessar
                        </a>
                      ) : (
                        <span className="text-white/40 text-sm">Sem link</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {leniTitle}
              </h3>
              <div className="space-y-6">
                {leniSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                      {section.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Users2 className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Equipe</h2>
          </div>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            Perfil profissional da equipe pedagógica e técnica.
          </p>

          <AnimatedCard delay={0.3}>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {lucianoProfile.name}
            </h3>
            <p className="text-[#9f7423] font-medium mb-6">{lucianoProfile.role}</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Educação
                </h4>
                <div className="space-y-2">
                  {lucianoProfile.education.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#9f7423] flex-shrink-0 mt-1" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Experiência Específica
                </h4>
                <div className="space-y-2">
                  {lucianoProfile.specificExperience.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#9f7423] flex-shrink-0 mt-1" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Experiência Profissional
                </h4>
                <div className="space-y-2">
                  {lucianoProfile.professionalExperience.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#9f7423] flex-shrink-0 mt-1" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Outras Informações
                </h4>
                <div className="space-y-2">
                  {lucianoProfile.additionalInfo.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#9f7423] flex-shrink-0 mt-1" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#9f7423] mb-2">
                  Idiomas
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {lucianoProfile.languages}
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}
