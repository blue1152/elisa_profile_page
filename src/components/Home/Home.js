import { FaMailBulk, FaGithub, FaLinkedin, FaFileCode } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home_bg" id="home">
      <div className="overlay"></div>
          <h2>hi, i am elisa</h2>
          <div className="social_icons">
            <a href="mailto:bluememory1152@gmail.com">
              <p>
                <FaMailBulk size="40px" />
              </p>
              email
            </a>
            <a
              href="https://github.com/blue1152"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                <FaGithub size="40px" />
              </p>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/elisa-chang-200302/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                <FaLinkedin size="40px" />
              </p>
              Linkedin
            </a>
            <a
              href="https://www.cakeresume.com/s--IH06vaH37-ro3xuvWEmcEg--/elisa-chang"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                <FaFileCode size="40px" />
              </p>
              Resume
            </a>
          </div>
    </div>
  );
};
export default Home;
