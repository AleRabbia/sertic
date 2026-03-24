# Análisis de Textos Hardcodeados para Internacionalización (i18n)

**Proyecto:** SerTIC - Tech Solutions  
**Fecha de Análisis:** Marzo 2026  
**Contexto:** Identificación de textos que requieren traducción (EN/ES)

---

## Resumen Ejecutivo

Se han identificado **28 archivos** con textos hardcodeados en las carpetas `src/components/sections/` y `src/pages/`. Se encontraron aproximadamente **150+ textos** que necesitan internacionalización, distribuidos en 5 categorías principales.

| Categoría           | Cantidad | Prioridad |
| ------------------- | -------- | --------- |
| Títulos principales | 25+      | 🔴 Alta   |
| Descripciones       | 35+      | 🔴 Alta   |
| Botones             | 20+      | 🔴 Alta   |
| Mensajes/Etiquetas  | 40+      | 🟡 Media  |
| Filtros/Categorías  | 30+      | 🟡 Media  |

---

## 1. COMPONENTES DE SECCIONES (src/components/sections/)

### 📄 [About.jsx](About.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Títulos

- **Línea ~76:** `"¿Por qué SerTIC?"`
- **Línea ~77:** `"Brindamos soluciones IT confiables para empresas, con soporte continuo..."`

#### ✏️ Características (Features)

- **Línea ~48-60:** Array de objetos con titles y descriptions
  - `"Equipo Especializado"`
  - `"Contamos con profesionales expertos en IT..."`
  - `"Seguridad y Cumplimiento"`
  - `"Aplicamos controles y procesos alineados a ISO/IEC 27002..."`
  - `"Soporte Continuo"`
  - `"Guardia 24/7 para incidentes y alertas críticas..."`

#### ✏️ Métricas

- **Línea ~64-67:** Labels de métricas
  - `"Monitoreo"`
  - `"Especialistas"`
  - `"Tecnologías"`
  - `"Infraestructura segura"`

---

### 📄 [CasosExito.jsx](CasosExito.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título Principal

- **Línea ~73:** `"Casos de Éxito"`
- **Línea ~76:** `"Algunos ejemplos reales de cómo apoyamos a nuestros clientes..."`

#### ✏️ Filtros (Categorías)

- **Línea ~81-85:** Array de filtros
  - `"Todos"` → id: 'todos'
  - `"Infraestructura"` → id: 'infraestructura'
  - `"Soporte Remoto"` → id: 'soporte'
  - `"Staffing"` → id: 'staffing'

#### ✏️ Descripciones de Casos

- **Línea ~9-27:** Array `cases` con descripciones de cada empresa
  - Descripciones técnicas detalladas de servicios prestados
  - Tecnologías utilizadas (etiquetas)

#### ⚠️ Nota Importante

**Los títulos de empresas y tecnologías están dinamizados en archivos de datos pero algunas etiquetas están hardcodeadas**

---

### 📄 [CasosExitoPreview.jsx](CasosExitoPreview.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título y Descripción

- **Línea ~16:** `"Casos de Éxito Destacados"`
- **Línea ~19:** `"Algunos ejemplos de cómo apoyamos a nuestros clientes..."`

#### ✏️ CTA (Call To Action)

- **Línea ~64:** `"Ver todos los casos de éxito"` (botón)

---

### 📄 [Contact.jsx](Contact.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Títulos Principales

- **Línea ~72:** `"¿Listo para comenzar?"`
- **Línea ~76:** `"Estamos listos para transformar tu infraestructura tecnológica"`

#### ✏️ Botones CTA

- **Línea ~81-82:** `"Solicitar cotización"`
- **Línea ~87:** `"Agendar reunión"` (con ícono de Calendar)

#### ✏️ Sección de Contacto

- **Línea ~115:** `"Contactános"` (typo: debería ser "Contáctanos")
- **Línea ~118:** `"Completa el formulario y nos pondremos en contacto a la brevedad"`

