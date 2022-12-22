// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {playerDetails} = props
  const {id, name, teamImageUrl} = playerDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <div>
        <img src={teamImageUrl} alt={`player-from-${id}`} />
        <h1>{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
