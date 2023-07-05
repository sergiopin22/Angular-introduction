## Que es un componente en Angular?
### Rta: En Angular, un componente es la unidad básica de construcción de una aplicación. Representa una parte de la interfaz de usuario (UI) y está compuesto por una combinación de plantillas HTML, estilos CSS y lógica de programación escrita en TypeScript.

## Como crear un componente manualmente, y mostrarlo en el html global?
### Rta: Un componente en Angular encapsula una funcionalidad específica y se encarga de manejar la lógica de esa parte de la interfaz de usuario. Puede ser cualquier elemento visual, desde un botón o un formulario hasta una sección completa de la página. Además, los componentes se pueden anidar dentro de otros componentes para construir interfaces de usuario más complejas.

## Que es un template en angular ? 
Rta: Los componentes son la base del desarrollo de aplicaciones en Angular, ya que permiten crear una estructura modular y reutilizable, lo que facilita el mantenimiento y la escalabilidad del código.

## Que es un decorador en angular ?
Rta: En Angular, un decorador es una función especial que se utiliza para modificar la clase o el miembro al que se aplica. Los decoradores se utilizan ampliamente en Angular para agregar metadatos y funcionalidad adicional a las clases, métodos, propiedades y parámetros.

## ¿Cuál es la diferencia entre interpolación ({{ }}) y enlace de propiedad ([ ]) en Angular?
Rta: , la interpolación ({{ }}) se utiliza para mostrar valores de propiedades del componente en la plantilla, mientras que el enlace de propiedad ([ ]) permite establecer una conexión bidireccional entre una propiedad del componente y un elemento HTML en la plantilla, lo que permite la lectura y escritura de datos.

## Que es modulo, como se importa y donde se importan?
Rta: 
En Angular, un módulo es una unidad organizativa que agrupa componentes, directivas, servicios y otros artefactos relacionados para proporcionar una funcionalidad específica dentro de una aplicación. Los módulos ayudan a mantener el código organizado, modular y reutilizable.

Un módulo en Angular se define mediante la decoración @NgModule en una clase TypeScript. Esta clase actúa como un punto de entrada para configurar y definir las dependencias y componentes relacionados con ese módulo.

## ¿Cuál es la diferencia entre módulos y componentes en Angular?
Rta: los componentes son las partes individuales y reutilizables que conforman la interfaz de usuario de una aplicación Angular, mientras que los módulos son las unidades organizativas que agrupan componentes y otros artefactos relacionados para proporcionar una funcionalidad específica. Los componentes se componen entre sí para construir la interfaz de usuario, mientras que los módulos se utilizan para organizar y configurar los componentes y otros artefactos de la aplicación.

## Como crear un componente de forma automatica ?
Rta: En Angular, puedes crear un componente de forma automática utilizando la interfaz de línea de comandos (CLI) de Angular, también conocida como Angular CLI. A continuación, se muestra el comando para crear un componente:

ng generate component nombre-del-componente

## Que es una Directiva ?
Rta: Existen dos tipos principales de directivas en Angular:

Directivas de atributo: Se aplican como atributos en elementos HTML existentes para cambiar su apariencia o comportamiento. Estas directivas modifican el comportamiento de un elemento en particular y se activan cuando se agrega el atributo específico al elemento.

Directivas estructurales: Se utilizan para manipular la estructura del DOM agregando, eliminando o reemplazando elementos en función de ciertas condiciones. Estas directivas afectan a un grupo de elementos y se activan mediante una directiva estructural específica que se coloca en un elemento contenedor.

## Que directivas son las mas usadas ?
Rta: 
En Angular, existen varias directivas que son ampliamente utilizadas en el desarrollo de aplicaciones. A continuación, se mencionan algunas de las directivas más comunes y ampliamente utilizadas:

ngIf: Esta directiva estructural se utiliza para mostrar u ocultar elementos del DOM en función de una expresión booleana. Es útil para mostrar contenido condicionalmente en la plantilla.

