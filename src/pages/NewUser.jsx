import React from 'react';

export default function NewUser() {
  return (
    <div className="NewUser">
      <h1 className="newUserTitle">Nouvelle Utilisateur</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Pseudo</label>
          <input type="text" placeholder="Pseudo" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Nom Prenom</label>
          <input type="text" placeholder="Nom Prenom" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Adresse</label>
          <input type="text" placeholder="Adresse" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Télephone</label>
          <input type="text" placeholder="Tel" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Emploi</label>
          <input type="text" placeholder="emploi" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Actif</label>
          <select name="active" id="active" className="newUserSelect">
            <option value=""></option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>
        <button className="newUserButton">Crée</button>
      </form>
    </div>
  );
}
