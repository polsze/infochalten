import { useState } from "react";

const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      setLoading(true);

      fetch("https://formsubmit.co/ajax/contacto@infochalten.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setForm(initialData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return { form, errors, loading, handleChange, handleSubmit };
};

export default useForm;