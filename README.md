# **Data Lovers --- Caribbean Data Lovers**

## **Índice**

* [Resumen del proyecto](#resumen-del-proyecto)
* [Definición del Producto](#definición-del-producto)
* [Diseño y Prototipado](#diseño-y-prototipado)
* [Implementación de la Interfaz de Usuario (HTML/CSS/JS)](#implementación-de-la-interfaz-de-usuario)


***


## **1. Resumen del proyecto**

Se presenta una página web de estadísitcas de incidentes de transporte en los Estados Unidos de América, categorizados sengún el medio de desplazamiento.

Se crea con la finalidad de que sirva como herramienta de conocimiento y contexto del entorno para potenciales viajeros al país en cuestión.

La data fuente de las estadísticas se encuentra alojada en un archivo javascript estático que forma parte del boilerplate del proyecto y está clasificada de acuerdo a los años de incidencias y diferentes escenarios específicos para cada eventualidad, en cada caso, el valor de cada renglón el el número de personas afectadas.

* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  
El usuario tiene la posibilidad de conocer las estadísticas básicas de las incidencias en los medios de transporte categorizados, de esta manera puede tomar decisiones en cuanto a su desplazamiento, estadía o traslado a Estados Unidos de América.



## **2. Definición del Producto**

Dadas las características de la data en cuestión, se considera una aplicabilidad posible para el uso de las estadísticas. Una de ellas es la posibilidad de formar parte del proceso de preinvestigación de alguien que tenga planificado viajar a Estados Unidos de América.
Para conocer si realmente el conocimiento de las estadísticas representa una necesidad o resulta de utilidad para un potencial usuario, se diseñó una encuesta para tal fin.
Acá el [link de la encuesta](https://docs.google.com/forms/d/1vtAQ4m9FmVkbbpImCOrcmr7Rxy9xAKVBwqB55AdIcvg/) 

Los resultados arrojaron, en resumen, que personas de 35-54 años de edad, tienen un 73% de intenciones de viajar a Estados Unidos de América, planifican desplazarse en auto dentro de USA, no conocen cuál es el incidente de medios de trasporte que deja el mayor número de personas afectadas y al 93% le resultaría útil contar con una web o aplicación que le brindara información de los incidentes en el país destino. En cuanto a la manera de filtrar la información, a un 87% le gustaría que la información estuviese clasificada según el medio de transporte y poder verla de acuerdo al transcurso del tiempo. 
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562850380/DataLovers_muestraResEncuesta-15_wiv8la.jpg" alt="Muestra resultados de encuesta">


De acuerdo a los resultados de la encuesta, se confeccionaron 3 Historias de Usuario que se describen a continuación.

## **3 Historias de Usuario**

### **Historia de Usuario 1**
Enunciado: "Yo como usuario quiero tener la opción de escoger ver incidentes por medio de transporte según su clasificación general".

### **Definición de terminado**
- Nombre y Logotipo de la página
- Esqueleto básico HTML de index y secundarias sólo el archivo con su boilerplate
- Botones de tipos de medios de transporte
- Propuesta inicial de paleta de colores, tipografía y disposición inicial de elementos gráficos

### **Criterios de aceptación**
- Elementos visibles y dispuestos en el orden planificado dentro de la página
- El evento click sobre cada botón navega hacia la página secundaria correspondiente


### **Historia de Usuario 2**
Enunciado: "Yo como usuario quiero poder ver los incidentes con mayor número de personas afectadas, el total de incidentes en el medio seleccionado y poder filtrar por período de tiempo los diferentes incidentes del medio en cuestión".

### **Definición de terminado**
- Diseño visual consistente con la paleta de colores y distribución visual de los elementos, clara y minimalista.
- Esqueleto HTML que brinde espacios para cargar dinámicamente los resultados de la data consultada.
- Iconografía relacionada visible, en conjunto con headings o títulos que le den identificación al contenido.
- Lista de selección que permita escoger el período de años de interés del usuario.
- Botón para desplegar la data de acuerdo a la consulta del usuario.
- Divisiones HTML con tabla vacía que se llenará dinámicamente con los datos filtrados.


### **Criterios de aceptación**
- Elementos visibles y dispuestos en el orden planificado dentro de la página.
- Existe botón mostrar que ante el evento click, hace filtrado y cálculos correspondientes.
- Select con option que liste los años de interés desde 1991 en períodos de 5 años.
- La data filtrada por año se muestra en celdas individuales de acuerdo al tipo de incidente.
- El total de incidentes y los incidentes con mayor número de personas afectadas se muestra en espacios   visualmente delimitados para cada resultado de filtrado.


## **Historia de Usuario 3**
Enunciado: "Yo como usuario quiero poder ver los datos filtrados como porcentajes en un gráfico de torta y ver el porcentaje de todos los medios de transporte en el rango de tiempo seleccionado".

### **Definición de terminado**
- Inclusión de google chart como librería de generación de gráficos del proyecto.
- Creación y disposición en el esqueleto HTML de los elementos 

### **Criterios de aceptación**
- Se muestra el gráfico de torta de los datos filtrados utilizando google chart como librería incluída en el proyecto
- Se calcula y despliega el resultado de los porcentajes en elementos del HTML dispuestos para ello.



## **3 Diseño y Prototipado**

#### Sketches

Para diseñar la interfaz de usuario, primero se creó un esquema de flujo de acción de usuario y luego un sketch para plantear una disposición tentativa de los elementos de acuerdo a las acciones del usuario.
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562851419/WhatsApp_Image_2019-07-11_at_09.16.32_uffyqv.jpg
https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562851523/WhatsApp_Image_2019-07-11_at_09.16.33_acfmv2.jpg" alt="Sketch flujo de acciones de usuario">


Seguidamente se creó un sketch más estructurado para ordenar las ideas
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562856248/DataLovers_PrototipadoSecuencial_1-01_njjkxz.jpg" alt="Sketch inicial">



#### Prototipo de alta fidelidad

A continuación se creó el diseño de la interfaz seleccionando una paleta de colores cuya semiótica estuviese asociada al tema, en este caso relacionada con la señalética vial, se consideró un color principal acompañado de grises, esto con la finalidad de que el look and feel se notara profesional, calmado, seguro pero de prevención sin rayar en la extra atención, para que el usuario no se sienta incómodo al investigar un tema que es delicado de tocar ya que implica la seguridad de los medios de transporte.
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562852210/DataLovers_PaletaDeColores-16_f2a5bn.jpg" alt="Paleta de colores">


El diseño pasó por varias iteraciones, para adaptarse a la información requerida en cada historia de usuario y al mismo tiempo tratando de mantener el equilibrio visual en cada una de las propuestas.
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562856915/DataLovers_PrototipadoSecuencial-17_olnv5x.jpg
" alt="Varias iteraciones de diseño">

Durante las iteraciones de diseño, se adaptó la responsividad del sitio añadiendo un @media query que considerara la presentación de la información diferenciada para dispositivos hasta 992px (cara cubrir teléfonos móviles y tablets) y mayor a 992px (diseño por defecto) para computadoras de escritorio.

Como herramientas se utilizaron: [Figma](https://www.figma.com/file/Ok1UiDgL82o5wXQHM7VXXlx2/Data-Lovers?node-id=1%3A4) y Adobe Illustrator
<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1562858122/DataLovers_PrototipadoSecuencial_1-18_pvabuz.jpg" alt="Entorno de trabajo Adobe Illustrator">


#### Testeos de usabilidad
Se establecieron como objetivos para el testeo de usabilidad:
1) Entender el objetivo del sitio
2) Llegar a la información que se maneja en el sitio
3) Entender la información encontrada
4) Saber si el diseño visual le resulta agradable para el usuario

Para comprobar los objetivos se diseñaron tareas relacionadas: 

Para 1):
 ¿De qué crees tú que se trata este sitio?

Para 2):
 ¿Qué información crees que encontrarás al hacer click a estos items? (referido a los botones de tipo de transporte)
 Por favor ubica la información relacionada con incidentes ________(se indica un incidente en específico) para el año _____ (se le indica un año determinado)

 Para 3):
  Se le solicita al usuario que describa lo que va haciendo y verbalice lo que interpreta de la información mostrada.

