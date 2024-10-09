import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="education-bx wow zoomIn">
              <h2>Educational Qualifications</h2>
              <div className="education-details">
                <div className="education-item">
                  <h3>University: Daffodil International University</h3>
                  <p>
                    Degree:{" "}
                    BSC in Software Engineering
                  </p>
                  <p>Location: Dhaka, Bangladesh</p>
                  <p>Duration: January 2019 - December 2023</p>
                </div>

                <div className="education-item">
                  <h3>College: Shaheed Police Smrity College</h3>
                  <p>
                    Higher Secindary Certificate (HSC)
                  </p>
                  <p>Location: Paltan, Dhaka, Bangladesh</p>
                  <p>Duration: June 2016 - May 2018</p>
                </div>

                <div className="education-item">
                  <h3>School: Lalmohan Ha-mim Residencial School & College</h3>
                  <p>
                    Secondary School Certificate (SSC)
                  </p>
                  <p>Location: Bhola, Barisal, Bangladesh</p>
                  <p>Duration: January 2014 - February 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
