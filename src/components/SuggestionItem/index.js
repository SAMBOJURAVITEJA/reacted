import './index.css'

const SuggestionItem = props => {
  const {a1} = props
  const {suggestion} = a1

  return (
    <li>
      <p>{suggestion}</p>
      <img
        className="image2 p"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
