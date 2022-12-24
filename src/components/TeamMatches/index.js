// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    eachPlayerData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getPlayerData()
  }

  getPlayerData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const newData = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
      //
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(newData)
    this.setState({eachPlayerData: newData, isLoading: false})
  }

  players = () => {
    const {eachPlayerData} = this.state
    const {recentMatches, teamBannerUrl} = eachPlayerData
    const colorsList = [
      '#d91c1f',
      '#f7db00',
      '#da237b',
      '#f26d22',
      '#4f5db0',
      '#0f172a',
      '#18ed66',
      '#e31a1a',
    ]
    const randomNumber = Math.floor(Math.random() * 8)
    const randomColor = colorsList[randomNumber]
    console.log(randomColor)
    return (
      <div
        className="team-match-container"
        style={{backgroundColor: randomColor}}
      >
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-match-image"
        />
        <LatestMatch eachPlayerData={eachPlayerData} />
        <ul className="unorder-list-container">
          {recentMatches.map(recentGame => (
            <MatchCard playerDetails={recentGame} key={recentGame.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.players()
        )}
      </div>
    )
  }
}
export default TeamMatches
