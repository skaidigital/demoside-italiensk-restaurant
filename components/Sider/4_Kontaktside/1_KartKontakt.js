import { Layout, SectionContainerUtenPadding } from "../../Små/BaseElementer";
import { GoogleMaps } from "../../Store/GoogMaps";
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "80%",
  position: "relative",
};

const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  border: "black",
};

export class KartKontakt extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false,
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  // onMarkerMounted = (element) => {
  //   this.onMarkerClick(element.props, element.marker, element);
  // };

  handleMapIdle = () => {
    this.setState({
      mapLoaded: true,
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={style}
        // containerStyle={containerStyle}
        initialCenter={{
          lat: 59.92329,
          lng: 10.72599,
        }}
        onClick={this.onMapClicked}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker
            // ref={this.onMarkerMounted}
            onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)}
          />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>Ravioli's</h4>
            <p>Åpningstider:</p>
            <p>Tirsdag - Torsdag 11-21</p>
            <p>Fredag - Lørdag 11-24</p>
            <p>Søndag 11-21</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClyZc15ZxeTK7uTiTx5t_xdRNq8OGDvbE",
})(KartKontakt);
