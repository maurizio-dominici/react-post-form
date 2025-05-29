// Imports
import React, { useState } from "react";
import axios from "axios";

export default function Main() {
  // const PostForm = () => {
  // const [formData, setFormData] = useState({
  //   author: '',
  //   title: '',
  //   body: '',
  //   public: false,
  // });
  return (
    <main>
      <div className="container">
        <h1 className="text-center">Post Form</h1>

        <form className="form-control">
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Autore
            </label>
            <input
              // value={}
              // onChange={}
              id="author"
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titolo
            </label>
            <input
              // value={}
              // onChange={}
              id="Title"
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="text-area" className="form-label">
              Contenuto
            </label>
            <textarea
              id="text-area"
              className="form-control"
              name="body"
              // value={}
              // onChange={}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="public"
              // checked={}
              // onChange={}
              id="publicCheck"
            />
            <label className="form-check-label" htmlFor="publicCheck">
              Rendi pubblico
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </form>
      </div>
    </main>
  );
}
