let products = [
  {
    id: 0,
    nombre: "Intel i9 12900K",
    precio: 80000,
    img: "../assets/i9.png",
    categoria: "1",
    descripcion:
      "El procesador tope de gama de la marca intel en su mas reciente generacion",
    destacado: 1,
  },
  {
    id: 1,
    nombre: "Nvidia RTX 3090ti",
    precio: 700000,
    img: "../assets/3090.png",
    categoria: "2",
    descripcion: "La placa grafica mas potente del mercado",
    destacado: 1,
  },
  {
    id: 2,
    nombre: "SSD M.2  WD Black",
    precio: 25000,
    img: "../assets/m2.png",
    categoria: "3",
    descripcion: "Almacenamiento de alta velocidad",
    destacado: 0,
  },
  {
    id: 3,
    nombre: "AMD Ryzen 9 5900X",
    precio: 70000,
    img: "../assets/ryzen9.png",
    categoria: "1",
    descripcion:
      "El procesador tope de gama de la marca AMD en mas reciente generacion",
    destacado: 0,
  },
  {
    id: 4,
    nombre: "AMD Radeon RX 6950 XT",
    precio: 600000,
    img: "../assets/6090.png",
    categoria: "2",
    descripcion: "La grafica mas potente de AMD",
    destacado: 0,
  },
  {
    id: 5,
    nombre: "HDD Seagate 2TB",
    precio: 10000,
    img: "../assets/seagate.png",
    categoria: "3",
    descripcion: "Puro almacenamiento de la marca lider del mercado",
    destacado: 1,
  },
  {
    id: 6,
    nombre: "Asus Prime B650",
    precio: 20000,
    img: "../assets/prime.png",
    categoria: "4",
    descripcion:
      "Motherboard linea prime para la ultima generacion de procesadores intel",
    destacado: 0,
  },
  {
    id: 7,
    nombre: "Corsair RM 850W",
    precio: 8000,
    img: "../assets/rm850.png",
    categoria: "5",
    descripcion: "Fuente certificada de 850W",
    destacado: 0,
  },
  {
    id: 8,
    nombre: "Gabinete NZXT H510",
    precio: 25000,
    img: "../assets/h510.png",
    categoria: "8",
    descripcion: "Gabinete de una de las marcas lideres en refrigeracion",
    destacado: 1,
  },
  {
    id: 9,
    nombre: "CoolerMaster ML240",
    precio: 25000,
    img: "../assets/ml240.png",
    categoria: "6",
    descripcion: "Water cooler dual fan CoolerMaster",
    destacado: 0,
  },
  {
    id: 10,
    nombre: "Keychron K2 V2 Keyboard",
    precio: 30000,
    img: "../assets/keychronk2.png",
    categoria: "7",
    descripcion: "Teclado mecanico switches gateron",
    destacado: 1,
  },
  {
    id: 11,
    nombre: "Razer Viper Pro",
    precio: 12000,
    img: "../assets/viperpro.png",
    categoria: "7",
    descripcion:
      "Uno de los mouse mas utilizados por jugadores competitivos en el mundo",
    destacado: 1,
  },
];

function Product() {
  return (
    <>
      <div className="productContainer">
        {products.map((data, key) => {
          return (
            <div className="product" key={key}>
              <img src={data.img} alt="prod-img" />

              <div>
                <h2>{data.nombre}</h2>
                <p>${data.precio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
