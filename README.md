# Portfólio Horizonte Multimídia

Landing page estática, mobile-first, com copy em português do Brasil e estética glass + iridescência. Inclui âncoras principais para Início, Projetos, Sobre mim e Contato.

## Estrutura
- `index.html`: Maquetado principal com seções de hero, projetos, sobre mim e formulário de contato.
- `assets/css/styles.css`: Estilos responsivos focados em acessibilidade, glassmorphism e iridescência.
- `assets/js/main.js`: Interações leves (menu móvel e confirmação do formulário).

## Como usar
1. Abra `index.html` no navegador ou sirva a pasta com qualquer servidor estático (`python -m http.server` ou similar).
2. Personalize textos, links e cartões de projetos diretamente no HTML.
3. Ajuste paleta e detalhes de glass/iridescência em `styles.css` (variáveis CSS no topo).
4. Para integrar em WordPress, copie o markup de `index.html` para um template/tema e enfileire os assets em `functions.php` seguindo WPCS.

## Prompt mestre para WordPress
Use no seu stack de IA para gerar plugins/temas conforme padrões 2025:

```
Actúa como un Desarrollador Senior de WordPress especializado en rendimiento, seguridad y escalabilidad bajo los estándares de 2025. Necesito crear un [TIPO DE PROYECTO] con las siguientes características: [DESCRIPCIÓN DE LA FUNCIONALIDAD].
- Arquitectura: Usa OOP con clases prefijadas y patrón Singleton si aplica.
- Seguridad: Sanitiza datos, valida permisos con current_user_can y protege con Nonces todos los procesos.
- Rendimiento: Optimiza consultas con WP_Query o API de metadatos; cachea con Transients cuando sea pesado.
- Estándares modernos: PHP 8.3, compatible con Gutenberg y siguiendo WPCS.
- Internacionalización: Envuelve textos con __() o _e() usando el text-domain adecuado.
- Documentación: Añade PHPDoc/JSDoc detallado.
```

## Créditos
Desenvolvido por Adrian Camilo Rodriguez Quintero para Horizonte Multimídia. Contato: **adrirodriguez@uade.edu.ar** ou [LinkedIn](https://www.linkedin.com/in/aroqui/).
