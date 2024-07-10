import React from "react"
import PropTypes from "prop-types"

const PlayerSingle = ({ player }) => {
	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img src="/soccer.jpeg" alt="soccer image" />
						<span className="card-title">
							{player.firstName} {player.lastName}
						</span>
					</div>
					<div className="card-content">
						<p>
							Phone: {player.phone} - Email: {player.email}
						</p>
						<p>
							Strength: {player.strength} - Endurance: {player.endurance}
						</p>
					</div>
					<div className="card-action">Team: {player.team}</div>
				</div>
			</div>
		</div>
	)
}

PlayerSingle.propTypes = {
	player: PropTypes.shape({
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		phone: PropTypes.string,
		email: PropTypes.string.isRequired,
		strength: PropTypes.number.isRequired,
		endurance: PropTypes.number.isRequired,
		team: PropTypes.string,
	}).isRequired,
}

export default PlayerSingle
