const client = require("./dbClient");

async function deleteMultipleDoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = { department: 'CSE' }

        const result = await studentCollection.deleteMany(filter);

        console.log("Deleted " + result.deletedCount + " documents");

    } catch (error) {

    } finally {
        await client.close();
    }
}
deleteMultipleDoc();