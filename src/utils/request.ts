const BASE_URL = 'https://wp.newborntoolkit.org/wp-json/nest360/v1/news';

export const request = async (path = '') => {
	const response = await fetch(`${BASE_URL}/${path}`);

	return response.json();
};
