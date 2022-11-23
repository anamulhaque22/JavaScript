const client = require("./dbClient");

async function updateADoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = {
            id: '20-42032-1',
        }

        const updateDoc = {
            $set: {
                department: 'BBA'
            }
        }



        const updateResult = await studentCollection.updateOne(filter, updateDoc);
        console.log('A document was updated: ', updateResult);

    } catch (error) {
        console.log(error)
    } finally {
        await client.close();
    }
}
updateADoc();