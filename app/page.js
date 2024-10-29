import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import HowOrder from "./_components/HowOrder";
import ProductList from "./_components/ProductList";
import Gallery from "./_components/Gallery";
import Footer from "./_components/Footer";
import Producto2 from "./_components/Pruebas";

export default async function Home() {
  let sliderList;
  let categoryList = []; // Inicializa categoryList aquí
  let howorder;
  let productList;
  let gallery;

  try {
    sliderList = await GlobalApi.getSliders(); // Obtiene los sliders
  } catch (error) {
    console.error("Error fetching sliders:", error);
    sliderList = [];
  }

  // try {
  //   categoryList = await GlobalApi.getCategoryList(); // Asegúrate de que esta función esté correctamente definida
  // } catch (error) {
  //   console.error("Error fetching categories:", error);
  //   categoryList = [];
  // }

  try {
    howorder = await GlobalApi.getHoworder(); // Asegúrate de que esta función esté correctamente definida
  } catch (error) {
    console.error("Error fetching categories:", error);
    howorder = [];
  }

  try {
    gallery = await GlobalApi.getGallery(); // Asegúrate de que esta función esté correctamente definida
  } catch (error) {
    console.error("Error fetching gallery:", error);
    gallery = [];
  }

  try {
    productList = await GlobalApi.getAllProducts(); // Asegúrate de que esta función esté correctamente definida
  } catch (error) {
    console.error("Error fetching productList:", error);
    productList = [];
  }
  console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL)
  return (
    <div className="px-6">
      <div className="p-4 md:p-6 px-12 md:px-14">
        <Slider sliderList={Array.isArray(sliderList) ? sliderList : []} />
      </div>

      <div className="p-4 md:p-6 px-12 md:px-14">
        <HowOrder howorder={Array.isArray(howorder) ? howorder : []} />
      </div>
      <div className="p-4 md:p-6 px-12 md:px-14">
        <Gallery gallery={Array.isArray(gallery) ? gallery : []} />
      </div>

      <div className="p-5 md:p-10 px-12 md:px-14">
        <ProductList
          productList={Array.isArray(productList) ? productList : []}
        />
      </div>
      <Producto2/>
      <Footer/>
    </div>
  );
}
