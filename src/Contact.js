function Contact() {
  return (
    <div>
      <h1>Mes contacts</h1>
      <div>
        <div className="card-contact">
        <h3>Bob Doe</h3>
        <h4>📞 03.49.79.52.46</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
        <div className="card-contact">
        <h3>Jane Meyers</h3>
        <h4>📞 02.56.38.50.10</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
        <div className="card-contact">
        <h3>Marc Jones</h3>
        <h4>📞 04.89.73.92.89</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
        <div className="card-contact">
        <h3> John Archer</h3>
        <h4>📞 02.82.47.55.96</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
        <div className="card-contact">
        <h3> Jean Bono</h3>
        <h4>📞 02.88.47.66.96</h4>
        <button className="delete-btn">Supprimer</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
