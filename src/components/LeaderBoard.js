import React from 'react';

const getLeaders = () => {
	return JSON.parse('./leaderboard.json');
};

const LeaderBoard = () => {
	const leaders = getLeaders();

	return (
		<div className="leaderboard-table">
			<table>
				<tr>
					<td>Name</td>
					<td>Date &amp; Time Played</td>
					<td>Completed Time (Secs)</td>
				</tr>
				<tr><td>{leaders}</td></tr>
			</table>
		</div>
	);
};

export default LeaderBoard;