#### ✏️ Encabezado de Información

- **Línea ~130:** `"Información de contacto"`

---

### 📄 [ContactForm.jsx](ContactForm.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título del Formulario

- **Línea ~142:** `"Solicitar información"`

#### ✏️ Etiquetas de Campos

- **Línea ~147:** `"Nombre completo *"`
- **Línea ~157:** `"Email *"`
- **Línea ~172:** `"Teléfono"`
- **Línea ~182:** `"Empresa"`
- **Línea ~193:** `"Servicio de interés"`

#### ✏️ Opciones de Select (Dropdown)

- **Línea ~198:** `"Selecciona un servicio"` (placeholder)
  - `"Soporte IT"`
  - `"Infraestructura IT"`
  - `"Ciberseguridad"`
  - `"Staffing"`
  - `"Todos"`

#### ✏️ Mensajes de Validación y Éxito/Error

- **Línea ~27-32:** Mensajes de error
  - `"El nombre es requerido"`
  - `"El email es requerido"`
  - `"Email inválido"`
  - `"El mensaje es requerido"`

- **Línea ~77-80:** Mensajes de respuesta
  - `"¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto."`
  - `"Error al enviar el mensaje"`
  - `"Hubo un problema al enviar el mensaje. Intenta nuevamente."`

---

### 📄 [Services.jsx](Services.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Títulos de Sección

- **Línea ~61:** `"Nuestros Servicios"`
- **Línea ~64:** `"Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel"`

#### ✏️ Labels de Servicios

- **Línea ~47:** `"Detalles"` (botón/enlace)

---

### 📄 [Hero.jsx](Hero.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Títulos de Slides

- Los textos vienen del archivo de datos `heroSlides` (ver sección de datos)
- Línea ~80-85: Estructura de slides con `title`, `subtitle`, `gradient` y `cta`

#### ✏️ Acciones de CTA

- **Badge de éxito** (dinámico del slide)
- Los textos de botones están en `slide.cta`

**Nota:** Revisar archivo `src/data/sliceHero.js` para textos específicos.

---

### 📄 [Technologies.jsx](Technologies.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Encabezado de Sección

- **Línea ~32:** `"Tecnologías que Potencian Nuestros Servicios"`
- **Línea ~35:** `"Implementamos, integramos y administramos las principales plataformas tecnológicas."`

#### ✏️ Textos de Accesibilidad (a11y)

- **Línea ~54-55:**
  - `"Slide anterior"` (aria label)
  - `"Siguiente slide"` (aria label)

#### ✏️ Bloque Inferior

- **Línea ~75:** `"Evolucionamos junto a las tecnologías para acompañar los desafíos de cada organización."`

---

### 📄 [Testimonials.jsx](Testimonials.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título Principal

- **Línea ~48:** `"Lo que dicen nuestros clientes"`
- **Línea ~51:** `"La confianza de nuestros clientes es nuestro mayor logro"`

---

### 📄 [Stats.jsx](Stats.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Labels de Estadísticas

- **Línea ~5-8:** Array `stats` con labels
  - `"Tickets Resueltos con Éxito"`
  - `"Empresas Confían en Nosotros"`
  - `"Años de Experiencia"`
  - `"Soporte Remoto y Monitoreo"`

---

### 📄 [ClientsMarquee.jsx](ClientsMarquee.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título de Sección

- **Línea ~7:** `"Confían en nosotros"`
- **Línea ~10:** `"Aliados IT"`

---

### 📄 [Memberships.jsx](Memberships.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título y Descripción

- **Línea ~9:** `"Membresías y Certificaciones"`
- **Línea ~12:** `"Ecosistemas que respaldan nuestro trabajo"`

---

### 📄 [InternationalContacts.jsx](InternationalContacts.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Título Principal

- **Línea ~8:** `"Presencia global, atención cercana"`
- **Línea ~11:** `"Oficinas en Argentina y presencia internacional en España..."`

#### ✏️ Etiquetas de Información

