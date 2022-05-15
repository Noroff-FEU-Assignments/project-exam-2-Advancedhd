import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Baseurl } from "../constants/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  let [items, setItems] = useState({});

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccommodations() {
      try {
        const response = await axios.get(
          Baseurl + "api/Accommodations?populate=*"
        );
        return response.data.data;
      } catch (error) {
        console.log("error", error);
      } finally {
        setSubmitting(false);
      }
    }
    getAccommodations().then((items) => {
      items = items.map((item) => {
        let formatted = { id: item.id, name: item.attributes.title };
        return formatted;
      });
      setItems(items);
    });
  }, []);

  const handleOnSelect = (item) => {
    document.location = `/detail/${item.id}`;
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return (
      <a
        className="searchbar__result"
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </a>
    );
  };

  return (
    <header className="accommodation__search__bar">
      <div className="search__bar">
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
    </header>
  );
}

export default SearchBar;
