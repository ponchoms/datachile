import React, { Component } from "react";
import { translate } from "react-i18next";

import { sources, getI18nSourceObject } from "helpers/consts";

import "./FeaturedDatumSplash.css";

class FeaturedDatumSplash extends Component {
  render() {
    const {
      t,
      icon,
      datum,
      decile,
      title,
      subtitle,
      source,
      className,
      rank,
      level,
      name
    } = this.props;

    let full, half, none;

    if (decile !== null && decile !== undefined && !isNaN(decile)) {
      full = Math.floor(decile / 2);
      half = decile % 2 != 0 ? 1 : 0;
      none = 5 - half - full;
    }

    // const sourceData = sources[source];
    const src = t("about.data", { returnObjects: true });
    const sourceData = getI18nSourceObject(src, source);

    return (
      <div className={"featured-datum-splash " + className}>
        <h4 className="featured-datum-splash-title">
          {title} {rank && <small>{rank}</small>}
        </h4>
        {decile !== null &&
          decile !== undefined &&
          !isNaN(decile) && (
            <div className="featured-datum-splash-icons">
              {[...Array(full)].map((x, i) => (
                <img
                  className="icon-img full"
                  src={`/images/splash-icon/icon-${icon}-full.svg`}
                />
              ))}
              {half == 1 && (
                <img
                  className="icon-img half"
                  src={`/images/splash-icon/icon-${icon}-half.svg`}
                />
              )}
              {[...Array(none)].map((x, i) => (
                <img
                  className="icon-img none"
                  src={`/images/splash-icon/icon-${icon}-none.svg`}
                />
              ))}
            </div>
          )}
        <div className="featured-datum-splash-data">
          <div className="featured-datum-data">
            {datum ? datum : t("no_datum")}
          </div>
          {subtitle && (
            <div className="featured-datum-splash-subtitle">{subtitle}</div>
          )}
          {sourceData && (
            <div className="featured-datum-splash-source">
              {sourceData.title} - {sourceData.year}
            </div>
          )}
          {level && (
            <div className="featured-datum-splash-level">
              {t(`${level}.warning`, name)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default translate()(FeaturedDatumSplash);