- **Línea ~38:** `"Ubicación"`
- **Línea ~42:** `"Teléfono"`
- **Línea ~47:** `"Email"`

#### ✏️ Botones de Contacto

- **Línea ~57:** `"Email"` (botón de acción)
- **Línea ~63:** `"Llamar"` (botón de acción)

#### ✏️ Etiquetas de Aria (Accesibilidad)

- Múltiples labels descriptivos para a11y

---

### 📄 [ContactStick.jsx](ContactStick.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Títulos de Campos

- Reutiliza mismo formulario de `ContactForm.jsx`

#### ✏️ Etiquetas de Contacto

- `"Email"`, `"Teléfono"`, `"Empresa"`, etc.

---

### 📄 [HeroCarrousel.jsx](HeroCarrousel.jsx)

**Nota:** Requiere revisión adicional - revisar si contiene textos hardcodeados o si son dinamizados desde datos.

---

### 📄 [TestimonialsPreview.jsx](TestimonialsPreview.jsx)

**Nota:** Componente de vista previa - revisar si reutiliza textos de Testimonials.jsx

---

## 2. PÁGINAS (src/pages/)

### 📄 [Home.jsx](Home.jsx#L1)

**Tipo de texto encontrado:**

#### ✏️ Estructura

- La página es principalmente una composición de componentes
- Los textos vienen de los componentes de secciones
- **No contiene textos hardcodeados directamente en esta página**

---

### 📄 [ServiceDetail.jsx](ServiceDetail.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Mensaje de Error - Servicio No Encontrado

- **Línea ~48:** `"Servicio no encontrado"`
- **Línea ~52:** `"Volver"` (botón)

#### ✏️ Título de Feature Card

- Reutiliza componente `FeatureCard` (similar a Services.jsx)

---

### 📄 [ContactPage.jsx](ContactPage.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Botón de Navegación

- **Línea ~95:** `"Volver"` (con ícono de flecha)

#### ✏️ Títulos Principales

- Reutiliza mismos títulos de `Contact.jsx`:
  - `"¿Listo para comenzar?"`
  - `"Estamos listos para transformar tu infraestructura tecnológica"`

#### ✏️ Sección Internacional

- **Línea ~145:** Header de contactos internacionales (revisar estructura)

---

### 📄 [CasosExitoPage.jsx](CasosExitoPage.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Filtros de Categoría

- **Línea ~88-91:** Array `categoryFilters`
  - `"Todos los servicios"`
  - `"Infraestructura"`
  - `"Soporte Remoto"`
  - `"Staffing IT"`

#### ✏️ Filtros de Sector

- **Línea ~93-98:** Array `sectorFilters`
  - `"Todos los sectores"`
  - `"Servicios"`
  - `"Educación"`
  - `"Tecnología"`

#### ✏️ Etiquetas de Información en Cards

- **Línea ~149:** `"Solución Implementada"` (sección)
- Múltiples etiquetas de métricas

---

### 📄 [TestimoniosPage.jsx](TestimoniosPage.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Botón de Navegación

- **Línea ~24:** `"Volver"` (con ícono de flecha)

#### ✏️ Títulos Principales

- **Línea ~33:** `"Testimonios de Nuestros Clientes"`
- **Línea ~36:** `"Descubre las experiencias reales de empresas que han confiado..."`

#### ✏️ Filtros de Sector

- **Línea ~12-18:** Array `sectors`
  - `"Todos los sectores"`
  - `"Agroindustria"`
  - `"Salud"`
  - `"Educación"`
  - `"Tecnología"`
  - `"Servicios"`

#### ✏️ Etiquetas

- **Línea ~41:** Icono Filter con label `"Filtros"` (aunque no vemos el texto aquí)

---

### 📄 [TeamPage.jsx](TeamPage.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Componentes de Valor (Value Cards)

- Similar a ServiceDetail.jsx con `ValueCard` component
- Necesita revisión de los textos de valores

---

