import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BoardAndManagement from "./pages/about-us/Board-and-Managenent";
import CoreValues from "./pages/about-us/Core-Values";
import OrganizationOverview from "./pages/about-us/Organization-Overview";
import VisionAndMission from "./pages/about-us/Vision-and-mission";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/Blog/Blog-single";
import ContactUs from "./pages/Contact-us";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Education from "./pages/issues-of-action/Education";
import EnvironmentalConservation from "./pages/issues-of-action/Environmental-conservation";
import Health from "./pages/issues-of-action/Health";
import WaterSanitationAndHygiene from "./pages/issues-of-action/water-sanitation-hygiene";
import FundRaiseForUs from "./pages/join-us/Fundraise-for-us";
import InternshipsAndVacancies from "./pages/join-us/Internships-and-vacancies";
import JoinFreindsOfRihaKenya from "./pages/join-us/Join-freinds-of-riha-Kenya";
import MakeDonation from "./pages/join-us/Make-donation";
import Partnership from "./pages/join-us/Partnership";
import VolunteerWithUs from "./pages/join-us/Volunteer-with-us";
function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/organization-overview" component={OrganizationOverview} />
        <Route exact path="/vision-and-mission" component={VisionAndMission} />
        <Route exact path="/core-and-values" component={CoreValues} />
        <Route exact path="/board-and-management" component={BoardAndManagement} />

        <Route exact path="/water-sanitation-and-hygiene" component={WaterSanitationAndHygiene} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/environmental-conservation" component={EnvironmentalConservation} />

        <Route exact path="/our-blogs" component={Blog} />

        <Route exact path="/join-friends-of-riha-kenya" component={JoinFreindsOfRihaKenya} />
        <Route exact path="/partnership" component={Partnership} />
        <Route exact path="/fundraise-for-us" component={FundRaiseForUs} />
        <Route exact path="/volunteer-with-us" component={VolunteerWithUs} />
        <Route exact path="/internships-and-vacancies" component={InternshipsAndVacancies} />
        <Route exact path="/make-donation" component={MakeDonation} />

        <Route exact path="/blog-single/:blogId/:authorId" component={BlogSingle} />

        <Route exact path="/contact-us" component={ContactUs} />

        <Route exact path="/our-gallery" component={Gallery} />

        </Switch>
    </Router>
  );
}

export default App;
