import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div> Welcome to my Star Wars Fanpage</div>
      <Link to="/feed">Take a look on some feeds</Link>
    </div>
  );
};

export default Homepage;
