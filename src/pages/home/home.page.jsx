import React, { useState } from "react";
import Map from "../../images/map.png";
import Navbar from "./navbar.component";
const HomePage = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="landing-section">
        <div className="landing-section-content">
          <div>
            <p className="text">
              Welcome to University of Antique, Tario-Lim Memorial Campus
            </p>
            <p className="text">Information Kiosk System</p>
          </div>
          <center>
            <div
              className="d-flex justify-content-around"
              style={{ width: "50%" }}
            >
              <button className="btn btn-primary btn-lg">
                {" "}
                <a href="#about" style={{ color: "#fff" }}>
                  {" "}
                  Learn more
                </a>
              </button>
              <button className="btn btn-success btn-lg">
                {" "}
                Download the App
              </button>
            </div>
          </center>
        </div>
      </div>

      <div className="about-ua">
        <center>
          <p className="fs-1">About UA-TLMC</p>
        </center>
        <center>
          <p className="fs-5">
            The pursuit of making quality education accessible to Antiqueños
            fueled the institution's humble beginning. By virtue of RA 857,
            Antique School of Arts and Trades (ASAT) was established on January
            19, 1954 through the efforts of the late Cong. Tobias A. Fornier.
            Upon the approval of the Act, classes were decided to be formally
            held immediately during the SY 1954-1955. Sibalom Elementary School
            offered an office room for the use of the school's administration
            and personnel. With the passion and enthusiasm of the pioneers; the
            cooperation of all sectors in the community; and the benevolence of
            the late Mayor Santiago A. Lotilla and municipal officials, a site
            for the school was acquired and the dream of having a school that
            will provide quality education of Antique’s youth was realized. On
            the site, a five-room building made of nipa and bamboo was
            constructed to serve as classrooms for the students. The first class
            were formally opened on July 1, 1954 with 188 Secondary Trade and 53
            Trade – Technical Education Students. The first courses offered were
            Ceramics, Automechanics, Furniture and Cabinet-Making, Building
            Construction, and Food Trades. The first few years of ASAT were
            years of forming its physical component. Buildings, driveways,
            drainage, playground and other infrastructure were constructed to
            address the growing needs of the institution.
          </p>
          {seeMore && <SeeMore />}
          <button
            className="btn btn-primary"
            onClick={() => {
              if (seeMore) {
                setSeeMore(false);
              } else {
                setSeeMore(true);
              }
            }}
          >
            {seeMore === false ? "See More..." : "See Less.."}
          </button>
        </center>
      </div>
      <div className="about">
        <center>
          <p className="fs-1">UA TLMC Campus Map</p>
        </center>
        <center>
          <img src={Map} className="campus-map" alt="UA-TLMC Campus Map" />
        </center>

        <p className="fs-3">Legend</p>
        <div className="p-2 row">
          <div className="col-md-4 col-xs-6">
            <p>1. ADMINISTRATION BLDG (OLD)</p>
            <p>2. ADMINISTRATION BLDG (NEW)</p>
            <p>3. SUPPLY STOCK ROOM</p>
            <p>4. SAS/ROTC OFFICE</p>
            <p>5. HRM LAB/OLD KITCHEN</p>
            <p>6. BED BLDG</p>
            <p>7. BL BLDG</p>
            <p>8. FTD BLDG A</p>
            <p>9. FTD BLDG B</p>
            <p>10. CAMPUS LIBRARY</p>
            <p>11. CANTEEN </p>
            <p>12. GUARD HOUSE</p>
            <p>
              13.TEACHER EDUC. OFFICE, LHS PRINCIPAL’S OFFICE, ABD MEDICAL &
              DENTAL CLINIC
            </p>
            <p>14. BANDOJA BLDG</p>
          </div>
          <div className="col-md-4 col-xs-6">
            <p>
              15. AVR, ACCREDITATION CENTER, COMPUTER LAB CAD. & RESEARCH CLINIC
            </p>
            <p>16. AUDITORIUM</p>
            <p>17. SCIENCE BLDG</p>
            <p>18. SWIMMING POOL</p>
            <p>19. SHAHAN1 & LHS BLDG</p>
            <p>20. RECREATION & FITNESS CENTER (FORMERLY COVERED GYM)</p>
            <p>21. NEW HRM LABORATORY</p>
            <p>22. HOMTEL BLDG</p>
            <p>23. LT. BLDG</p>
            <p>24. ALUMNI BLDG</p>
            <p>25. GRANDSTAND</p>
            <p>26. ATHLETIC OVAL</p>
            <p>27. STUDENT LOUNGE</p>
          </div>
          <div className="col-md-4 col-xs-6">
            <p>28. LT. CENTER</p>
            <p>29. GEN. EDUC. BLDG</p>
            <p>30. COTTAGES</p>
            <p>31. MALE & FEMALE RESTROOM 1</p>
            <p>32. SCIENCE LABORATORY</p>
            <p>33. SMART BLDG</p>
            <p>34. ACADEMIC BLDG</p>
            <p>35. MALE & FEMALE RESTROOM 2</p>
            <p>36. MALE & FEMALE RESTROOM 3</p>
            <p>37. PEFA BLDG</p>
            <p>38. FTC BLDG</p>
            <p>39. FTC MULTI FISH HATCHERY</p>
            <p>40. FTC RESEARCH CENTER</p>
            <p>41. INFORMATION CENTER</p>
          </div>
        </div>

        <div className="p-2 row mt-2">
          <div className="col-md-12">
            <p>1. –Y MULTIPLE INTELLIGENCE, RESEARCH CENTER & CAMPUS</p>
            <p>2. –Y HUMAN CAPITAL SERVICES DEVELOPMENT CENTER</p>
            <p>3. –Y WOMEN’S DORMITORY</p>
            <p>4. –Y RECREATION & FITNESS CENTER</p>
            <p>5. –Y FISHERIES</p>
            <p>6. –Y MEN’S DORMITORY</p>
            <p>7. –Y FUNCTIONAL HALL</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="fs-6 m-0">
          Copyright © 2022 | UA-TLMC Information Kiosk System | UA-TLMC{" "}
        </p>
      </div>
    </div>
  );
};

