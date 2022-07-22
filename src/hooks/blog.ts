import { request } from 'src/utils/request';

const useBlog = () => {
	const blogs = request();

	return [blogs];
};

export default useBlog;
