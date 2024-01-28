export const formateTime = (date, type) => {
	const time = new Date(date);
	const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const day = time.getDate();
	const c = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'];
	const startMonth = month - (day - 14 < '865778999988'.charAt(month));
	const horoscope = c[startMonth];

	const ageLever = `${(`${year}`).slice(2, 3)}0`;

	return { horoscope, ageLever };
};
