const makeNuclearButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const totalPeaceTime = () => timeWithoutDestruction;
	const launch = () => {
		timeWithoutDestruction = -1;
		return "Boom!";
	};
	setInterval(passTime, 1000);
	return {
		launch: launch,
		totalPeaceTime: totalPeaceTime,
	};
};
const ohno = makeNuclearButton();
ohno.totalPeaceTime();
