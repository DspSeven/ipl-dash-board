// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    playersData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPlayersData()
  }

  getPlayersData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const {teams} = data
    const newData = teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    console.log(newData)
    this.setState({playersData: newData, isLoading: false})
  }

  playersCard = () => {
    const {playersData} = this.state
    const {id} = playersData
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <Link to={`/team-matches/${id}`}>
          <ul>
            {playersData.map(eachPlayer => (
              <TeamCard playerDetails={eachPlayer} key={eachPlayer.id} />
            ))}
          </ul>
        </Link>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div testid="loader">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.playersCard()
        )}
      </div>
    )
  }
}
export default Home
