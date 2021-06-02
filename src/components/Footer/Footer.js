import { FaMailBulk, FaGithub, FaLinkedin, FaFileCode } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; 2021 website designed and developed by Elisa Chang | All
            Rights Reserved.
          </p>
          <div className="footer-social-icon">
            <ul className="social_icons_footer">
              <li>
                <a href="mailto:bluememory1152@gmail.com">
                  <p>
                    <FaMailBulk size="18px" />
                  </p>
                </a>
                <a
                  href="https://github.com/blue1152"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FaGithub size="18px" />
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/elisa-chang-200302/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FaLinkedin size="18px" />
                  </p>
                </a>
                <a
                  href="https://www.cakeresume.com/s--IH06vaH37-ro3xuvWEmcEg--/elisa-chang"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FaFileCode size="18px" />
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
