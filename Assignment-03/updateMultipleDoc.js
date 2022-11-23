const client = require("./dbClient");

async function updateMultiplaDoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = {
        }

        const updateMultipleDoc = {
            $set: {
                batch: '20-2'
            }
        }



        const updateResult = await studentCollection.updateMany(filter, updateMultipleDoc);
        console.log('Multiple document was updated: ', updateResult);

    } catch (error) {
        console.log(error)
    } finally {
        await client.close();
    }
}
updateMultiplaDoc();