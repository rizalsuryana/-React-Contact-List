import React from "react";
import ContacItem from "./contactItem";

function ContactList ({ contacts }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContacItem key={contact.id} {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;