import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import api from './api/contacts'
import EditContact from "./components/EditContact.js"
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";


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
