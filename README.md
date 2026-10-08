# Daniela Moraes Espaço de Beleza

Landing page estática para Daniela Moraes Espaço de Beleza, em São José dos Campos. O projeto usa Astro, TypeScript e CSS próprio. O objetivo é apresentar serviços e trabalhos publicados pelo espaço e iniciar conversas de agendamento no WhatsApp.

## Rodar localmente

Requer Node.js 22.12+.

```bash
npm ci
npm run dev
```

Para validar e gerar a versão estática:

```bash
npm run check
npm run build
npm run preview
```

A saída fica em `dist/`. O site não usa backend, formulário ou armazenamento de dados.

## Conteúdo e imagens

Dados comerciais e listas de serviços ficam em `src/data/site.ts`. A página está em `src/pages/index.astro`; a identidade e os layouts responsivos estão em `src/styles/global.css`.

As fotografias otimizadas em `public/images/` vêm do [site oficial do espaço](https://dannielamoraes1.wixsite.com/site). As URLs originais, dimensões e limites de uso estão em `pesquisa/FONTES_E_DIRECAO.md`. Os arquivos originais de pesquisa não são versionados. Para regenerar as versões WebP, instale Pillow e execute `python scripts/prepare_images.py`; o script pode baixá-las novamente do Wix caso não existam localmente.

## Publicação

O build é estático e pode ser hospedado em um serviço que publique o conteúdo de `dist/`. Um domínio definitivo ainda não foi definido. Ao publicar, configure um `canonical` e uma imagem Open Graph absoluta no domínio final; não aponte `canonical` para o antigo site Wix.

Antes de apresentar uma proposta comercial ao salão, confirme a titularidade das fotos e a contagem atual de avaliações do Google. Não há depoimentos, preços de serviços ou métricas de conversão inventados nesta página.