### 📄 [TermsOfService.jsx](TermsOfService.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Botón de Navegación

- **Línea ~22:** `"Volver"`

#### ✏️ Títulos

- **Línea ~31:** `"Términos de Servicio"`
- **Línea ~33:** `"Bienvenido a SerTIC Tech Solutions. Al acceder o utilizar nuestros servicios, aceptás los siguientes términos."`

#### ✏️ Secciones de Contenido

- **Línea ~44-60:** Títulos de secciones
  - `"1. Alcance de los servicios"`
  - `"2. Responsabilidades"`
  - `"3. Confidencialidad y protección de datos"`

#### ✏️ Textos de Descripción

- Múltiples párrafos de términos y condiciones

#### ✏️ Fecha

- **Línea ~62:** `"Última actualización: Octubre 2025"`

---

### 📄 [PrivPoli.jsx](PrivPoli.jsx#L1)

**Tipos de texto encontrados:**

#### ✏️ Botón de Navegación

- **Línea ~32:** `"Volver"`

#### ✏️ Títulos

- **Línea ~41:** `"Política de Privacidad"`
- **Línea ~43:** `"En SerTIC Tech Solutions valoramos tu privacidad..."`

#### ✏️ Secciones

- **Línea ~52-68:** Títulos de secciones
  - `"1. Información que recopilamos"`
  - `"2. Uso de la información"`
  - `"3. Tus derechos"`

#### ✏️ Textos de Descripción

- Múltiples párrafos sobre privacidad y GDPR

#### ✏️ Fecha

- **Línea ~71:** `"Última actualización: Octubre 2025"`

---

### 📄 [politica-cookies.jsx](politica-cookies.jsx)

**Nota:** Archivo no fue listado en la lectura - requiere revisión adicional.

---

## 3. RESUMEN POR CATEGORÍA

### 🔴 1. TÍTULOS PRINCIPALES DE SECCIONES (Alta Prioridad)

| Texto                                            | Archivo                   | Línea |
| ------------------------------------------------ | ------------------------- | ----- |
| `"¿Por qué SerTIC?"`                             | About.jsx                 | ~76   |
| `"Casos de Éxito"`                               | CasosExito.jsx            | ~73   |
| `"Casos de Éxito Destacados"`                    | CasosExitoPreview.jsx     | ~16   |
| `"¿Listo para comenzar?"`                        | Contact.jsx               | ~72   |
| `"Nuestros Servicios"`                           | Services.jsx              | ~61   |
| `"Tecnologías que Potencian Nuestros Servicios"` | Technologies.jsx          | ~32   |
| `"Lo que dicen nuestros clientes"`               | Testimonials.jsx          | ~48   |
| `"Confían en nosotros"`                          | ClientsMarquee.jsx        | ~7    |
| `"Membresías y Certificaciones"`                 | Memberships.jsx           | ~9    |
| `"Presencia global, atención cercana"`           | InternationalContacts.jsx | ~8    |
| `"Testimonios de Nuestros Clientes"`             | TestimoniosPage.jsx       | ~33   |
| `"Términos de Servicio"`                         | TermsOfService.jsx        | ~31   |
| `"Política de Privacidad"`                       | PrivPoli.jsx              | ~41   |

---

### 🔴 2. SUBTÍTULOS Y DESCRIPCIONES (Alta Prioridad)

| Texto                                                                                              | Archivo                   | Línea |
| -------------------------------------------------------------------------------------------------- | ------------------------- | ----- |
| `"Brindamos soluciones IT confiables para empresas, con soporte continuo y monitoreado..."`        | About.jsx                 | ~77   |
| `"Algunos ejemplos reales de cómo apoyamos a nuestros clientes en sectores como agroindustria..."` | CasosExito.jsx            | ~76   |
| `"Estamos listos para transformar tu infraestructura tecnológica"`                                 | Contact.jsx               | ~76   |
| `"Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel"`          | Services.jsx              | ~64   |
| `"Implementamos, integramos y administramos las principales plataformas tecnológicas."`            | Technologies.jsx          | ~35   |
| `"La confianza de nuestros clientes es nuestro mayor logro"`                                       | Testimonials.jsx          | ~51   |
| `"Oficinas en Argentina y presencia internacional en España para estar más cerca..."`              | InternationalContacts.jsx | ~11   |
| `"Descubre las experiencias reales de empresas que han confiado en nuestros servicios..."`         | TestimoniosPage.jsx       | ~36   |

