import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import React from 'react';
import ProfilUser from '../assets/images/profilUserDefault.png';

export default function UserDetails() {
  return (
    <div className="UserDetail">
      <div className="userDetailTitleContainer">
        <h1 className="userDetailTitle">Détail Utilisateur</h1>
        <button className="userDetailAddButton">Crée</button>
      </div>
      <div className="userDetailContainer">
        <div className="userDetailShow">
          <div className="userDetailShowTop">
            <img
              src={ProfilUser}
              alt="User-pic"
              className="userDetailShowTopImage"
            />
            <div className="userDetailShowTopTitle">
              <span className="userDetailShowUsername">Jane Doe</span>
              <span className="userDetailShowUsertitle">Secretaire</span>
            </div>
          </div>
          <div className="userDetailShowBottom">
            <span className="userDetailShowBottomTitle">Detail Comptes</span>
            <div className="userDetailShowInfo">
              <PermIdentity className="userDetailShowBottomIcons" />
              <span className="userDetailShowBottomInfoTitle">JaneDoe99</span>
            </div>
            <div className="userDetailShowInfo">
              <CalendarToday className="userDetailShowBottomIcons" />

              <span className="userDetailShowBottomInfoTitle">
                20 octobre 1986
              </span>
            </div>
            <span className="userDetailShowBottomTitle">Contact Comptes</span>
            <div className="userDetailShowInfo">
              <PhoneAndroid className="userDetailShowBottomIcons" />
              <span className="userDetailShowBottomInfoTitle">
                06-12-34-56-78
              </span>
            </div>
            <div className="userDetailShowInfo">
              <MailOutline className="userDetailShowBottomIcons" />
              <span className="userDetailShowBottomInfoTitle">
                JaneDoe@gmail.com
              </span>
            </div>
            <div className="userDetailShowInfo">
              <LocationSearching className="userDetailShowBottomIcons" />
              <span className="userDetailShowBottomInfoTitle">
                France | Paris
              </span>
            </div>
          </div>
        </div>
        <div className="userDetailUpdate">
          <span className="userDetailUpdateTitle">Editer</span>
          <form className="userDetailUpdateForm">
            <div className="userDetailUpdateLeft">
              <div className="userDetailUpdateItem">
                <label htmlFor="">Nom Prenom</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Pseudo</label>
                <input
                  type="text"
                  placeholder="JaneDoe99"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Date de naissance</label>
                <input
                  type="text"
                  placeholder="20 octobre 1986"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Travail à</label>
                <input
                  type="text"
                  placeholder="Secretaire"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Telephone</label>
                <input
                  type="text"
                  placeholder="06-12-34-56-78"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="JaneDoe@gmail.com"
                  className="userDetailInput"
                />
              </div>

              <div className="userDetailUpdateItem">
                <label htmlFor="">Adresse</label>
                <input
                  type="text"
                  placeholder="France | Paris"
                  className="userDetailInput"
                />
              </div>
            </div>

            <div className="userDetailUpdateRight">
              <div className="userDetailUpdateUpload">
                <img
                  src={ProfilUser}
                  alt="user-pic"
                  className="userDetailUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className="userDetailUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userDetailUpdateButton">Mettre a jour</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
