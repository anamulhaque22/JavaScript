const client = require("./dbClient");

async function insertADoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const data = {
            name: 'Sayket Rana',
            id: '20-42032-1',
            department: 'CSE',
            batch: '20-1',
        }

        const insertResult = await studentCollection.insertOne(data);
        console.log('A document was inserted: ', insertResult);

    } catch (error) {
        console.log(error)
    } finally {
        await client.close();
    }
}
insertADoc();