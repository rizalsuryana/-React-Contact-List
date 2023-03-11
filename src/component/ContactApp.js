import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data.js";

function ContactApp() {
    const contacts = getData();

    return (
        <div className="contact-app"> 
        <h1> Contacts List </h1>
        <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApp;




// root parent from parent