const SeeMore = () => (
  <div>
    <p className="fs-5 mb-4 mt-4">
      The first semi-permanent building for classroom instruction was the
      Ceramics Building. This was finished in the second semester of SY 1954-55
      and it housed all the classes in related subjects when the nipa structure
      was wrecked by the typhoon. Among the courses offered, industrial
      ceramics, which was the main justification for the establishment of the
      school was given special attention. Later, the school won awards and was
      acclaimed as one of the best schools of ceramics in the country.
    </p>
    <p className="fs-5 mb-4">
      Among the courses offered, industrial ceramics, which was the main
      justification for the establishment of the school was given special
      attention. Later, the school won awards and was acclaimed as one of the
      best schools of ceramics in the country.
    </p>
    <p className="fs-5 mb-4">
      The administrators and teachers of ASAT were truly instrumental in its
      development as an institution. As the population of the school grew, the
      infrastructure improved. More buildings were constructed and more courses
      were offered to facilitate better learning. Aside from a secondary trade
      course and a two-year trade course, the institution started offer
      four-year courses namely: Bachelor of Science in Practical Education in
      1976. Moreover, ASAT also opened Master of Arts in Food and Nutrition
      Course in 1978 and Mater of Arts in teaching Vocational Education (MATVE)
      in 1979. Seeing ASAT as a venue for molding Antiqueños’ intellectual and
      creative skills, former Assemblyman Arturo F. Pacificador authored
      Parliamentary Bill 912 which converted ASAT to Polytechnic State College
      of Antique (PSCA). This conversion from a trade school to a state college
      was officially entered in the school’s timeline on November 14, 1982. Dr.
      Godofredo E. Gallega, the officer-in-charge during the conversion was then
      designated as the first president of PSCA. When Dr. Gallega’s term as
      president ended, Dr. Benny A. Palma, the president of Aklan State
      University served as OIC president of the six (6) months. Dr. Victor E.
      Navarra was then voted upon by r=the Board of Trustees (BOT) to serve as
      the president of the college by virtue of BOT resolution No. 6, series of
      2006. The conversion of the school was not only a change in its name but
      also a change in the standard of education and the services rendered. It
      proposed more impressive changes in its building, grounds and physical
      structures, and in its facilities and equipment. Through the efforts of
      then Principal Teopisto Umpad, the Science Building was constructed with
      funds from Pres. Carlos P. Garcia. PSCA held significant events inside and
      outside the campus and participated in more relevant activities in the
      community. As the school grew, more courses were offered to answer the
      need for employment and global competitiveness. These programs include
      Doctor of Philosophy, Doctor of Public Administration, Master of
      Education, Master of Public Administration, Master of Science and Master
      of Arts in Education. In the Higher Education Curriculum, the courses
      offered are BS Secondary Education, Bachelor in Elementary Education, BS
      SPED, BS Industrial Education, BS Business Administration, BS Marketing,
      BS Management Accounting, BS Marine Engineering, BS Marine Transportation,
      BS Community Development, BS industrial Technology, BS Computer Science,
      BS Electronics and Communications Engineering, BS Electrical Engineering,
      BS Criminology, BS Hotel and Restaurant Management, AB Political Science,
      AB Psychology, and Seafarers Rating Course.
    </p>
    <p className="fs-5 mb-4">
      The 90’s was a decade of expansion for the school. This expansion was not
      only apparent in PSCA’s growing population, curricular offering and
      facilities, but also in its thrusts and programs. Aside from the main
      campus in Sibalom, PSCA extended its pursuit for quality education in
      other areas of the province. Then the Tario-Lim Ruiz Memorial Antique
      School of Fisheries became the PSCA Tibiao Campus and the Antique College
      of Agriculture became the Hamtic Campus. The expansion era blossomed and
      satellite campuses in Libertad and Caluya were also established. The idea
      of expansion also brought the idea of accreditation. This was the time
      when the aim for excellence became a challenge for all the constituents of
      PSCA. The College of Education brought glory to the institution for its
      exemplary performance in the Licensure Examination for Teachers (LET) and
      for passing the Level II accreditation. The year 2000 onwards was
      considered a journey toward universityhood. Through the efforts of Gov.
      Exequiel E. Javier and the school’s administration and personnel, PSCA was
      converted to University of Antique (UA) on November 10, 2009 by virtue of
      RA 9746 signed by former President Gloria Macapagal Arroyo. This
      conversion created an undeniable impact to all the constituents of the
      University. The school’s leaders and personnel really worked hard and did
      their best to sow the seeds of success and excellence in the institution.
      The noble pursuit for quality education was gradually and tangible
      achieved from one administration to the next Mr. Fermin Taruc Sr., the
      first superintendent of ASAT, was succeeded by Mr. Hilarion Agustin, Mr.
      Gil H. Tenefrancia, Mr. Rogelio Cachuela, Mr. Victor Blacer, Mr. Avelino
      Asuncion, Dr. Paulino Villagonzalo, Mr. Salvador Navarro, Mr. Olimpio
      Madlangbayan (OIC), Mr. Adriano S. Sullesta, Dr. Godofredo E. Gallega
      (first president of UA, 2006 present). As a growing University, UA has
      tried to improve its curricular offerings, facilities and equipment to
      address the needs of the students. Apparently, the need to accommodate
      more students who desire a place for learning paved the way for the
      provision of additional buildings, more classrooms and modern facilities.
      The passage if time has become a witness to the challenges the school has
      met from its foundation as ASAT; its growth as PSCA; and its maturity as
      UA. The University of Antique is a living proof of a journey from a humble
      beginning to a dynamic and illustrious future. With its unrelenting effort
      to provide quality education and to improve its services to its clientele,
      University of Antique plays an indispensable role in the progress of the
      province and undoubtedly remains as Antique’s pride.
    </p>
  </div>
);

export default HomePage;
