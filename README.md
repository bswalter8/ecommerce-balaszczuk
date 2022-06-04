#  Proyecto de E-commerce Front-end

## Descripcion general del proyecto 

* Mi nombre es Walter Balaszczuk, soy un desarrollador Front End en React y estuve trabajando en la implementacion de un E-commerce facilmente adaptable a cuaquier tipo de negocio. Contiene todas las caracteristicas basicas de un E-commerce, filtrado de productos por categorias, carritos de compras, envio de orden de compras de multiples pedidos, capacidad de registro de usuario y seguimiento historico de sus pedido. En un futuro se implementaran nuevas funcionalidades como busqueda de productos, paginacion, pagina de inicio dinamica. 

## Herramientas utilizadas 
* React: "18.0.0": Se ha ultilizado React como entorno de desarollo debido a su funcionalidad de actualizacion y renderizacion de distintos componente de un sitio Web de manera facil y eficiente. 
* React-dom: "18.0.0": Dom virtual de React
* React-router-dom": "6.3.0": Componente de enlace de rutas (links) entre diferentes modulos en React
* React-toastify": "9.0.0": Libreria que maneja los componentes de aviso (pop-up) del sitio. Se eligio por ser muy facilmente aplicable y customnizable.
* Firebase": "^9.8.1": La base de datos es Firebase. Al ser un proyecto pequeño se eligio Firebase por su facil manejo e implementacion. Toda la base de datos de productos, usuarios, ordenes de compra, es manejada por Firebase.
* Styled-components: "5.3.5" : Todo el CSS esta manejado por esta libreria. Fue elegida por la practididad de tener un componente declarado que contenga todo el CSS y pueda utilizarse dentro de otro componente, agregando tambien faciildades de SASS.
* React-scripts: "5.0.0": Scripts necesarios de React. 
* Web-vitals": "^2.1.4"


## Paso de la instalacion 

1.  Clonar el repositorio de GitHub en una nueva carpeta creada. 
1.  En la terminal instalar las dependencia utilizando NPM Install
1.  Levantar el React-Dom ultilizando NPM Start 
1.  Para leer o modificar el codigo, abrirlo con un editor. 

## Comentarios de componentes
 
 * El usuario y el carrito utilizan dos lineas de componentes distintas, cada una con su propio contexto. El usuario utiliza los componentes: UserContext, User, OrdenList, UserOrdenlist, UserSignin, UsersWidget. El carrito utiliza los componentes: Cart, CartContext, CartItem, CartPrecioTotal, CartWidget. 
 * La compra final utiliza el componente FinalizarForm, es un formulario que incluye algunos de los datos obtenidos desde el User y otros nuevos ingresados nuevamente, como un direccion de envio y un telefono. 
 * En CartContext la funcion "setCant" lee el numero de items en el carrito y modifica de acuerdo a los items agregados. Dicha funcion es utilizada en el componente CartWidget
    
 ## Flujo de la aplicacion 

 [https://drive.google.com/file/d/17Xsp3TV4mX1fhpxsqRl97VKapBVnNaOL/view?usp=sharing] Video Explitcativo 
 
  
   
   
   
  