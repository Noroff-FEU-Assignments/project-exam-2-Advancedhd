import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import HeroBanner from "./components/home/HeroBanner";
import AccommondationGet from "./components/accommodations/AccommondationGet";
import AccommodationsDetail from "./components/accommodations/AccommodationsDetail";
import Information from "./components/home/Information";
import LoginForm from "./components/login/LoginForm";
import { AuthProvider } from "./components/context/Auth";
import Navigationbar from "./components/global/Navbar";
import BookModal from "./components/accommodations/BookModal";
import EnquiriesGet from "./components/admin/Enquiries/EnquiriesGet";
import CommentsPost from "./components/contact/CommentsPost";
import CommentsGet from "./components/admin/Comments/CommentsGet";
import AccommodationPost from "./components/admin/Accommodations/AccommodationPost";
import AccommondationGetAll from "./components/accommodations/AccommodationGetAll";
import Footer from "./components/global/Footer";

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
          <Route path="/detail/:id" element={<AccommodationsDetail />} />
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
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
