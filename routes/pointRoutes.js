const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const { pool } = require('../config');

const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = (app) => {
	app.get(`/api/points`, async (req, res) => {
		// Выборка всех меток из бд
		pool.query('SELECT * FROM points', (error, results) => {
			if (error) {
				throw error;
			}
			return res.status(200).send(results.rows);
		});
	});

	app.post(`/api/point`, async (req, res) => {
		const { category, title, description, coordinate } = req.body;

		// Добавление информации в лог
		const id = shortid.generate();
		const timeOfAdd = new Date();
		db.get('logs').push({ id, title, timeOfAdd }).write();

		// Добавление новой метки в бд
		pool.query(
			'INSERT INTO points (title, category, description, coordinate) VALUES ($1, $2, $3, $4)',
			[title, category, description, coordinate],
			(error) => {
				if (error) {
					throw error;
				}
				return res.status(201).send({ status: 'success', message: 'Point added.' });
			}
		);
	});

	/* app.put(`/api/point`, async (req, res) => {
		const { category, title, description, coordinates, id } = req.body;

		let points = db
			.get('points')
			.find({ id })
			.assign({ category, title, description, coordinates })
			.write();

		const point = db.get('points').find({ id }).value();

		return res.status(202).send({
			error: false,
			point,
		});
	});

	app.delete(`/api/point/:id`, async (req, res) => {
		const { id } = req.params;
		console.log(id);

		db.get('points').remove({ id }).write();

		return res.status(202).send({
			error: false,
		});
	}); */
};
