# Despliegue en Vercel

## Si ves el error NOT_FOUND (404)

### 1. Comprueba el Root Directory (causa más común)

Si tu repositorio en GitHub tiene **varias carpetas** en la raíz (por ejemplo `website` y `gilbertoguerrero`), Vercel está construyendo desde la raíz del repo y no encuentra la app Next.js.

**Solución:** En Vercel → tu proyecto → **Settings** → **General** → **Root Directory** → pon `website` (o la carpeta donde está este proyecto) → **Save**. Luego **Redeploy**.

### 2. Versión de Node

Next.js 16 requiere Node.js 20.9+. Este proyecto incluye `engines` en `package.json` y `.nvmrc`. Vercel suele usar la versión correcta; si el build falla, en **Settings** → **General** → **Node.js Version** selecciona **20.x**.

### 3. Revisar logs del deployment

En Vercel → **Deployments** → el deployment fallido → **Building** / **Logs**. Ahí verás si el fallo es en `npm install`, `npm run build` o en el runtime.
