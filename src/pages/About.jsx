import React from "react";
// import LogoutBar from "../components/LogoutBar";

const About = () => {
  return (
    <div>
      {/* <LogoutBar /> */}
      <div className={"container mt-5"}>
        <h1>Welcome to </h1>
        <h2>Software Shop</h2>
        <div>
          <div className="row justify-content-md-center mt-5">
            <div className="col col-lg-5">
              The Software Shop is the university's one-stop shop for free and discounted software. The online store makes it easy for students, faculty and staff to download discounted software for personal and academic use. Dozens of software titles are available, including offerings from leading vendors such as Microsoft, Adobe and Norton. Looking for something a little more niche? Specialty software is also available, saving you tens or hundreds of Rupees off retail pricing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
