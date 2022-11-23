const client = require("./dbClient");

async function deleteADoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const filter = { id: '20-42032-1' }
        
        const result = await studentCollection.deleteOne(filter);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
    } catch (error) {

    } finally {
        await client.close();
    }
}
deleteADoc();