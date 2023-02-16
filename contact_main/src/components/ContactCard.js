import React from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const {removeContactHandler} = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  }

  return (
    <div className="item items">
      <div className="content">
        <img className="ui avatar image" src={user} alt="user" />
        <Link
          to = {`/contact/${id}`}
          state={{contact: props.contact}} 
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="teicon">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "10px" }}
          onClick={() => deleteContact(id)}
        ></i>
        <Link 
        to={`/edit`}
        state={{ contact: props.contact } }>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue"}}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;