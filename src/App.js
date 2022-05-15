import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import HeroBanner from "./components/home/HeroBanner";
import AccommondationGet from "./components/getaccommodations/AccommondationGet";
import DetailAccommodations from "./components/getaccommodations/DetailAccommodations";
import Information from "./components/home/Information";
import LoginForm from "./components/login/LoginForm";
import { AuthProvider } from "./components/context/Auth";
import Navigationbar from "./components/global/Navbar";
import BookModal from "./components/getaccommodations/BookModal";
import EnquiriesGet from "./components/admin/EnqiuriesGet";
import CommentsPost from "./components/contact/CommentsPost";
import CommentsGet from "./components/admin/CommentsGet";
import AccommodationPost from "./components/admin/AccommodationPost";
import AccommondationGetAll from "./components/getaccommodations/AccommodationGetAll";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigationbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <AccommondationGet />
                <Information />
              </>
            }
          />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Contact" element={<CommentsPost />} />
          <Route path="/Accommodation" element={<AccommondationGetAll />} />
          <Route path="/detail/:id" element={<DetailAccommodations />} />
          <Route
            path="/Admin"
            exact
            element={
              <>
                <AccommodationPost /> <EnquiriesGet /> <CommentsGet />
              </>
            }
          />
          <Route path="/Enquiry" element={<BookModal />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
