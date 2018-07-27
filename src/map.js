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
        ]
    };

    componentDidMount() {

        var styles = [
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
    
        function showListings() {
            var bounds = new window.google.mapLatLngBounds();
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
                bounds.extend(markers[i].position);
            }
            map.fitBounds(bounds);
        }
    
        function populateInfoWindow(marker, infowindow) {
            if (infowindow.marker !== marker) {
                infowindow.marker = marker; 
                console.log(marker);
                infowindow.setContent('<div> \
                    <h3>' + marker.title + '</h3> \
                    <span class="popover-description">' + marker.description + '</span> \
                    <img class="popover-photo" src="' + require("./img/" + marker.photo) + '" alt="' + marker.title + '"/> \
                    </div>');
                infowindow.open(map, marker);
                infowindow.addListener('closeclick', function() {
                    infowindow.marker = null;
                });
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
    
        function showFilteredMarkers(locations) {

            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
    
            for (var i = 0; i < locations.length; i++) {
                var position = locations[i].location; 
                var title = locations[i].title; 
                var photo = locations[i].photo; 
                var description = locations[i].description; 
                var marker = new window.google.maps.Marker({
                    map: map, 
                    position: position, 
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
        }
    
        var markers = [];

        // const google = window.google;

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 48.155004, lng: 11.4717968 },
            zoom: 12, 
            styles: styles, 
            mapTypeControl: false
        });

        var largeInfowindow = new window.google.maps.InfoWindow();
        var defaultIcon = makeMarkerIcon('CD3E00');
        var highlightedIcon = makeMarkerIcon('7ED321');

        showFilteredMarkers(this.state.filteredLocations);

        // map.fitBounds(bounds);
        // document.getElementById('show-listings').addEventListener('click', showListings);
        // document.getElementById('hide-listings').addEventListener('click', hideListings);

    };

    handleChange = (action) => {
		switch (action.target.value) {
			case 'art':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('art') )
				}))
                break;
            
            case 'people':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('people') )
				}))
                break;
                
            case 'places':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('places') )
				}))
				break;
            
            case 'nature':
				this.setState((state ) => ({
					filteredLocations: state.locations.filter(l => l.category.includes('nature') )
				}))
                break;
                
            case 'all':
				this.setState((state ) => ({
					filteredLocations: state.locations
				}))
				break;
        }
        
        // this.componentDidMount().showFilteredMarkers(this.state.filteredLocations);

	}

    render() {
        return (
            <div>
                <div id="map" />
                <div className="map-overlay">
                    <h1>Photos in Munich</h1>
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
                </div>
            </div>
        );
    }
}


export default Map;





