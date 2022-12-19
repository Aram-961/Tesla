import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
      <div className="columns is-mobile is-marginless heading has-text-weight-bold">
        <div className="column left">
          <img src="/Imgs/tesla.svg" alt="" style={{ width: "150px" }} />
        </div>
        <div className="column center desktop">
          <p className="navbar-item has-text-black">MODEL S</p>
          <p className="navbar-item has-text-black">MODEL X</p>
          <p className="navbar-item has-text-black">MODEL 3</p>
          <p className="navbar-item has-text-black">ROADSTER</p>
          <p className="navbar-item has-text-black">ENERGY</p>
        </div>
        <div className="column right">
          <p className="navbar-item desktop">SHOP</p>
          <p className="navbar-item desktop">SIGN IN</p>
          <div className="navbar-item">
          <i className="fa fa-bars" />
          </div>
        </div>
      </div>
  );
};

export default Nav;
