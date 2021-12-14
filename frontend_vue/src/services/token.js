import moment from "moment";

const checkInvalidToken = () => {
	const lsKey = localStorage.getItem("key");
	if (!lsKey) {
		return true;
	}

	const currentDev = JSON.parse(lsKey);
	const timeLogin = currentDev.dt;
	const now = moment(new Date());
	const timeLoginDuration = moment.duration(now.diff(timeLogin));
	return !currentDev.val || timeLoginDuration.asHours() > 2;
};

export default checkInvalidToken;