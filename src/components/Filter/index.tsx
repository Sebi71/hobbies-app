import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";

import "./style.scss";

interface FilterProps {
  handleFilter: (selectedOption: string) => void;
  categories: string[];
}

const Filter: React.FC<FilterProps> = ({ handleFilter, categories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Tous");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(
    () =>
      categories.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [categories, searchTerm]
  );

  useEffect(() => {
    handleFilter(selectedOption);
  }, [selectedOption, handleFilter]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const selectOption = useCallback((option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm("");
  }, []);

  const resetFilter = useCallback(() => {
    setSelectedOption("Tous");
    setSearchTerm("");
  }, []);
  

  return (
    <div className="filter-component"  ref={dropdownRef}>
      <LuFilter className="filter-icon" onClick={() => setIsOpen(!isOpen)} />
      <div className="filter-container">
        <div
          className={`filter-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>{selectedOption}</span>
          <div className="icons">
            {selectedOption !== "Tous" && (
              <FiX
                className="icon-x"
                onClick={(e) => {
                  e.stopPropagation();
                  resetFilter();
                }}
              />
            )}
            <FiChevronDown className="icon-chevron" />
          </div>
        </div>

        {isOpen && (
          <div className="dropdown">
            <input
              type="text"
              className="search-input"
              placeholder="Recherchez..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option}
                    className={`option ${
                      selectedOption === option ? "selected" : ""
                    }`}
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="no-results">Aucun résultat trouvé</div>
              )}
            </div>
            <button className="reset-button" onClick={resetFilter}>
              Réinitialiser le filtre
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
