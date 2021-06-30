import '../styles/about.css';
import GoogleMapReact from 'google-map-react';
 
const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const Marker = ({ text }) => <div className="marker">{text}</div>;

export default function About(){
    const defaultProps = {
        center: {
          lat: -32.269,
          lng: 148.584385
        },
        zoom: 17
    };
    
    return (
        <div className="about">
            <div className="main">
                <h1>Home Burger</h1>
                <p>We started our restaurant in 1999. Back then we could only offer regular burgers and french fries and nothing really changed! We are really pleased to welcome you to our website.</p>
                <span><b>Check out</b> our menu and choose the most perfect dish for you!</span>
            </div>
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <Marker
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    text="Our restaurant"
                    />
                </GoogleMapReact>
            </div>
        </div>
        
      );
}