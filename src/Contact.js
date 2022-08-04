function Contact(props) {
  return (
    <div>
      <div>
        <div className="card-contact">
        <h3>{props.name}</h3>
        <h4>{props.phone}</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
