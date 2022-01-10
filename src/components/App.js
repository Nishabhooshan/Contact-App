import React from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Nisha",
      email: "Nisha123@gmail.com"
    },
    {
      id: "2",
      name: "Singh",
      email: "singh345@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* <ContactCard /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
