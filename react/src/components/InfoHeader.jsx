import React from 'react';

function InfoHeader() {

  const infoHeaderStyles = {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
    display: "flex",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around"
  }

  return <div style={infoHeaderStyles}>
    <div className="info-name info-tag">Name</div>
    <div className="info-phone info-tag">Phone</div>
    <div className="info-size info-tag">Size</div>
    <div className="info-ofAge info-tag">21?</div>
  </div>;
}

export default InfoHeader;
