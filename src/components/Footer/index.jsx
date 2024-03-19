import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Visa from "../../assets/visa.png";

function index() {
  return (
    <footer className=" py-8 max-w-[800px] mx-auto">
      <div className=" mx-auto px-">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#4ee54a]">Company</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/about-us">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/jobs">Jobs</a>
              </li>
              <li className="mb-2">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#4ee54a]">Help</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/faqs">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="/contact-us">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#4ee54a]">Legal</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/terms-of-use">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://bento-resources.s3.amazonaws.com/google-play-badge.png"
              width={121.87}
              height={48}
              className="mb-4"
            />
            <img
              src="https://bento-resources.s3.amazonaws.com/app-store-badge.png"
              width={121.87}
              height={48}
              className="mb-4"
            />
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="text-black hover:text-[#4ee54a] mr-4"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                className="text-black hover:text-[#4ee54a] mr-4"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-black hover:text-[#4ee54a]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16 mb-5">
        <img src={Visa} alt="visa" width={300} />
      </div>
    </footer>
  );
}

export default index;
