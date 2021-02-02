import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class SearchBar extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: {},
    showOptions: false,
    userInput: "",
  };

  onChange = (e) => {
    console.log("onChanges");

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {

    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;


    
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="searchbar__results">
            {filteredOptions.map((optionName, index) => {
              let className;

              if (index === activeOption) {
                className = "searchbar__results--active";
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  <Link to={"establishment/" } style={{textDecoration: "none", color: "black"}} className="">
                  {optionName}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="searchbar__results--none">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="searchbar"
            placeholder="Find a place to stay"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default SearchBar;
