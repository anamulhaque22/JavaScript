const client = require("./dbClient");

async function insertMultipleDoc() {
    try {
        const studentCollection = client.db('school').collection('student');
        const multipleData = [
            {
                name: 'Mahmodule',
                id: '20-42033-1',
                department: 'CSE',
                batch: '20-1',
            },
            {
                name: 'Skib Al Hasan',
                id: '20-42034-1',
                department: 'BBA',
                batch: '20-1',
            },
            {
                name: 'Anamul Haque',
                id: '20-42035-1',
                department: 'CSE',
                batch: '20-1',
            },
        ]

        const insertResult = await studentCollection.insertMany(multipleData);
        console.log('Multiple documents was inserted And the updated result is: ', insertResult);

    } catch (error) {
        console.log(error)
    } finally {
        await client.close();
    }
}
insertMultipleDoc();