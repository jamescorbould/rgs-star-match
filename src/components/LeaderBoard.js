import { json } from 'body-parser';
import React from 'react';

const getLeaders = () => {
	const jsonData = require('./leaderboard.json');
	return Array.from(jsonData.leaders);
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
				{
					leaders.map((leader) => {
						return <tr key={leader.id}><td>{leader.name}</td><td></td><td>{leader.timeSecs}</td></tr>;
					})
				}
			</table>
		</div>
	);
};

export default LeaderBoard;
