import React from 'react';

function InfoHeader() {

  const infoHeaderStyles = {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
    width: "80%",
    display: 'grid',
    gridTemplateColumns: '1.7fr 1.3fr .5fr .5fr',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '550'
  }

  const ofAgeTag = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  return <div style={infoHeaderStyles}>
    <div className="info-name info-tag">Name</div>
    <div className="info-phone info-tag">Phone</div>
    <div className="info-size info-tag">Size</div>
    <div className="info-ofAge info-tag" style={ofAgeTag}>21?</div>
  </div>;
}

export default InfoHeader;
