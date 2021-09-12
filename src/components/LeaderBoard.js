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
				<tr><td>{leaders}</td></tr>
				{leaders.forEach(item => {
					item;
				})}
			</table>
		</div>
	);
};

export default LeaderBoard;