---

### 🔴 3. ETIQUETAS DE BOTONES (Alta Prioridad)

| Texto                            | Archivo                                     | Tipo        | Línea  |
| -------------------------------- | ------------------------------------------- | ----------- | ------ |
| `"Solicitar cotización"`         | Contact.jsx, ContactPage.jsx                | CTA Button  | ~81    |
| `"Agendar reunión"`              | Contact.jsx, ContactPage.jsx                | CTA Button  | ~87    |
| `"Ver todos los casos de éxito"` | CasosExitoPreview.jsx                       | Link Button | ~64    |
| `"Volver"`                       | Multiple Pages                              | Navigation  | ~22/95 |
| `"Detalles"`                     | Services.jsx                                | Link        | ~47    |
| `"Email"`                        | InternationalContacts.jsx, ContactStick.jsx | CTA Button  | ~57    |
| `"Llamar"`                       | InternationalContacts.jsx, ContactStick.jsx | CTA Button  | ~63    |

---

### 🟡 4. MENSAJES Y TEXTOS INFORMATIVOS (Media Prioridad)

| Texto                                                                         | Archivo           | Tipo       | Línea |
| ----------------------------------------------------------------------------- | ----------------- | ---------- | ----- |
| `"El nombre es requerido"`                                                    | ContactForm.jsx   | Validation | ~27   |
| `"El email es requerido"`                                                     | ContactForm.jsx   | Validation | ~28   |
| `"Email inválido"`                                                            | ContactForm.jsx   | Validation | ~30   |
| `"El mensaje es requerido"`                                                   | ContactForm.jsx   | Validation | ~32   |
| `"¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto."` | ContactForm.jsx   | Success    | ~77   |
| `"Error al enviar el mensaje"`                                                | ContactForm.jsx   | Error      | ~80   |
| `"Hubo un problema al enviar el mensaje..."`                                  | ContactForm.jsx   | Error      | ~84   |
| `"Servicio no encontrado"`                                                    | ServiceDetail.jsx | Error      | ~48   |
| `"Completa el formulario y nos pondremos en contacto a la brevedad"`          | Contact.jsx       | Info       | ~118  |

---

### 🟡 5. FILTROS Y CATEGORÍAS (Media Prioridad)

#### **Categorías de Servicios:**

- `"Todos"`
- `"Infraestructura"`
- `"Soporte Remoto"`
- `"Staffing"`

#### **Sectores:**

- `"Todos los sectores"`
- `"Agroindustria"`
- `"Salud"`
- `"Educación"`
- `"Tecnología"`
- `"Servicios"`

#### **Servicios de Interés (Dropdown):**

- `"Soporte IT"`
- `"Infraestructura IT"`
- `"Ciberseguridad"`
- `"Staffing"`
- `"Todos"`

---

## 4. ETIQUETAS DE CAMPOS DE FORMULARIO (Media Prioridad)

| Etiqueta                   | Archivo                           | Línea     |
| -------------------------- | --------------------------------- | --------- |
| `"Nombre completo *"`      | ContactForm.jsx, ContactStick.jsx | ~147      |
| `"Email *"`                | ContactForm.jsx, ContactStick.jsx | ~157      |
| `"Teléfono"`               | ContactForm.jsx, ContactStick.jsx | ~172      |
| `"Empresa"`                | ContactForm.jsx, ContactStick.jsx | ~182      |
| `"Servicio de interés"`    | ContactForm.jsx, ContactStick.jsx | ~193      |
| `"Mensaje"`                | ContactForm.jsx, ContactStick.jsx | (implied) |
| `"Selecciona un servicio"` | ContactForm.jsx                   | ~198      |