Para 4):
 Se interpreta a partir de la tarea 3) y adicionalmente se solicita sus impresiones generales con respecto al sitio.


Test #1
Los resultados del primer test se registratron de manera manual y escrita. Como puntos resaltantes:
- Se sugiere reubicar el input de selección de años como lo principal que se muestre en la página
- Señala que la ubicación de la flecha de regreso está posicionada correctamente y le resulta fácil llegar a ella.
- Interpreta erróneamente el porcentaje de incidentes como anual, lo cual indica que la información debe reorganizarse para que pueda ser interpretada correctamente.
- El Look & Feel le parece agradable.

Test #2
https://www.loom.com/share/21a06bc4f2bc493d89435a4436940528

- Se sugiere reubicar la información de gráficos para contextualizarla de mejor manera con los datos mostrados

Test #3
https://www.loom.com/share/85725fbc38e54d54a4a024b5f7a52f72

- Se sugiere reubicar el input de selección, prescindir del botón "mostrar", modificar mayúsculas del título de la página secundaria y agregar labels que identifiquen cada uno de los renglones de información.


## **4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Deploy del sitio:
https://nigmasilmi.github.io/SCL010-data-lovers/src/index.html 


## **8. Evaluación**
Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### **General**

| Característica/Habilidad |
|--------------------------|
| Completitud |

### **Tech**

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### **UX**

| Habilidad |
|-----------|
| User Centricity |
| Visual Design |

### **Habilidades Blandas**

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

***


## **Checklist**

* [X] Usa VanillaJS.
* [X] No hace uso de `this`.
* [X] Pasa linter (`npm pretest`)
* [X] Pasa tests (`npm test`)
* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [X] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [X] Incluye historias de usuario en `README.md`.
* [X] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [X] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [X] Incluye link a Figma en `README.md`.
* [X] Incluye link a Trello en `README.md`.
* [X] Incluye link a Loom en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [X] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [X] UI: Permite ordenar data por uno o más campos (asc y desc).
* [X] UI: Permite filtrar data en base a una condición.
