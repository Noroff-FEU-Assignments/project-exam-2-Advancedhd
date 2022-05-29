import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Baseurl } from "../../constants/Api";
import AuthContext from "../../context/Auth";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function EnquiriesDelete({ id }) {
  const [, setError] = useState(null);
  const [auth] = useContext(AuthContext);

  const url = Baseurl + `api/enquiries/${id}`;

  async function handleDelete() {
    try {
      await axios.delete(url);
      window.location = "/Admin";
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

EnquiriesDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
