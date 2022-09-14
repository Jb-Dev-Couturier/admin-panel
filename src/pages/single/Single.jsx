import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editer</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Télephone :</span>
                  <span className="itemValue">06 12 34 56 78</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse :</span>
                  <span className="itemValue">
                    255 chemin de la rue 75000 Paris
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pays :</span>
                  <span className="itemValue">France</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Dépense utilisateur ( Last 6 Months)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Dernières Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
