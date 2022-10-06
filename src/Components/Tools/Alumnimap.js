/** @format */
import "./alumnimap.css";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";

function Alumnimap() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3BhY3NwYWRlIiwiYSI6ImNsOHJnZ2ZreTA5M2kzeXBjZjd6dGFiNGEifQ.qT1yNywVrDbqC4-wyZcsbg";

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message:
            '<div style="display: flex; text-align: center; align-items: center; flex-direction: column; padding: 3%; bottom-margin: 0%"><div style="display:flex; flex-direction:row; width:100%; justify-content: center"><img src="https://media-exp1.licdn.com/dms/image/C5603AQHTf7seMbDNmA/profile-displayphoto-shrink_200_200/0/1589547516697?e=2147483647&v=beta&t=26TzmkFT4-OxGGiuetF2wWFQXdWQiZOuG-q7w2xMWb4" height="20px" width="20px" style="border-radius: 50%; margin-right: 2%"><strong style="font-size:12px">Raghav Gupta</strong></div>London, UK | Grad\'22<p style="margin-bottom: 0">He is a software developer at Hudson River Trading since August 15, 2022</p></div>',
          iconSize: [30, 30],
          backgroundImage:
            "https://media-exp1.licdn.com/dms/image/C5603AQHTf7seMbDNmA/profile-displayphoto-shrink_200_200/0/1589547516697?e=2147483647&v=beta&t=26TzmkFT4-OxGGiuetF2wWFQXdWQiZOuG-q7w2xMWb4",
        },
        geometry: {
          type: "Point",
          coordinates: [-66.324462, -16.024695],
        },
      },
      {
        type: "Feature",
        properties: {
          message:
            '<div style="display: flex; text-align: center; align-items: center; flex-direction: column; padding: 3%; bottom-margin: 0%"><div style="display:flex; flex-direction:row; width:100%; justify-content: center"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEq1n9pX5M2PQ/profile-displayphoto-shrink_200_200/0/1644541688346?e=1669248000&v=beta&t=yQQG96uLP698YvrD6nv0UFQ9vPuRHcmx2OABEY84xc0" height="20px" width="20px" style="border-radius: 50%; margin-right: 2%"><strong style="font-size:12px">Daksh Shah</strong></div>London, UK | Grad\'21<p style="margin-bottom: 0">He is a software engineer at Bloomberg since July 15, 2021</p></div>',
          iconSize: [30, 30],
          backgroundImage:
            "https://media-exp1.licdn.com/dms/image/C4D03AQEq1n9pX5M2PQ/profile-displayphoto-shrink_200_200/0/1644541688346?e=1669248000&v=beta&t=yQQG96uLP698YvrD6nv0UFQ9vPuRHcmx2OABEY84xc0",
        },
        geometry: {
          type: "Point",
          coordinates: [-1.237647, 51.907322],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Bar",
          iconSize: [30, 30],
          backgroundImage:
            "https://media-exp1.licdn.com/dms/image/C5603AQHzXWeqwEVfkg/profile-displayphoto-shrink_800_800/0/1619019109102?e=2147483647&v=beta&t=uT_Ujt8zrjY6C9ilO5m03ysiBAN8mlR9-ptf6PR-KRg",
        },
        geometry: {
          type: "Point",
          coordinates: [-0.127647, 51.507322],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Bar",
          iconSize: [30, 30],
          backgroundImage:
            "https://assets.fireside.fm/file/fireside-images/podcasts/images/2/2458fe79-416d-4b6a-993b-ec023bf6f0d3/guests/2/2bc2d8da-8924-48d8-a308-37febb647327/avatar_small.jpg?v=0",
        },
        geometry: {
          type: "Point",
          coordinates: [11.575382, 48.137108],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "hello?",
          iconSize: [30, 30],
          backgroundImage:
            "https://assets.fireside.fm/file/fireside-images/podcasts/images/2/2458fe79-416d-4b6a-993b-ec023bf6f0d3/guests/2/2bc2d8da-8924-48d8-a308-37febb647327/avatar_small.jpg?v=0",
        },
        geometry: {
          type: "Point",
          coordinates: [6.129799, 49.611277],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Baz",
          iconSize: [30, 30],
          backgroundImage:
            "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x2.jpg",
        },
        geometry: {
          type: "Point",
          coordinates: [77.5913, 12.97912],
        },
      },
    ],
  };
  // const map = new mapboxgl.Map({
  //   container: "map",
  //   zoom: 1.5,
  //   center: [-90, 40],
  //   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  //   // style: 'mapbox://styles/mapbox/outdoors-v11',
  //   style: "mapbox://styles/spacspade/cl8ri7i4q002814t5pwfrche0",
  //   projection: "globe", // Display the map as a globe
  // });

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-90);
  const [lat, setLat] = useState(40);
  const [zoom, setZoom] = useState(1.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  map.on("style.load", () => {
    map.setFog({}); // Set the default atmosphere style
  });

  // The following values can be changed to control rotation speed:

  // At low zooms, complete a revolution every two minutes.
  const secondsPerRevolution = 160;
  // Above zoom level 5, do not rotate.
  const maxSpinZoom = 5;
  // Rotate at intermediate speeds between zoom levels 3 and 5.
  const slowSpinZoom = 3;

  let userInteracting = false;
  let spinEnabled = true;

  function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
      let distancePerSecond = 360 / secondsPerRevolution;
      if (zoom > slowSpinZoom) {
        // Slow spinning at higher zooms
        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
        distancePerSecond *= zoomDif;
      }
      const center = map.getCenter();
      center.lng -= distancePerSecond;
      // Smoothly animate the map over one second.
      // When this animation is complete, it calls a 'moveend' event.
      map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
  }

  // Pause spinning on interaction
  map.on("mousedown", () => {
    userInteracting = true;
  });

  // Restart spinning the globe when interaction is complete
  map.on("mouseup", () => {
    userInteracting = false;
    spinGlobe();
  });

  // These events account for cases where the mouse has moved
  // off the map, so 'mouseup' will not be fired.
  map.on("dragend", () => {
    userInteracting = false;
    spinGlobe();
  });
  map.on("pitchend", () => {
    userInteracting = false;
    spinGlobe();
  });
  map.on("rotateend", () => {
    userInteracting = false;
    spinGlobe();
  });

  // When animation is complete, start spinning if there is no ongoing interaction
  map.on("moveend", () => {
    spinGlobe();
  });

  document.getElementById("btn-spin").addEventListener("click", (e) => {
    spinEnabled = !spinEnabled;
    if (spinEnabled) {
      spinGlobe();
      e.target.innerHTML = "Pause rotation";
    } else {
      map.stop(); // Immediately end ongoing animation
      e.target.innerHTML = "Start rotation";
    }
  });

  spinGlobe();

  // Add markers to the map.
  for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    const description = marker.properties.message;
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`${description}`);
    el.className = "marker";
    // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
    el.style.backgroundImage = `url(${marker.properties.backgroundImage})`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = "100%";

    // el.addEventListener("click", () => {
    //   document.getElementById(
    //     "info-box"
    //   ).innerHTML = `You clicked ${cityname}!`;
    // });

    // Add markers to the map.
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  }

  return (
    <div>
      sdfdafsa
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} id="map"></div>
      <button id="btn-spin">Pause rotation</button>
    </div>
  );
}

export default Alumnimap;
