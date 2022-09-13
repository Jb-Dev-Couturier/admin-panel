import React from 'react';
import { Link } from 'react-router-dom';

import {
  LineStyle,
  QueryStats,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={'/'}>
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Accueil
              </li>
            </Link>
            <li className="sidebarListItem">
              <QueryStats className="sidebarIcon" />
              Analyse
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to={'/users'} className="sidebarLink">
              <li className="sidebarListItem ">
                <PermIdentity className="sidebarIcon" />
                Utilisateurs
              </li>
            </Link>
            <Link to={'/products'} className="sidebarLink">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Produits
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Rapports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Retour Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" />
              Management
            </li>
            <li className="sidebarListItem">
              <QueryStats className="sidebarIcon" />
              Analyse
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Rapports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
