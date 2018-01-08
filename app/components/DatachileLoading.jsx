import React, { Component } from "react";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { NonIdealState } from "@blueprintjs/core";

import DatachileProgressBar from "components/DatachileProgressBar";

import "./DatachileLoading.css";

class DatachileLoading extends Component {
  render() {
    const { progress, t, total, failed } = this.props;
    return (
      <NonIdealState
        className="data-chile-loading"
        title={t("loading.description", { progress, total })}
        description={t("loading.developed")}
        visual={<DatachileProgressBar failed={failed} value={progress / total} />}
      />
    );
  }
}

DatachileLoading = translate()(
  connect(state => ({
    total: state.loadingProgress.requests,
    progress: state.loadingProgress.fulfilled,
    failed: state.failureCatcher.failed
  }))(DatachileLoading)
);

export default DatachileLoading;
export { DatachileLoading };
