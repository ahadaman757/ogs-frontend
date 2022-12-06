import Navbar from "../../Components/Navbar/Navbar";
import "./privacypolicy.css";
import bulid from "../../Assets/Images/Rectangle 1078.png";
import bulid2 from "../../Assets/Images/Rectangle 1102.png";
import btnlogo from "../../Assets/Images/Vector 190.png";
import Footer from "../../Components/Footer/Footer";
import { Markup } from "interweave";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState();

  useEffect(() => {
    axios.get("http://localhost:3002/general/getPrivacyPolicy").then((res) => {
      setContent(res.data.content[0][0].content);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" ogsas">
        <div className=" coursesogs">
          <h1 className="text-center py-5">Privacy Policy</h1>
          {loading ? (
            "Loading... Please wait..."
          ) : (
            <div className="container">
              <Markup content={content} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