ngFor: Esta directiva estructural se utiliza para iterar sobre una colección de elementos y generar elementos del DOM repetidamente. Es útil para mostrar listas dinámicas en la plantilla.

ngSwitch: Esta directiva estructural se utiliza para realizar múltiples condiciones y seleccionar un elemento del DOM en función del resultado de una expresión. Permite alternar entre varias opciones basadas en el valor de una expresión.

ngClass: Esta directiva de atributo se utiliza para aplicar una o varias clases CSS a un elemento en función de una condición. Es útil para aplicar estilos dinámicamente en función del estado o valores en el componente.

ngStyle: Esta directiva de atributo se utiliza para aplicar estilos en línea a un elemento en función de una expresión. Permite aplicar estilos dinámicamente en función de propiedades o valores del componente.

ngModel: Esta directiva de atributo se utiliza para establecer la comunicación de datos bidireccional entre un elemento de formulario HTML y una propiedad del componente. Permite enlazar los valores de entrada y salida entre la plantilla y el componente.

Estas son solo algunas de las directivas más utilizadas en Angular. Sin embargo, Angular proporciona muchas más directivas incorporadas que cubren una amplia gama de funcionalidades, como la manipulación del DOM, la interacción con eventos, la validación de formularios, el enrutamiento y más.

Además de las directivas incorporadas, también es posible crear directivas personalizadas para adaptar el comportamiento de los elementos según las necesidades específicas de la aplicación. Esto permite extender las capacidades de las directivas existentes o crear nuevas directivas que se ajusten a los requisitos particulares del proyecto.

## Que son las directivas estructurales ?
Rta: Directivas estructurales: Se utilizan para manipular la estructura del DOM agregando, eliminando o reemplazando elementos en función de ciertas condiciones. Estas directivas afectan a un grupo de elementos y se activan mediante una directiva estructural específica que se coloca en un elemento contenedor.

## Cuales son esos 2 tipos de directivas estructurales que existen y que son ?
Rta: En Angular, existen tres directivas estructurales principales:

ngIf: Esta directiva estructural permite mostrar u ocultar elementos del DOM en función de una expresión booleana. Si la expresión es verdadera, el elemento se renderiza; de lo contrario, se elimina del DOM.

ngFor: Esta directiva estructural permite iterar sobre una colección de elementos y generar elementos del DOM repetidamente. Se utiliza para mostrar listas dinámicas en la plantilla.

ngSwitch: Esta directiva estructural permite realizar múltiples condiciones y seleccionar un elemento del DOM en función del resultado de una expresión. Permite alternar entre varias opciones basadas en el valor de una expresión.

Estas tres directivas estructurales son las principales y más utilizadas en Angular. Sin embargo, también existe una directiva estructural adicional llamada ngTemplateOutlet, que permite reutilizar templates y renderizarlos dinámicamente.

Estas directivas estructurales son fundamentales en Angular para controlar la estructura del DOM y ofrecen flexibilidad y dinamismo en la creación de plantillas y componentes.

## Que es la directiva Ng Template y Ngif-else
Rta: La directiva ng-template y ngIf-else son funcionalidades clave en Angular que permiten controlar la estructura del DOM y renderizar contenido condicionalmente en base a una expresión booleana.

La directiva ng-template es un elemento HTML invisible que se utiliza como un contenedor para un bloque de contenido reutilizable. No se renderiza directamente en el DOM, pero puede ser utilizado por otras directivas o componentes para definir plantillas que se pueden reutilizar en diferentes partes del código.

El nombreDeTemplate es un identificador único para el template y se utiliza para referenciarlo en otras partes del código.

La directiva ngIf-else es una combinación de las directivas ngIf y ng-template y se utiliza para renderizar contenido condicionalmente, mostrando un bloque de contenido si la expresión es verdadera y otro bloque de contenido si la expresión es falsa.

De esta manera, las directivas ng-template y ngIf-else brindan la flexibilidad de renderizar contenido condicionalmente y reutilizar plantillas en diferentes partes del código Angular. Estas funcionalidades son fundamentales para crear interfaces de usuario dinámicas y adaptativas.





