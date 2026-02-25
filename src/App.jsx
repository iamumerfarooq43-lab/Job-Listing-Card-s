import Card from "./components/card.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import jobOpenings from "./Data/Data.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        {jobOpenings.map(function (elem, idx) {
          return (
            <Card
              img={elem.brandLogo}
              tag1={elem.tag1}
              tag2={elem.tag2}
              company={elem.companyName}
              post={elem.post}
              date={elem.datePosted}
              location={elem.location}
              pay={elem.payPerHour}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
