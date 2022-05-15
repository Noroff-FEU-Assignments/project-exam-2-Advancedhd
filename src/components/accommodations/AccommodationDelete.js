import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Baseurl } from "../constants/Api";
import AuthContext from "../context/Auth";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function AccommodationDelete({ id }) {
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

<<<<<<< HEAD:src/components/accommodations/AccommodationDelete.js
=======
  const navigate = useNavigate();

>>>>>>> e0cd23eaa27faa93a04f0046e63ab215e4e8df26:src/components/getaccommodations/DeleteAccommodation.js
  const url = Baseurl + `api/accommodations/${id}`;

  async function handleDelete() {
    try {
      await axios.delete(url);
<<<<<<< HEAD:src/components/accommodations/AccommodationDelete.js
      window.location = "/Accommodation";
=======
      navigate("/Accommodation");
>>>>>>> e0cd23eaa27faa93a04f0046e63ab215e4e8df26:src/components/getaccommodations/DeleteAccommodation.js
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      {auth ? (
        <>
          <Button className="delete__button" onClick={handleDelete}>
            Delete
          </Button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

AccommodationDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
