import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderCryptoDetails = () => {
    const {cryptoData} = this.state
    return (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <ul className="list-container">
          <li className="headers-container">
            <p className="coin-type">Coin Type</p>
            <div className="euro-usd-container">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </li>
          {cryptoData.map(each => (
            <CryptocurrencyItem key={each.id} crypto={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="currencies-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoDetails()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
