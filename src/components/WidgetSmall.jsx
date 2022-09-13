import React from 'react';
import ProfilUser from '../assets/images/profilUserDefault.png';
import {Visibility} from '@mui/icons-material';

export default function WidgetSmall() {
  return (
    <div className="WidgetSmall">
      <span className="widgetSmallTitle">Nouveaux Membres</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={ProfilUser} alt="user-pic" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Jonh Doe</span>
            <span className="widgetSmallUserTitle">Ingenieur</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={ProfilUser} alt="user-pic" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Jonh Doe</span>
            <span className="widgetSmallUserTitle">Ingenieur</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={ProfilUser} alt="user-pic" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Jonh Doe</span>
            <span className="widgetSmallUserTitle">Ingenieur</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={ProfilUser} alt="user-pic" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Jonh Doe</span>
            <span className="widgetSmallUserTitle">Ingenieur</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={ProfilUser} alt="user-pic" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Jonh Doe</span>
            <span className="widgetSmallUserTitle">Ingenieur</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Afficher
          </button>
        </li>
      </ul>
    </div>
  );
}
