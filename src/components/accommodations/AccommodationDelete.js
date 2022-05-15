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

  const url = Baseurl + `api/accommodations/${id}`;

  async function handleDelete() {
    try {
      await axios.delete(url);
      window.location = "/Accommodation";
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
