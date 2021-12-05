import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact, error, clearContactErrors } = contactContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  useEffect(() => {
    if(error) {
      setAlert(error, 'danger');
      clearContactErrors();
    }
    if (current != null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current, error]);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addContact(contact);
    } else {
      updateContact(contact)
    }
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type='text'
        placeholder='Enter Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Enter Email Address'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Enter Phone Number'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal
      <input
        style={{ marginLeft: "2rem" }}
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      {"  "}
      Professional
      <div>
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
