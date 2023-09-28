# Space Seed
1. La nave Enterprise NCC-1701 ha encontrado una cápsula de escape datada hace mas de un siglo en los confines mas profundos del espacio. Dentro de esta se han encontrado unos pocos supervivientes criogenizados desde su fecha de lanzamiento. Antes de teleportarlos a bordo, Scotty tendrá que crear un nuevo tipo dentro del ordenador para guardar los datos de estos. Los ordenadores de la cápsula están dañados por antigüedad, por lo que los datos solo encontrados en el mismo, como el lugar de origen o nombre de los pasajeros **no siempre existirán**, sin embargo, otros como la altura, edad, peso y género podrán ser definidos por los sensores del enterprise, por lo que **siempre van a existir**.
(Objeto type)

2. Tras haber teleportado con seguridad a los pasajeros de la cápsula, poniendo siempre primero la vida, según las leyes de la federación estelar; Scotty pasa a tomar los datos de la cápsula. Solo **guardará datos esenciales** como peso, dimensiones y capacidad de velocidad de curvatura, también **guardará dentro del mismo el listado de pasajeros** obtenidos en el anterior escaneo. Recordar que el banco de datos de la federación estelar está hecho con  interfaces, se puede hacer con tipos, pero Scotty recibirá una paga de navidad mayor si respeta el estándar existente.
(Objeto interface)

3. Khan el Conquistador, líder de los tripulantes de la cápsula ha tomado el control del enterprise y borrado los bancos de memoria. Para poder volver a operar la nave Scotty tiene que volver a **definir los datos del propio Enterprise**. Este dato será solo para salir del paso en una situación de pánico por lo que quiere que sea **modificable**.
(Variable let)

4. En el plan de rescate de su nave, Kirk necesita saber en su tricorder, de cuantos de los tripulantes de la cápsula se sabe su **nombre**. En estos casos también deberá saber que **datos** se conocen del tripulante, para poder comprobarlos después y pensar en su estrategia para recuperar su nave.
(Object.keys y Object.values)

# This Side of Paradise
1. Más tarde la tripulación del Enterprise se encuentra en una misión de socorro hacia una colonia espacial de terraformación que ha sido infectada por las esporas de la flora local. El mismísimo Spock se ha enamorado por sus efectos y ha formado un motín para abandonar la nave y venir a vivir a la colonia. Kirk como capitán y último tripulante de la nave espacial debe de obtener un listado rápido **impreso en pantalla** de los nombres de todos los tripulantes sanos de la tripulación. Podría crear un nuevo **tipo** para los tripulantes, pero también puede aprovechar el **ya existente** creado en su enfrentamiento contra Khan extendiéndolo solo un campo indicando la infección, método mucho mejor debido a la rapidez requerida en la situación.
(Foreach)

2. Kirk encuentra esperanza al ver que todavía queda tripulación sana en el planeta, para ayudarle en su búsqueda a la hora de bajar a tierra, debe programar en su tricorder las siguiente lista de funcionalidades:
- Comprobar si todavía **hay alguien infectado** entre toda la tripulación
- Comprobar si **toda** la tripulación está sana y curada
- Encontrar solo el **próximo** tripulante infectado de la **lista** aunque haya varios
(Some, every, find)

# The City on the Edge of Forever
1. Ante los efectos de una sustancia ingerida accidentalmente McCoy ha entrado en un portal espacio-temporal cambiando el presente tal y como la tripulación lo conoce. Ahora el Enterprise no se encuentra en los radares y tampoco la Tierra. Para solucionarlo Kirk y Spock tendrán que entrar en el portal y detener a McCoy antes de que produzca el cambio que destruirá el presente.
La consciencia del portal envía a los tricorders una señal de la cual Spock deduce que se trata de un **listado de fechas**, concretamente años, pero muchos de los datos son incomprensibles, probablemente pertenecen a otras culturas desconocidas. Spock debe **filtrar** en su tricorder los valores de la señal obteniendo solo los comprensibles para la tripulación.
(filter)

2. Habiendo obtenido las posibles fechas, Spock tendrá que **transformarlas** en una serie de datos, los cuales no solo indiquen el año, si no también con exactitud mes, día, hora, minuto y segundo del mismo, ya que si no, sus cuerpos quedarán esparcidos por toda la longitud de un año creando una paradoja.
(Map)

# The Trouble with Tribbles
1. El Enterprise ha sufrido una infección de criaturas Tribble debido al malhechor comerciante Mudd. Los sensores han captado un **listado** de los imperfectos en los turbo conductos junto al número de tribbles en los mismos. Estos datos se **envían juntos y todos estos conjuntos, se mandan en una lista**. Para responde a los daños, Scotty necesita hacer tres cosas. Primero, obtener el **número total** de tribbles en todos los turbo conductores con **más de 20 daños**. Segundo, una **señal lisa de un nivel** que pase en serie el número del turbo conductor, sus daños y el número de tribbles, uno tras otro, sin diferenciarlos, para poder ser mandados por un canal en una frecuencia especialmente baja. Y por último, hacer esto, mandando solo datos de **peligro o no**, si el número de tribbles supera en un 50% al de los daños.
(Reduce, flat, flatmap)