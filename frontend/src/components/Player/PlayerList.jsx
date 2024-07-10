import PropTypes from "prop-types"

const PlayerList = ({ players, updateCurrentPlayer }) => {
	return (
		<div>
			<ul className="collection with-header">
			<h4>Players</h4>
				<li className="collection-header"></li>
				{players.map((player) => (
					<a
						href="#!"
						className="collection-item"
						key={player.id}
						onClick={() => updateCurrentPlayer(player)}
					>
						{player.firstName} {player.lastName}
					</a>
				))}
			</ul>
		</div>
	)
}

PlayerList.propTypes = {
	players: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			// Add more PropTypes for other player attributes
		})
	).isRequired,
	updateCurrentPlayer: PropTypes.func.isRequired,
}

export default PlayerList
