import React, { Component, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "50%",
  height: "50%",
};

const style = {
  width: "50%",
  height: "50%",
};

export class GoogleMaps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  render() {
    return (
      <Map
        containerStyle={containerStyle}
        style={style}
        google={this.props.google}
        zoom={16}
        initialCenter={{
          lat: 59.92329,
          lng: 10.72599,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClyZc15ZxeTK7uTiTx5t_xdRNq8OGDvbE",
})(GoogleMaps);
