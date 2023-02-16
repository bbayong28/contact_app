import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from '../api/contacts'
import EditContact from "./EditContact.js"
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";


function App() {

  return (
    <div className="ui container">
      <Header />
      <ContactsCrudContextProvider>
      <Routes>    
        <Route path="/" element={<ContactList />} />  
        <Route path="/add" element={ <AddContact/>}/> 
        <Route path="/edit" element={<EditContact />} />
        <Route path="/contact/:id" element={<ContactDetail/>}/>
      </Routes>  
      </ContactsCrudContextProvider>
    </div>
  );
}

export default App;
