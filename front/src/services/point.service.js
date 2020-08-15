import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get(`/api/points`);
		return res.data || [];
	},
	add: async (category, title, description, coordinates) => {
		let res = await axios.post(`/api/point/`, { category, title, description, coordinates });
		return res.data || {};
	},
	edit: async (category, title, description, coordinates, id) => {
		let res = await axios.put(`/api/point/`, { category, title, description, coordinates, id });
		return res.data || {};
	},
	delete: async (id) => {
		let res = await axios.delete(`/api/point/${id}`);
		return res.data || [];
	},
};
