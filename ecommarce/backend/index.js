//internal imports
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(process.env.PORT)
    console.dir(`App is listing to port ${process.env.PORT}`);
})