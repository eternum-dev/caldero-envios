import { useContext, useState } from "react";
import { stringCapitalization } from "../helpers";
import { MapContext } from "../context";
import PropTypes from "prop-types";
import { Hr } from "./Hr";
import "./countrySelector.css";

export const CountrySelector = ({ setCountry, wizardData, showError }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { countrys, countrySelected } = useContext(MapContext);
  const searchTermLowerCase = searchTerm.toLowerCase();

  const filteredCountries = countrys?.sort((a, b) => {
    const term = searchTermLowerCase;
    const aStartsWith = a.name.common.toLowerCase().startsWith(term);
    const bStartsWith = b.name.common.toLowerCase().startsWith(term);

    if (aStartsWith && !bStartsWith) return -1;

    if (!aStartsWith && bStartsWith) return 1;
  });

  const changeCountrySelected = (event, country) => {
    setCountry({
      name: event.target.name,
      flag: country.flags.png,
      cca2: country.cca2,
      cord: {
        lat: country.capitalInfo.latlng[0],
        lng: country.capitalInfo.latlng[1],
      },
    });
  };

  const heightSeparatorSection = "100%";

  return (
    <div className={`countryselector ${showError && "countryselector__error"}`}>
      <div className="countryselector__searchbox">
        <header className="countrySelector__header">
          <h3>Selecciona un pais </h3>
          <input
            id="countryselector__input"
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Chile"
          />
        </header>

        <>
          {filteredCountries?.map((country) => (
            <div
              className="countryselector__listitem listitem"
              key={country.cca2}
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="listitem__image"
              />
              <h5 className="listitem__name">{country?.name?.common}</h5>
              <input
                type="checkbox"
                name={country.name.common}
                id={country.name.common}
                checked={country.name.common === wizardData?.country?.name}
                title={country.name.common}
                onChange={(event) => changeCountrySelected(event, country)}
              />
            </div>
          ))}
        </>
      </div>
      <Hr height={heightSeparatorSection} />
      <div className="countryselector__samplebox samplebox">
        {countrySelected && (
          <>
            <h5 className="samplebox__name">
              {stringCapitalization(
                wizardData?.cord?.name || countrySelected?.name
              )}
            </h5>
            <img
              src={wizardData?.country?.flag || countrySelected?.flag}
              alt={countrySelected?.name}
              className="samplebox__image"
            />
          </>
        )}
      </div>
    </div>
  );
};

CountrySelector.propTypes = {
  setCountry: PropTypes.func,
  wizardData: PropTypes.object,
  showError: PropTypes.bool,
};
