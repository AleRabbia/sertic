# 🌍 Guía de Multiidioma - Sistema i18n

## 📋 Descripción General

La aplicación ahora soporta múltiples idiomas usando **i18next** y **react-i18next**.

### Idiomas Soportados

- 🇪🇸 **Español** (es) - Idioma por defecto
- 🇺🇸 **Inglés** (en)

---

## 🚀 Cómo Usar i18n en Componentes

### Opción 1: Hook Personalizado `useI18n()` (RECOMENDADO)

```jsx
import { useI18n } from "../hooks/useI18n";

function MiComponente() {
  const { t, currentLanguage, changeLanguage } = useI18n();

  return (
    <div>
      <h1>{t("hero.title1")}</h1>
      <p>{t("hero.subtitle1")}</p>
      <button onClick={() => changeLanguage("en")}>Cambiar a Inglés</button>
    </div>
  );
}
```

### Opción 2: Hook de react-i18next

```jsx
import { useTranslation } from "react-i18next";

function MiComponente() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title1")}</h1>
      <p>Idioma actual: {i18n.language}</p>
    </div>
  );
}
```

---

## 📂 Estructura de Archivos de Traducción

```
src/
├── locales/
│   ├── es/
│   │   └── common.json    # Traducción al español
│   └── en/
│       └── common.json    # Traducción al inglés
├── i18n.js                # Configuración de i18n
└── hooks/
    └── useI18n.js         # Hook personalizado
```

---

## 📝 Agregar Nuevas Traducciones

### Paso 1: Agregar la clave en ambos archivos JSON

**src/locales/es/common.json:**

```json
{
  "miSección": {
    "titulo": "Mi Título",
    "descripcion": "Mi descripción"
  }
}
```

**src/locales/en/common.json:**

```json
{
  "miSección": {
    "titulo": "My Title",
    "descripcion": "My description"
  }
}
```

### Paso 2: Usar en el componente

```jsx
import { useI18n } from "../hooks/useI18n";

function MiComponente() {
  const { t } = useI18n();

  return (
    <>
      <h1>{t("miSección.titulo")}</h1>
      <p>{t("miSección.descripcion")}</p>
    </>
  );
}
```

---

## 🔧 Estructura de Traducciones Actuales

Las claves están organizadas por secciones:

- **nav**: Navegación
- **hero**: Sección hero/slider
- **services**: Servicios
- **stats**: Estadísticas
- **casosExito**: Casos de éxito
- **testimonios**: Testimoniales
- **contacto**: Contacto
- **footer**: Pie de página
- **language**: Selector de idioma
- **common**: Textos comunes

---

## 🎯 Checklist para Traducir Componentes

Cuando traduzcas un componente, asegúrate de:

- [x] Importar `useI18n` o `useTranslation`
- [x] Agregar todas las claves en `es/common.json`
- [x] Agregar todas las claves en `en/common.json`
- [x] Reemplazar strings hardcodeados con `t('clave')`
- [x] Probar el cambio de idioma

---

## 💾 Persistencia del Idioma

El idioma elegido se guarda en `localStorage` con la clave `language`.

Para cambiar el idioma de forma predeterminada, edita `src/i18n.js`:

```js
const savedLanguage = localStorage.getItem("language") || "es"; // 'es' es el default
```

---

## 🌐 Selector de Idioma

El componente `LanguageSwitcher` está ubicado en:

- **Desktop**: Navbar principal (espaciado con los links)
- **Mobile**: Menú desplegable

Ubicación del componente: `src/components/ui/LanguageSwitcher.jsx`

---

## ⚡ Componentes Traducidos

| Componente             | Estado    |
| ---------------------- | --------- |
| Navigation.jsx         | ✅ Listo  |
| LanguageSwitcher.jsx   | ✅ Listo  |
| Archivos de traducción | ✅ Listos |
| Hook useI18n           | ✅ Listo  |

---

## 📌 Próximos Pasos

1. Traduce todos los componentes principales:
   - Reemplaza textos en componentes de secciones
   - Actualiza páginas dinámicas
2. Agrega más idiomas si es necesario
3. Sincroniza datos dinámicos (si es necesario)

---

## 🐛 Solución de Problemas

### El idioma no cambia

- Verifica que el localStorage esté habilitado
- Recarga la página después de cambiar idioma
- Abre las DevTools: `console.log(localStorage.getItem('language'))`

### Alguna clave no aparece traducida

- Verifica que la clave esté en ambos archivos JSON
- Comprueba la sintaxis JSON (sin errores de caracteres especiales)
- Busca la clave exacta en ambos archivos

---

## 📚 Referencias

- [i18next Documentación](https://www.i18next.com/)
- [react-i18next Documentación](https://react.i18next.com/)