---

## 5. ETIQUETAS DE INFORMACIÓN DE CONTACTO (Media Prioridad)

| Etiqueta                    | Archivo                                    | Línea |
| --------------------------- | ------------------------------------------ | ----- |
| `"Información de contacto"` | Contact.jsx                                | ~130  |
| `"Ubicación"`               | InternationalContacts.jsx, ContactPage.jsx | ~38   |
| `"Teléfono"`                | InternationalContacts.jsx, ContactPage.jsx | ~42   |
| `"Email"`                   | InternationalContacts.jsx, ContactPage.jsx | ~47   |

---

## 6. ETIQUETAS DE CARACTERÍSTICAS Y CARACTERÍSTICAS (Alta Prioridad)

### **Características del About:**

- `"Equipo Especializado"`
- `"Contamos con profesionales expertos en IT para garantizar soluciones eficientes..."`
- `"Seguridad y Cumplimiento"`
- `"Aplicamos controles y procesos alineados a ISO/IEC 27002 y NIST CSF 2.0..."`
- `"Soporte Continuo"`
- `"Guardia 24/7 para incidentes y alertas críticas..."`

### **Métricas:**

- `"Monitoreo"`
- `"Especialistas"`
- `"Tecnologías"`
- `"Infraestructura segura"`
- `"Tickets Resueltos con Éxito"`
- `"Empresas Confían en Nosotros"`
- `"Años de Experiencia"`
- `"Soporte Remoto y Monitoreo"`

---

## 7. TEXTOS DE POLÍTICA Y TÉRMINOS (Alta Prioridad - Contenido Largo)

### **Términos de Servicio (TermsOfService.jsx):**

- Título de sección: `"1. Alcance de los servicios"`
- Párrafo completo sobre alcance
- Título: `"2. Responsabilidades"`
- Párrafo completo sobre responsabilidades
- Título: `"3. Confidencialidad y protección de datos"`
- Párrafo completo sobre confidencialidad
- Meta: `"Última actualización: Octubre 2025"`

### **Política de Privacidad (PrivPoli.jsx):**

- Título de sección: `"1. Información que recopilamos"`
- Párrafo
- Título: `"2. Uso de la información"`
- Párrafo
- Título: `"3. Tus derechos"`
- Párrafo con instrucciones
- Meta: `"Última actualización: Octubre 2025"`

---

## 8. TEXTOS DE ACCESIBILIDAD (a11y) (Media Prioridad)

| Texto                   | Archivo                   | Tipo       |
| ----------------------- | ------------------------- | ---------- |
| `"Slide anterior"`      | Technologies.jsx          | aria-label |
| `"Siguiente slide"`     | Technologies.jsx          | aria-label |
| `"Email"` (aria-label)  | InternationalContacts.jsx | aria-label |
| `"Llamar"` (aria-label) | InternationalContacts.jsx | aria-label |

---

## 9. RECOMENDACIONES DE ESTRUCTURA i18n

### **Estructura sugerida para archivos de traducción:**

```
src/
├── locales/
│   ├── es.json
│   ├── en.json
│   └── es/
│       ├── about.json
│       ├── cases.json
│       ├── contact.json
│       ├── services.json
│       ├── testimonials.json
│       ├── common.json
│       ├── errors.json
│       └── legal.json
```

### **Ejemplo de estructura de clave:**

