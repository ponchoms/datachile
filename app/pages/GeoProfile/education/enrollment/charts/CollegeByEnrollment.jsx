import React from "react";
import { Section } from "datawheel-canon";
import { Treemap } from "d3plus-react";
import { translate } from "react-i18next";

import mondrianClient, { geoCut } from "helpers/MondrianClient";
import { getGeoObject } from "helpers/dataUtils";
import { institutionsColorScale } from "helpers/colors";
import { numeral } from "helpers/formatters";

import ExportLink from "components/ExportLink";
import SourceNote from "components/SourceNote";

class CollegeByEnrollment extends Section {
  static need = [
    (params, store) => {
      const geo = getGeoObject(params);
      const prm = mondrianClient.cube("education_enrollment").then(cube => {
        var query = cube.query
          .option("parents", true)
          .drilldown("Date", "Date", "Year")
          .drilldown("Administration", "Administration", "Administration")
          .measure("Number of records");

        if (geo.type == "comuna") {
          query.drilldown("Institutions", "Institution", "Institution");
        }
        var q = geoCut(geo, "Geography", query, store.i18n.locale);

        return {
          key: "path_college_by_enrollment",
          data: __API__ + q.path("jsonrecords")
        };
      });

      return {
        type: "GET_DATA",
        promise: prm
      };
    }
  ];

  render() {
    const path = this.context.data.path_college_by_enrollment;
    const { t, className, i18n } = this.props;
    const geo = this.context.data.geo;

    const locale = i18n.language;
    const classSvg = "college-by-enrollment";

    return (
      <div className={className}>
        <h3 className="chart-title">
          <span>{t("School By Enrollment")}</span>
          <ExportLink path={path} className={classSvg} />
        </h3>
        <Treemap
          className={classSvg}
          config={{
            height: 500,
            data: path,
            groupBy:
              geo.type != "comuna"
                ? ["ID Administration"]
                : ["ID Administration", "ID Institution"],
            label: d =>
              d["Institution"] instanceof Array || geo.type != "comuna"
                ? d["Administration"]
                : d["Institution"],
            sum: d => d["Number of records"],
            time: "ID Year",
            total: d => d["Number of records"],
            totalConfig: {
              text: d =>
                "Total: " +
                numeral(d.text.split(": ")[1], locale).format("(0,0)") +
                " " +
                t("Students")
            },
            shapeConfig: {
              fill: d => institutionsColorScale(d["ID Administration"])
            },
            tooltipConfig: {
              title: d =>
                d["Institution"] instanceof Array || geo.type != "comuna"
                  ? d["Administration"]
                  : d["Institution"],
              body: d =>
                numeral(d["Number of records"], locale).format("(0,0)") +
                " " +
                t("Students")
            },
            legendConfig: {
              shapeConfig: {
                width: 40,
                height: 40,
                backgroundImage: () =>
                  "/images/legend/college/administration.png"
              }
            }
          }}
          dataFormat={data => data.data}
        />
        <SourceNote cube="education_enrollment" />
      </div>
    );
  }
}

export default translate()(CollegeByEnrollment);
