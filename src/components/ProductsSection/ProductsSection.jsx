import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import { useSearchParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import useProducts from "../../Hooks/useProducts";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { getAllProducts } from "../../redux/Reducers/productsReducer";
import { useSelector } from "react-redux";

function ProductsSection() {
  const products = useSelector(getAllProducts);
  const { user } = useContext(UserContext);
  const {
    form,
    isModalOpen,
    modalType,
    setForm,
    setIsModalOpen,
    setModalType,
    openEditProductModal,
    handleSubmitForm,
  } = useProducts();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  if (!products) return null; // Cambio aquí

  const handleNewProductModal = () => {
    setForm({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "https://placehold.jp/150x150.png",
    });
    setModalType("new");
    setIsModalOpen(true);
  };

  function filterProducts(data) {
    if (!search) {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const mapeo = filterProducts(products).map((product) => (
    <ProductCard
      key={product.id}
      setIsModalOpen={setIsModalOpen}
      product={product}
      openEditProductModal={openEditProductModal}
      form={form}
      setModalType={setModalType}
    />
  ));

  return (
    <>
      <main className="products-section">{mapeo}</main>
      {user.role === "admin" && (
        <button
          onClick={handleNewProductModal}
          className="new-item-btn"
        >
          Añadir Producto
        </button>
      )}
      {user.role === "admin" && isModalOpen && (
        <Modal
          form={form}
          setForm={setForm}
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  );
}

export default ProductsSection;
