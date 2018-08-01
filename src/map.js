import React, { Component } from 'react';
import Photo from './Photo';

class Map extends Component {

    state = {
        'locations':  [
            {id: 1, title: 'NYC upper west side', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-1.png', description: 'View between skyscrapers in NYC.', category: 'places, nature, NYC'},
            {id: 2, title: 'Apple Store central station', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-2.png', description: 'Famous apple store in NYC central station.', category: 'places, building, NYC'},
            {id: 3, title: 'NYC 5th avenue', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-3.png', description: 'Big lanes in 5th avenue.', category: 'places, building, NYC'},
            {id: 4, title: 'Taxi in NYC 5th avenue', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-4.png', description: 'Cap crossing lanes in 5th avenue.', category: 'places, building, NYC'},
            {id: 5, title: 'Rockefeller center one', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-6.png', description: 'View on the Rockefeller center skyscraper', category: 'places, building, NYC'},
            {id: 6, title: 'Rockefeller center two', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-8.png', description: 'View from the Rockefeller center over NYC', category: 'places, building, NYC'},
            {id: 7, title: 'Harlem', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-12.png', description: 'Typical entrances in Harlem', category: 'places, building, NYC'},
            {id: 8, title: 'Store in china town', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-13.png', description: 'Crowded store in china town', category: 'places, people, NYC'},
            {id: 9, title: 'Little Italy', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-14.png', description: 'Street decoration in little Italy', category: 'culture, places, NYC'},
            {id: 10, title: 'Brooklyn bridge', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-16.png', description: 'Famous Brooklyn bridge', category: 'places, building, NYC'},

            {id: 11, title: 'Painted caravan', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-17.png', description: 'SF streets are color full', category: 'culture, people, SF'},
            {id: 12, title: 'Cable car', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-19.png', description: 'Famous SF cable cars', category: 'places, SF'},
            {id: 13, title: 'SF china town', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-20.png', description: 'Lampion decoration in china town', category: 'places, culture, SF'},
            {id: 14, title: 'Painted ladies', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-21.png', description: 'Color full housing in SF', category: 'building, SF'},
            {id: 15, title: 'Lombard street', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-23.png', description: 'Famous Lombard street in SF', category: 'building, places, SF'},
            {id: 16, title: 'Pier 39', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-24.png', description: 'Sea lions on pier 39', category: 'nature, places, SF'},
            {id: 17, title: 'Alcatraz island', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-25.png', description: 'Famous prison island Alcatraz', category: 'nature, places, SF'},
            {id: 18, title: 'Golden gate bridge', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-28.png', description: 'Famous golden gate bridge', category: 'building, places, SF'},

            {id: 19, title: 'Muri woods', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-29.png', description: 'Tree giants in muri woods state park', category: 'nature, California'},
            {id: 20, title: 'Highway one', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-31.png', description: 'Highway one along the coast in California ', category: 'nature, building, California'},
            {id: 21, title: 'Seagull', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-32.png', description: 'Seagull in the sun ', category: 'nature, California'},
            {id: 22, title: 'Little village', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-33.png', description: 'Little Mexican style village on the highway one ', category: 'places, building, nature, California'},
            {id: 23, title: 'Original Tacos', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-34.png', description: 'Best tacos ever ', category: 'culture, California'},
            {id: 24, title: 'Santa Barbara train', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-35.png', description: 'Train station in Santa Barbara ', category: 'people, California'},

            {id: 25, title: 'Hollywood signs', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-38.png', description: 'Famous hollywood signs in the hills', category: 'culture, building, LA'},
            {id: 26, title: 'Santa Monica Pier', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-39.png', description: 'Pier 66 in Santa Monica beach', category: 'culture, building, places, people, LA'},
            {id: 27, title: 'LA from Griffith-Observatorium', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-40.png', description: 'One of the best city views in LA from Griffith-Observatorium', category: 'building, places, LA'},
            {id: 28, title: 'Getty Center', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-41.png', description: 'Very nice art in Getty Center', category: 'building, art, LA'},

            {id: 29, title: 'Death valley', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-42.png', description: 'Sand dunes in death valley', category: 'nature, National Parks'},
            {id: 30, title: 'Pool in Cesars palace', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-43.png', description: 'Pool in cesars palace in Las Vegas', category: 'building, places, people, Las Vegas'},
            {id: 31, title: 'Hoover Dam', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-44.png', description: 'Hoover Dam lake with low water', category: 'building, places, Las Vegas'},
            {id: 32, title: 'Old strip', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-45.png', description: 'Color full lights in old strip in Las Vegas', category: 'places, people, Las Vegas'},

            {id: 33, title: 'Route 66 art', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-46.png', description: 'Painted car on historic route 66 ', category: 'art, culture, National Parks'},
            {id: 34, title: 'Grand Canyon', location: {lat: 48.130609, lng: 11.546009 }, photo: 'USA-47.png', description: 'View inside the majestic grand canyon ', category: 'nature, National Parks'},
            {id: 35, title: 'Antelope Canyon', location: {lat: 36.864039, lng: -111.376663 }, photo: 'USA-48.png', description: 'Impressive lights in Antelope Canyon ', category: 'nature, National Parks'},
            {id: 36, title: 'Horseshoe Bend', location: {lat: 36.878229, lng: -111.508725 }, photo: 'USA-49.png', description: 'Stunning view inside the Horseshoe Bend ', category: 'nature, National Parks'},
            {id: 37, title: 'Monument Valley', location: {lat: 36.997447, lng: -110.103102 }, photo: 'USA-50.png', description: 'Hills of the Monument Valley ', category: 'nature, National Parks'},
            {id: 38, title: 'Zion National Park', location: {lat: 37.161225, lng: -113.015226 }, photo: 'USA-52.png', description: 'Sign at the entrances of Zion National Park ', category: 'nature, National Parks'},
            {id: 39, title: 'Narrows in Zion National Park', location: {lat: 37.298249, lng: -112.945484 }, photo: 'USA-53.png', description: 'Flat water hiking in the Narrows ', category: 'nature, people, National Parks'},
            {id: 40, title: 'Bryce-Canyon', location: {lat: 37.603709, lng: -112.155552 }, photo: 'USA-54.png', description: 'View over Bryce-Canyon ', category: 'nature, National Parks'},
            {id: 41, title: 'extraterrestrial highway', location: {lat: 37.645397, lng: -115.738662 }, photo: 'USA-55.png', description: 'Road sign of the extraterrestrial highway in Nevada ', category: 'nature, culture, art, National Parks'},
            {id: 42, title: 'Lake in Yosemite National Park', location: {lat: 37.883931, lng: -119.094249 }, photo: 'USA-57.png', description: 'Lake after snow storm in Yosemite National Park ', category: 'nature, National Parks'},
            {id: 43, title: 'Tent in Yosemite National Park', location: {lat: 37.662652, lng: -119.620077 }, photo: 'USA-58.png', description: 'Camping in Yosemite National Park ', category: 'people, nature, National Parks'},
            {id: 44, title: 'View in the Yosemite valley', location: {lat: 37.722402, lng: -119.615736 }, photo: 'USA-59.png', description: 'Impressive view in the Yosemite valley', category: 'nature, National Parks'},

        ],
        'filteredLocations': [],
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

    //Methods for local storage service worker
    componentWillMount() {
	    // getter for local storage
		localStorage.getItem('photosMapLocations') && this.setState({
			locations: JSON.parse(localStorage.getItem('photosMapLocations')),
			isLoading: false
		})
	}

	componentWillUpdate(nextProps, nextState) {
		// setter for local storage
		localStorage.setItem('photosMapLocations', JSON.stringify(this.state));
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

            case 'NYC': SF
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





