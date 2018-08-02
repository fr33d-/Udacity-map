import React, { Component } from 'react';
import Photo from './Photo';
import locations from './locations.json';
import mapStyles from './map-styles.json';

var googleMapsScript = loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBRr7bxsY3bLOaO7VAQeyc0VaConhI1MvU");
class Map extends Component {

    state = {
        'locations':  locations,
        'filteredLocations': [],
        'markers': [],
        'weather': "",
        'styles': mapStyles
    };    

    gm_authFailure(){
        window.alert("Error while loading the google Map, resource can't load! Try it again or check your connection.");
    }

    //Loads initial map.
    componentDidMount() {

        googleMapsScript.then(() => {
            this.setState((prevState) => ({
                filteredLocations: prevState.locations
            }));
    
            this.googleMap(this.state.locations);
        }).catch(function(error) {
            console.log(error);
            window.alert("Error while loading the google Map, resource can't load! Try it again or check your connection.");
        })

        window.gm_authFailure = this.gm_authFailure;
    
    }


    // Second API for external weather information.
    // Loads the weather of a specific lat & lng and displays it async in the info window
    loadWeather = (lat, lng) => {

		const api = "http://api.openweathermap.org/data/2.5/weather?"
        const APIKEY = 'cc90a41582e40bfbe120f64071846d0a';

        // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=cc90a41582e40bfbe120f64071846d0a

        fetch(`${api}lat=${lat}&lon=${lng}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(function(data) {
                if (data.weather[0] != null)
                    document.getElementsByClassName('weather-info')[0].innerHTML = 'Weather: ' + data.weather[0].main + ' at ' + (data.main.temp - 273.15).toFixed(2) + '°' ;
            })
            .catch(error => {
                console.log(error);
                if (document.getElementsByClassName('weather-info')[0]) 
                document.getElementsByClassName('weather-info')[0].innerHTML = 'Weather: sorry, something went wrong';
            });

	}

    //Google Map API actions and variables
    //Displays the map, different marker icons for hover state and the info window
    //function can be called with the markers to display, so when a filter is applyed new markers can be shown.
    markers = [];
    googleMap(locations) {

        var largeInfowindow = new window.google.maps.InfoWindow();
        var defaultIcon = makeMarkerIcon('CD3E00');
        var highlightedIcon = makeMarkerIcon('7ED321');

        const populateInfoWindow = (marker, infowindow) => {
            if (infowindow.marker !== marker) {
                infowindow.marker = marker;
                infowindow.setContent('<div> '+
                    '<h3>' + marker.title + '</h3> '+
                    '<span class="popover-description">' + marker.description + '</span> '+
                    '<span class="weather-info">Weather: loading ...</span> '+
                    '<img class="popover-photo" src="' + require("./img/" + marker.photo) + '" alt="' + marker.title + '"/> '+
                    '</div>');
                infowindow.open(map, marker);
                infowindow.addListener('closeclick', function() {
                    marker.setAnimation(null)
                    infowindow.marker = null;
                });

                this.loadWeather(marker.lat, marker.lng);
            }
        }

        function makeMarkerIcon(markerColor) {
            var markerImage = new window.google.maps.MarkerImage(
                'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
                '|40|_|%E2%80%A2',
                new window.google.maps.Size(20, 34),
                new window.google.maps.Point(0, 0),
                new window.google.maps.Point(10, 34),
                new window.google.maps.Size(20,34));
            return markerImage;
        };

        function toggleBounce() {
            if (this.getAnimation() !== null) {
              this.setAnimation(null);
            } else {
              this.setAnimation(window.google.maps.Animation.BOUNCE);
            }
          }

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.006782, lng: -103.648214 },
            zoom: 5,
            styles: this.state.styles,
            mapTypeControl: false
        });

        //Display marker for each location
        // and define bounds
        var bounds = new window.google.maps.LatLngBounds();

        for (var i = 0; i < locations.length; i++) {
            var position = locations[i].location;
            var title = locations[i].title;
            var photo = locations[i].photo;
            var description = locations[i].description;
            var marker = new window.google.maps.Marker({
                map: map,
                position: position,
                lat: locations[i].location.lat,
                lng: locations[i].location.lng,
                title: title,
                photo: photo,
                description: description,
                icon: defaultIcon,
                animation: window.google.maps.Animation.DROP,
                id: i
            });
            bounds.extend( marker.getPosition() );
            this.markers.push(marker);
            locations[i].marker = marker;
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });
            marker.addListener('click', toggleBounce);
        }

        map.fitBounds(bounds);

    }

    //Filter method - writes filtered photos to state, so it will be displayed in the list and updates the pins in the map.
    handleChange = (action) => {
		switch (action.target.value) {
			case 'art':
				this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('art') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('art') ));
                break;

            case 'people':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('people') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('people') ));
                break;

            case 'places':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('places') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('places') ));
				break;

            case 'nature':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('nature') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('nature') ));
                break;

            case 'NYC':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('NYC') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('NYC') ));
                break;

            case 'SF':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('SF') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('SF') ));
                break;

            case 'California':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('California') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('California') ));
                break;

            case 'LA':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('LA') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('LA') ));
                break;

            case 'Las-Vegas':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('Las Vegas') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('Las Vegas') ));
                break;

            case 'National-Parks':
                this.setState((state ) => ({
                    filteredLocations: state.locations.filter(l => l.category.includes('National Parks') )
                }))
                this.googleMap(this.state.locations.filter(l => l.category.includes('National Parks') ));
                break;

            default:
				this.setState((state ) => ({
					filteredLocations: state.locations
                }))
                this.googleMap(this.state.locations);
				break;
        }
    }

    //Minimizes sidebar
    minimizeSidebar() {
        document.getElementById('maxButton').style.display = "block";
        document.getElementById('minButton').style.display = "none";
        document.getElementById('mapOverlayContent').style.display = "none";
        document.getElementById('mapOverlay').style.height = "80px";
    }

    //Maximizes sidebar
    maximizeSidebar() {
        document.getElementById('maxButton').style.display = "none";
        document.getElementById('minButton').style.display = "block";
        document.getElementById('mapOverlayContent').style.display = "block";
        document.getElementById('mapOverlay').style.height = "90vh";
    }

    //Render method returning basic html structure with map and sidebar
    //Sidebar contains responsive min and max buttons, header, finter, a list of all photos and app info.
    render() {
        return (
            <div>
                <div id="map" role = 'application'/>
                <div className="map-overlay" id="mapOverlay">
                    <button id="minButton" className="min-button" onClick={this.minimizeSidebar} tabIndex={1}>Min</button>
                    <button id="maxButton" className="max-button" onClick={this.maximizeSidebar} tabIndex={1}>Max</button>
                    <h1>Photos in USA</h1>
                    <div id="mapOverlayContent">
                        {/* <input className="search-bar" type="text" name="search" placeholder="Search" />
                        <button type="button" className="search-button">Search</button> */}
                        <label htmlFor="filterDropdown">Filter: </label>
                        <select onChange={this.handleChange} id="filterDropdown">
                            <option value="all">all</option>
                            <option value="art">Art</option>
                            <option value="people">People</option>
                            <option value="places">Places</option>
                            <option value="nature">Nature</option>
                            <option value="" disabled>Places:</option>
                            <option value="NYC">NYC</option>
                            <option value="SF">SF</option>
                            <option value="California">California</option>
                            <option value="LA">LA</option>
                            <option value="Las-Vegas">Las Vegas</option>
                            <option value="National-Parks">National Parks</option>
                        </select>
                        <ul id="filteredFotosList">
                            <span className="li-info">{this.state.locations.length} Photos found</span>
                            {this.state.filteredLocations.map(photo => ( <Photo photo={photo} key={photo.id} onClick={() => this.openMarker(photo.id)}/>))} 
                        </ul>
                        <span className="app-info">Google Maps API 2018, aditional information from openweathermap.org API</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Map;


function loadScript(src) {
    return new Promise(function(resolve, reject){
      var script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', function () {
        resolve();
      });
      script.addEventListener('error', function (e) {
        reject(e);
      });
      document.body.appendChild(script);
    })
  };