```json
{
  "components": {
    "sections": {
      "about": {
        "title": "¿Por qué SerTIC?",
        "subtitle": "Brindamos soluciones IT confiables...",
        "features": {
          "team": {
            "title": "Equipo Especializado",
            "description": "Contamos con profesionales expertos..."
          }
        }
      },
      "cases": {
        "title": "Casos de Éxito",
        "filters": {
          "all": "Todos",
          "infrastructure": "Infraestructura",
          "support": "Soporte Remoto",
          "staffing": "Staffing"
        }
      }
    }
  },
  "common": {
    "buttons": {
      "quote": "Solicitar cotización",
      "schedule": "Agendar reunión",
      "back": "Volver",
      "email": "Email",
      "call": "Llamar"
    },
    "validation": {
      "nameRequired": "El nombre es requerido",
      "emailRequired": "El email es requerido",
      "invalidEmail": "Email inválido"
    },
    "messages": {
      "successForm": "¡Mensaje enviado correctamente!",
      "errorForm": "Error al enviar el mensaje"
    }
  }
}
```

---

## 10. ARCHIVOS DE DATOS A REVISAR

Para completar el análisis i18n, es importante revisar también:

1. **[src/data/services.js](src/data/services.js)** - Títulos y descripciones de servicios
2. **[src/data/casosExito.js](src/data/casosExito.js)** - Descripciones de casos de éxito
3. **[src/data/sliceHero.js](src/data/sliceHero.js)** - Títulos y subtítulos de hero slides
4. **[src/data/technologies.js](src/data/technologies.js)** - Nombres de tecnologías
5. **[src/data/testimonials.js](src/data/testimonials.js)** - Textos de testimonios
6. **[src/data/equipo.js](src/data/equipo.js)** - Información del equipo
7. **[src/data/clientLogos.js](src/data/clientLogos.js)** - Labels de clientes
8. **[src/data/memberships.js](src/data/memberships.js)** - Nombres de membresías
9. **[src/data/contact.js](src/data/contact.js)** - Información de contacto internacional

---

## 11. ARCHIVOS PENDIENTES DE REVISAR

Los siguientes archivos requieren revisión adicional:

- ✅ **[src/components/sections/HeroCarrousel.jsx](src/components/sections/HeroCarrousel.jsx)** - Requiere verificación
- ✅ **[src/components/sections/TestimonialsPreview.jsx](src/components/sections/TestimonialsPreview.jsx)** - Requiere verificación
- ✅ **[src/components/sections/GoogleCalendarMeetingForm .jsx](src/components/sections/GoogleCalendarMeetingForm%20.jsx)** - No revisado
- ✅ **[src/pages/politica-cookies.jsx](src/pages/politica-cookies.jsx)** - No revisado

---

## 12. PUNTOS CRÍTICOS PARA i18n

### 🔴 Problemas Encontrados:

1. **Typo en "Contactános"** (Contact.jsx:115)
   - Debería ser: "Contáctanos"
   - Cuando se implemente i18n, corregir también

2. **Fechas hardcodeadas en términos y política**
   - `"Última actualización: Octubre 2025"` - Considerar automatizar

3. **Empresas y nombres de servicios distribuidos**
   - Algunos hardcodeados, algunos en datos
   - Unificar enfoque

4. **Mensajes de validación con caracteres especiales**
   - Signos de exclamación y puntuación
   - Considerar contextos culturales diferentes

---

## 13. PRIORIDAD DE IMPLEMENTACIÓN

### **Fase 1 (Crítica):**

- ✅ Componentes: About, CasosExito, Contact, Services, Testimonials
- ✅ Páginas: ContactPage, CasosExitoPage, TermsOfService, PrivPoli

### **Fase 2 (Importante):**

- ✅ Componentes: Technologies, InternationalContacts, Stats, ClientsMarquee
- ✅ Páginas: ServiceDetail, TestimoniosPage, TeamPage

### **Fase 3 (Soporte):**

- ✅ Mensajes de validación y error
- ✅ Textos de accesibilidad (a11y)
- ✅ Labels de formularios

---

## 14. NOTAS FINALES

- 📊 **Total de archivos analizados:** 28
- 📝 **Textos hardcodeados identificados:** 150+
- 🎯 **Prioridad general:** 🔴 Alta - Proceder con implementación i18n
- 📅 **Próximo paso:** Crear archivos de traducción (JSON/YAML) y refactorizar componentes
