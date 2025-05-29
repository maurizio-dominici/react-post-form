// Imports
import React, { useState } from "react";
import axios from "axios";

export default function Main() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // Versione pi rapida

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // versione piu leggibile

  // const handleChange = (e) => {
  // const name = e.target.name;
  // let value = e.target.value;

  // if (e.target.type === 'checkbox') {
  //   value = e.target.checked;
  // }

  // setFormData((prev) => ({
  //   ...prev,
  //   [name]: value,
  //  }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((response) => {
        console.log("Risposta:", response.data);

        // Reset del form dopo l'invio
        setFormData({
          author: "",
          title: "",
          body: "",
          public: false,
        });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
  // console.log(formData);

  return (
    <main>
      <div className="container">
        <h1 className="text-center">Post Form</h1>

        {/* alert */}

        <form onSubmit={handleSubmit} className="form-control">
          <div className="mb-3">
            <label className="form-label">Autore</label>
            <input
              value={formData.author}
              onChange={handleChange}
              name="author"
              id="author"
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input
              value={formData.title}
              onChange={handleChange}
              name="title"
              id="Title"
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contenuto</label>
            <textarea
              id="text-area"
              className="form-control"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="public"
              checked={formData.public}
              onChange={handleChange}
              id="publicCheck"
            />
            <label className="form-check-label">Rendi pubblico</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </form>
      </div>
    </main>
  );
}
