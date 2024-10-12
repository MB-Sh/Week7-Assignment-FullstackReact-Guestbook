import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <h3>This travel gives users the opportunity to share their travel experiences</h3>
      <img className="about-image"
        src="https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_640.jpg"
        alt="Travel suitcase"
      />
      <p>We would love to also some travel tips, this will go 
        a long way to help others plan their vacations well.
      </p>

      
      <Link to="/gallery">
        <button className="more-info-button">More Info</button>
      </Link>

      <img
        src="https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_640.jpg"
        alt="map"
        className="more-info-image"
      />
    </>
  );
}
