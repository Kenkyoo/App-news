# News Fetcher Project

Este proyecto consume la API de [NewsAPI](https://newsapi.org/) para mostrar las noticias más recientes. Sin embargo, debido a restricciones de CORS en el plan gratuito, no puede desplegarse directamente en la web.

## Cómo Ejecutarlo Localmente

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/news-fetcher.git

2. Instala un servidor local (como live-server):
npm install -g live-server

3. Ejecuta el proyecto:

live-server

Tecnologías Usadas

    JavaScript: Para la lógica del cliente.
    date-fns: Para el formateo de fechas.
    mdb-ui-kit: Para los componentes de interfaz de usuario.
    NewsAPI: Para obtener los datos de noticias.

Notas

    Este proyecto requiere una clave de API de NewsAPI. Si deseas probarlo, reemplaza api_key en el archivo script.js con tu propia clave.
    Las solicitudes a NewsAPI solo funcionan desde localhost debido a restricciones del plan gratuito.
