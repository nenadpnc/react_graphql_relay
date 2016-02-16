import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;
const MONGO_URL = 'mongodb://rgrjs:rgrjs@ds051630.mongolab.com:51630/rgrjs'

MongoClient.connect(MONGO_URL, (err, database) => {
	if (err) throw err

	db = database;
	
	app.use('/graphql', GraphQLHTTP({
		schema: schema(db),
		graphiql: true
	}));

	app.listen(3000, () => console.log('Listening on port 3000'));
});
