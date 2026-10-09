# Plano de implementação — Daniela Moraes Espaço de Beleza

## 1. Briefing aprovado e escopo

Landing page para o salão Daniela Moraes Espaço de Beleza, no Jardim Morumbi, São José dos Campos. Público: pessoas da região que procuram cabelo, unhas, rosto/olhar e estética. Conversão principal: conversa para agendamento no WhatsApp `(12) 98235-1523`. O usuário aprovou Maison Lune como ponto de partida e pediu uma identidade visual muito própria, com efeitos e interações em Astro. Entrega: código-fonte em repositório GitHub, build estático e publicação no GitHub Pages da NexIU para uso no portfólio. A troca do site Wix não foi solicitada.

Sem preços de serviços, formulário, agenda integrada, CMS, tracking, depoimentos fabricados ou funcionalidades de servidor. O ticket médio da empresa não foi informado; análise comercial separada usará cenários explícitos.

## 2. Fontes, referências e conteúdo

- [Site oficial](https://dannielamoraes1.wixsite.com/site): monograma, fotos do espaço, contato e horários.
- [Maison Lune](https://dearlydebbie.me/build/maison-lune): ritmo editorial e retrato como âncora. Adaptar sem copiar a marca ou o layout.
- [Beauty Salon](https://dribbble.com/shots/26181605-Beauty-Salon-Website-Design): referência de calor, sem adotar o laranja.
- [SALON](https://vasudev.design/case-hair-salon): clareza de percurso em dispositivos móveis.
- Dados comerciais do briefing: endereço, serviços, telefone, Instagram, horário, nota 5,0 e 117 avaliações. A nota e contagem são fornecidas pelo usuário, sem link direto verificável do perfil Google; não criar dados estruturados de avaliações.

### Mapa imagem → seção

Arquivos originais e origem constam em `pesquisa/FONTES_E_DIRECAO.md`.

| Imagem | Uso | Limite |
| --- | --- | --- |
| `portrait.jpg` | Retrato na abertura e seção de marca | 720 × 890; evitar ampliação excessiva e preservar rosto/escovas |
| `hair2.jpg`, `hair4.jpg`, `hair6.jpg` | Ensaio visual de trabalhos de cabelo | Preservar comprimento e textura; `hair6` tem 552 px de largura |
| `nails3.jpg` ou `nails4.jpg` | Serviço de unhas | Recorte moderado, sem alegar técnica específica da foto |
| `lashes2.jpg` | Serviço rosto/olhar | Detalhe de olho; não ampliar além do necessário |
| `logo.jpg` → `marca-original.webp` / `marca-restaurada.png` | Versão restaurada aprovada no cabeçalho, na seção de assinatura e no favicon | Original mantido no projeto para referência. Restauração aprovada pelo usuário em 2026-10-09; a IA pode ter reinterpretado sutilmente curvas finas |

Fotos com marca d'água de terceiros (`nails.jpg`, `nails5.jpg`) não serão usadas. A galeria mostrará trabalhos presentes no site oficial; fotos de cabelo podem ficar em tamanho contido por sua resolução.

## 3. Narrativa e telas

**Headline:** “Cabelo, unhas e olhar. Na Eliana, 474.” **Complemento:** serviços concretos do espaço e convite para pedir um horário. **CTA principal:** componente de marca com identificação do WhatsApp e rótulo “Pedir horário”, com mensagem inicial que solicita horários disponíveis. O link genérico “Ver todos os serviços” foi retirado da abertura. Cada área tem um link de WhatsApp com o serviço correspondente já indicado na mensagem. Um botão fixo reaparece após a abertura para manter o contato acessível durante a rolagem. A legenda do trabalho de unhas diz apenas “manicure”.

Seções: (1) capa editorial e CTA; (2) índice de cuidados interativo, com quatro áreas e lista completa de serviços; (3) seleção de trabalhos publicados no site oficial; (4) endereço, funcionamento, avaliação informada e contato; (5) rodapé com Instagram e links úteis.

**Telefone:** cabeçalho compacto, headline e CTA antes do retrato; menu de serviços com alvos amplos e foto dentro da área aberta; ensaio de trabalhos em fluxo vertical; contato em destaque no fim e CTA alcançável sem cobrir conteúdo. **Desktop:** composição assimétrica preservada na abertura; menu de serviços de largura inteira, com cada foto junto ao serviço correspondente; galeria com recortes variados; endereço e horário em composição horizontal. Ordem de leitura e contrastes revistos separadamente.

## 4. Sistema visual e efeito distintivo

- Conceito: **Caderno de gestos**. O traço longo do monograma existente inspira uma linha desenhada em SVG, usada em poucos pontos para conduzir o olhar. Não redesenhar o monograma como se fosse logo novo.
- Paleta: marfim quente, rosa queimado da identidade, vinho para texto/ações, verde escuro discreto vindo da parede presente nas fotos. Alto contraste nas informações essenciais.
- Tipografia: Newsreader nos títulos e Manrope nas informações e controles. Revisar a legibilidade do itálico e a posição do CTA na primeira tela em tamanhos reais.
- Componentes: CTA de agendamento com duas linhas de texto, recorte assimétrico, traço de assinatura e ícone WhatsApp SVG fiel; variações vinho, contorno e papel. Os serviços ficam em lista tipográfica, sem chips. Ícones de interface em SVG inline, sem caracteres Unicode. Estados hover, foco, ativo e toque explícitos.
- Movimento: traço desenhado ao entrar na tela, abertura suave dos painéis de serviço e deslocamento sutil de elementos editoriais. Respeitar `prefers-reduced-motion` e manter todo conteúdo visível sem JavaScript.
- Composição própria: fotos de cabelos feitas contra a parede verde formam um ensaio sequencial; o menu de serviços abre cada área na largura da seção, com foto e link de WhatsApp próprios. A foto principal de Daniela e sua composição na abertura foram preservadas a pedido do usuário. A seção final de endereço e horário foi elogiada e permanece com sua composição. A comparação com Bruni, Design18k, Elisabete, PerVoí e NexIU motivou a retirada da fórmula de lista com foto fixa ao lado, usada em outro projeto da pasta.

## 5. Stack e arquitetura

Astro 7.3.8 + TypeScript + CSS próprio. Saída estática. Página principal em `src/pages/index.astro`, CTA em `src/components/BookingButton.astro`, conteúdo factual em `src/data/site.ts`, estilos em `src/styles/global.css`, imagens em `public/images/`. O favicon e o ícone da tela inicial apontam para a versão restaurada aprovada da marca, `marca-restaurada.png`. O original segue preservado em `marca-original.webp`; o retrato principal permanece intacto. JavaScript pequeno e isolado para o índice interativo e o menu, com fallback sem JS. O `site` e a `base` do Astro apontam para `https://nexiu-dev.github.io/DanielaMoraesEspacoDeBeleza/`; os caminhos dos assets, canonical e Open Graph acompanham essa URL.

## 6. Execução e aceite

1. Preparar assets de imagens reais, registrar origem e converter para WebP. Aceite: dimensões, cortes e proveniência claros.
2. Construir estrutura semântica e conteúdo factual. Aceite: serviços, telefone, endereço e horário corretos; CTAs funcionais.
3. Aplicar identidade e interações. Aceite: aparência própria da marca, interação acessível e desativação de movimento quando solicitada pelo sistema.
4. Validar: `astro check`, build, navegação no build em 320/360/390/430 px, tablet e desktop; verificar foco, menu, âncoras, links externos, ausência de rolagem horizontal, recortes, carregamento e metadados. Corrigir achados antes da entrega.
5. Commit e push no GitHub `NexIU-Dev/DanielaMoraesEspacoDeBeleza`; o workflow publica a branch `main` no GitHub Pages. Conferir a URL pública, imagens, navegação e caminhos de assets após o deploy.

## 7. Análise de mercado após a página

Pesquisar preços atuais de landing pages e serviços de beleza locais. Calcular cenários de ticket médio com premissas transparentes, sem atribuir à Daniela um valor não informado e sem prometer conversão ou retorno.
