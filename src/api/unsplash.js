import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID -TUmLefHVD0t75qeCTLbByctzjl6MSHnU_N4pc2gAuk',
	},
});
