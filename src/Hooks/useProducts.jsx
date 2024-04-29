import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/Reducers/productsReducer.js";
import {
  addProductThunk,
  updateProductThunk,
} from "../redux/Reducers/productsReducer.js";

export default function useProducts() {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    id: "", 
    price: "",
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (modalType === "new") {
      const newProduct = {
        id: uuidv4(),
        title: form.title,
        price: form.price,
        description: form.description,
        category: form.category,
        image: form.image,
      };

      try {
        dispatch(addProductThunk(newProduct));
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating product", error);
      }
    }

    if (modalType === "edit") {
      const editedProduct = {
        ...form, 
      };
      try {
        dispatch(updateProductThunk(editedProduct));
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  const openEditProductModal = (id) => {
    const filteredProduct = products?.find(
      (product) => product.id.toString() === id.toString()
    );
    setForm({
      ...filteredProduct, 
    });
    setIsModalOpen(true);
  };

  return {
    form,
    setForm,
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,
    openEditProductModal,
    handleSubmitForm,
  };
}
