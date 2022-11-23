const client = require("./dbClient");

async function findADoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = { id: '20-42032-1' };
        const result = await studentCollection.findOne(filter);
        console.log(result);
    } catch (error) {

    } finally {
        await client.close();
    }
}
findADoc();