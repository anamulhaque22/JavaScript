const client = require("./dbClient");

async function findMultipleDoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = { }
        const option = {
            sort: { id: -1 },
            projection: { _id: 0, name: 1, department: 1 }// projection
        }
        const result = await studentCollection.find(filter, option).toArray();
        console.log(result);
    } catch (error) {

    } finally {
        await client.close();
    }
}
findMultipleDoc();