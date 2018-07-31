import React, { Component } from 'react';
import Photo from './Photo';

class Map extends Component {

    state = {
        'locations':  [
            {id: 1, title: 'Bavaria Statue', location: {lat: 48.130609, lng: 11.546009}, photo: 'Zollamt.png', description: 'Very famous statue in center of munich.', category: 'places, nature'},
            {id: 2, title: 'St. Paul Church', location: {lat: 48.136382, lng: 11.551648}, photo: 'Train.png', description: 'Famous church next to the Oktoberfestwiese in munich.', category: 'places'},
            {id: 3, title: 'Eisbachwelle', location: {lat: 48.143525, lng: 11.587944}, photo: 'Eisbachwelle.png', description: 'People surfing in the middle of the city.', category: 'people'},
            {id: 4, title: 'Sigestor', location: {lat: 48.152495, lng: 11.582192}, photo: 'Sigestor.png', description: 'Impressive Gate.', category: 'places'},
            {id: 5, title: 'Endless Staircase', location: {lat: 48.132890, lng: 11.540069}, photo: 'Stairs.png', description: 'Art in an office building, cool but useless.', category: 'art'}
        ], 
        'filteredLocations': [
            {id: 1, title: 'Bavaria Statue', location: {lat: 48.130609, lng: 11.546009}, photo: 'Zollamt.png', description: 'Very famous statue in center of munich.', category: 'places, nature'},
            {id: 2, title: 'St. Paul Church', location: {lat: 48.136382, lng: 11.551648}, photo: 'Train.png', description: 'Famous church next to the Oktoberfestwiese in munich.', category: 'places'},
            {id: 3, title: 'Eisbachwelle', location: {lat: 48.143525, lng: 11.587944}, photo: 'Eisbachwelle.png', description: 'People surfing in the middle of the city.', category: 'people'},
            {id: 4, title: 'Sigestor', location: {lat: 48.152495, lng: 11.582192}, photo: 'Sigestor.png', description: 'Impressive Gate.', category: 'places'},
            {id: 5, title: 'Endless Staircase', location: {lat: 48.132890, lng: 11.540069}, photo: 'Stairs.png', description: 'Art in an office building, cool but useless.', category: 'art'}
        ], 
        'markers': [],
        'weather': "",
        'styles': [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#378b90"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#46bcec"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#46bcec"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#23ace4"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            }
        ]
    };


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
            .catch(error => console.log(error))

	}

    //Google Map API actions and variables
    //Displays the map, different marker icons for hover state and the info window
    //function can be called with the markers to display, so when a filter is applyed new markers can be shown. 
    googleMap(locations) {

        var markers = [];
        var largeInfowindow = new window.google.maps.InfoWindow();
        var defaultIcon = makeMarkerIcon('CD3E00');
        var highlightedIcon = makeMarkerIcon('7ED321');
    
        const populateInfoWindow = (marker, infowindow) => {
            if (infowindow.marker !== marker) {
                infowindow.marker = marker; 
                infowindow.setContent('<div> \
                    <h3>' + marker.title + '</h3> \
                    <span class="popover-description">' + marker.description + '</span> \
                    <span class="weather-info">Weather: loading ...</span>\
                    <img class="popover-photo" src="' + require("./img/" + marker.photo) + '" alt="' + marker.title + '"/> \
                    </div>');
                infowindow.open(map, marker);
                infowindow.addListener('closeclick', function() {
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

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 48.155004, lng: 11.4717968 },
            zoom: 12, 
            styles: this.state.styles, 
            mapTypeControl: false
        });
    
        //Hide existing markers
        // for (var i = 0; i < markers.length; i++) {
        //     markers[i].setMap(null);
        // }

        //Display marker for each location
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
            markers.push(marker);
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });
        }

        // map.fitBounds(bounds);

    }

    //Loads initial map.
    componentDidMount() {

        this.googleMap(this.state.locations);
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
                
            case 'all':
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
                <div id="map" />
                <div className="map-overlay" id="mapOverlay">
                    <button id="minButton" className="min-button" onClick={this.minimizeSidebar}>Min</button>
                    <button id="maxButton" className="max-button" onClick={this.maximizeSidebar}>Max</button>
                    <h1>Photos in Munich</h1>
                    <div id="mapOverlayContent">
                        {/* <input className="search-bar" type="text" name="search" placeholder="Search" />
                        <button type="button" className="search-button">Search</button> */}
                        <label>Filter: </label>
                        <select onChange={this.handleChange}>
                            <option value="all">all</option>
                            <option value="art">Art</option>
                            <option value="people">People</option>
                            <option value="places">Places</option>
                            <option value="nature">Nature</option>
                        </select>
                        <ul id="filteredFotosList">
                            <span className="li-info">{this.state.locations.length} Photos found</span>
                            {this.state.filteredLocations.map(photo => ( <Photo photo={photo} key={photo.id} />))}
                        </ul>
                        <span className="app-info">Google Maps API 2018, aditional information from openweathermap.org API</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Map;





