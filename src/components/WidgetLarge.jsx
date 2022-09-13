import React from 'react'
import ProfilUser from '../assets/images/profilUserDefault.png';

function WidgetLarge() {

    const Button = ({ type }) => {
      return <button className={"WidgetLargeButton " + type }>{type}</button>;
    };
    
  return (
    <div className="WidgetLarge">
      <h3 className="widgetLargeTitle">Derniers Mouvements</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Clients</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Montants</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={ProfilUser} alt="user-pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Jane Doe</span>
          </td>
          <td className="widgetLargeDate">2 septembre 2021</td>
          <td className="widgetLargeAmount"> 105,20 €</td>
          <td className="widgetLargeStatus"> <Button type={'Approuvé'}/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={ProfilUser} alt="user-pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Jane Doe</span>
          </td>
          <td className="widgetLargeDate">2 septembre 2021</td>
          <td className="widgetLargeAmount"> 105,20 €</td>
          <td className="widgetLargeStatus"> <Button type={'Approuvé'}/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={ProfilUser} alt="user-pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Jane Doe</span>
          </td>
          <td className="widgetLargeDate">2 septembre 2021</td>
          <td className="widgetLargeAmount"> 105,20 €</td>
          <td className="widgetLargeStatus"> <Button type={'En-Attente'}/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={ProfilUser} alt="user-pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Jane Doe</span>
          </td>
          <td className="widgetLargeDate">2 septembre 2021</td>
          <td className="widgetLargeAmount"> 105,20 €</td>
          <td className="widgetLargeStatus"> <Button type={'Approuvé'}/></td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLarge