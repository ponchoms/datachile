import React, {Component} from "react";
import {Link} from "react-router";
import {translate} from "react-i18next";
import "./Nav.css";

class Nav extends Component {

  render() {
    const {t,i18n,location} = this.props;

    /*
    The current hostname for server side is missing
    const currentLang = i18n.language.split('-')[0];
    const otherLang = (currentLang==='es')?'en':'es';

    var url = (window.location)?window.location.href:this.props.location;
    url = url.replace(currentLang,otherLang);
  */

    return (
      <nav className="nav">
        <div className="dc-container nav-container">
          <div className="nav-links">
            <Link className="logo" to="/">
              <img src="/images/logos/logo-datachile.svg"/>
            </Link>
          </div>
          <div className="nav-links">
            <Link className="link" to="/">{ t("Home") }</Link>
            <Link className="link" to="/explore">{ t("Explore") }</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default translate()(Nav);
