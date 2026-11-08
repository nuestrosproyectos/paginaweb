# Red de técnicos de gama blanca — Landing de captación

Sitio estático para captar técnicos de reparación de gama blanca en España desde campañas de TikTok.

Incluye:
- **`index.html`** — landing de captación (mensaje opaco, sin revelar el modelo de negocio) con formulario que abre WhatsApp con los datos ya escritos.
- **`privacidad.html`** — política de privacidad (la URL que TikTok Ads exige para los formularios).

## ✏️ Cómo personalizarlo (1 solo archivo)

Edita **`js/config.js`** y cambia estos valores:

```js
window.CONFIG = {
  marca: "Tu Marca",              // tu nombre comercial
  whatsapp: "34600000000",        // tu WhatsApp, formato internacional SIN '+' ni espacios
  email: "contacto@tudominio.com",// email para la política de privacidad
  responsable: "España",
};
```

Ejemplo de `whatsapp` para un móvil español `600 11 22 33` → `34600112233`.

## 🚀 Cómo publicarlo

Es HTML estático, funciona en cualquier hosting. Opciones gratis:

- **GitHub Pages:** Settings → Pages → Deploy from branch → elige la rama y `/root`.
- **Netlify / Vercel:** arrastra la carpeta o conecta el repo. Deploy automático.

Una vez publicado tendrás:
- Landing: `https://tudominio.com/`
- Política de privacidad: `https://tudominio.com/privacidad.html` ← esta URL es la que pegas en TikTok Ads.

## 🔒 Nota legal
La política de privacidad es una plantilla base conforme a RGPD/LOPDGDD. Revisa los datos del responsable y, si tratas muchos datos, consulta con un asesor.
