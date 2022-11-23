const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://learningNode:q7YJ0aCj6a5woexB@learningnode.ekparu8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports = client;