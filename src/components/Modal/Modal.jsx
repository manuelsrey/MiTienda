import "./Modal.css";
import { XCircle } from "react-feather";
import { useForm } from "react-hook-form";

const InputField = ({ label, name, register, errors, trigger, form, setForm }) => (
  <>
    <label htmlFor={name}>{label}</label>
    {errors[name] && <p className="modal-form-error-msg">{errors[name].message}</p>}
    <input
      type="text"
      id={name}
      {...register(name, {
        required: `Por favor, ingrese un ${label.toLowerCase()}`,
        onBlur: () => trigger(name),
        ...(name === "title" && {
          maxLength: {
            value: 40,
            message: "El título no puede tener más de 40 caracteres",
          },
          minLength: {
            value: 5,
            message: "El título no puede tener menos de 5 caracteres",
          },
        }),
        ...(name === "price" && {
          min: {
            value: 0.01,
            message: "El precio no puede ser menor a 0.01",
          },
        }),
        ...(name === "description" && {
          maxLength: {
            value: 200,
            message: "La descripción no puede tener más de 200 caracteres",
          },
          minLength: {
            value: 10,
            message: "La descripción no puede tener menos de 10 caracteres",
          },
        }),
        ...(name === "category" && {
          maxLength: {
            value: 20,
            message: "La categoría no puede tener más de 40 caracteres",
          },
          minLength: {
            value: 3,
            message: "La categoría no puede tener menos de cinco caracteres",
          },
        }),
        ...(name === "image" && {
          validate: (value) => {
            let pattern = new RegExp(
              "^(https?:\\/\\/)?" + 
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + 
                "((\\d{1,3}\\.){3}\\d{1,3}))" +
                "(\\:\\d+)?" + 
                "(\\/[-a-z\\d%_.~+]*)*" + 
                "(\\?[;&a-z\\d%_.~+=-]*)?" + 
                "(\\#[-a-z\\d_]*)?$",
              "i"
            ); 
            return !!pattern.test(value) || "Introduce un URL válido";
          },
        }),
      })}
      value={form[name]}
      onChange={(e) => setForm({ ...form, [name]: e.target.value })}
    />
  </>
);

export default function Modal({
  setIsModalOpen,
  form,
  setForm,
  modalType,
  handleSubmitForm,
}) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button
          onClick={() => setIsModalOpen(false)}
          className="edit-modal-close-btn"
        >
          <XCircle />
        </button>
        {modalType === "new" ? (
          <h2>Nuevo Producto</h2>
        ) : (
          <h2>Modificar Producto</h2>
        )}
        <form onSubmit={handleSubmitForm} className="form-modal-container">
          <InputField
            label="Título"
            name="title"
            register={register}
            errors={errors}
            trigger={trigger}
            form={form}
            setForm={setForm}
          />
          <InputField
            label="Precio"
            name="price"
            register={register}
            errors={errors}
            trigger={trigger}
            form={form}
            setForm={setForm}
          />
          <InputField
            label="Descripción"
            name="description"
            register={register}
            errors={errors}
            trigger={trigger}
            form={form}
            setForm={setForm}
          />
          <InputField
            label="Categoría"
            name="category"
            register={register}
            errors={errors}
            trigger={trigger}
            form={form}
            setForm={setForm}
          />
          <InputField
            label="Imagen"
            name="image"
            register={register}
            errors={errors}
            trigger={trigger}
            form={form}
            setForm={setForm}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}
