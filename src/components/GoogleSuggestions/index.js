import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {

    const {suggestionsList} = this.props

    state = {suggestionsList1: suggestionsList}

    change=event=>{
        this.setState(prevState=>
            ({suggestionList1:
                prevState.suggestionList1.filter
                (each=>each.suggestion.includes(event.target.value))}))
    }
  render() {
    
    const {suggestionsList1} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <div className="content">
            <img
              className="image1"
              alt="google logo"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            />
          </div>
          <ul className=" list-container">
            <li className="searching">
              <img
                className="image2"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input  onClick={this.change} placeholder="search engine" type="search" />
            </li>
            {suggestionsList1.map(a1 => (
              <SuggestionItem a1={a1} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
