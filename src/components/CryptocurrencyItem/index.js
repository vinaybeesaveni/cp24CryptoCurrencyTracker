import './index.css'

const CryptocurrencyItem = props => {
  const {crypto} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = crypto
  return (
    <li className="list-item">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-values-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
