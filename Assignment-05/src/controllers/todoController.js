const todoModel = require("../models/todoModel");

// insert todo item
exports.insertTodo = async (req, res) => {
    const userName = req.userName;
    const {
        todoSubject,
        todoDescription,
    } = req.body;
    const postBody = {
        userName,
        todoSubject,
        todoDescription,
        todoStatus: 'New',
        todoCreateDate: Date.now(),
        todoUpdateDate: Date.now()
    };
    try {
        const newTodo = new todoModel(postBody);
        const data = await newTodo.save(postBody);
        res.status(200).json({ message: 'Success.', data: data });
    } catch (error) {
        res.status(400).json({ message: 'Failed.', data: data });
    }
};

//get todo
exports.getTodo = (req, res) => {
    const userName = req.userName;
    todoModel.find({ userName: userName }, (err, data) => {
        if (!err) {
            if (data.length > 0) {
                res.status(200).json({ message: 'Success.', data: data });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } else {
            res.status(400).json({ message: 'Failed.', error: err });
        }
    })
}

//update todo
exports.updateTodo = (req, res) => {
    const userName = req.userName;
    const _id = req.body._id;

    const { todoSubject, todoDescription } = req.body;

    const postBody = {
        todoSubject,
        todoDescription,
        todoUpdateDate: Date.now()
    };

    todoModel.updateOne({ userName, _id }, { $set: postBody }, { upsert: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Update success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    })
}

// update todo status
exports.updateTodoStatus = (req, res) => {
    const userName = req.userName;
    const _id = req.body._id;
    const postBody = {
        todoStatus: req.body["todoStatus"],
        todoUpdateDate: Date.now()
    };

    todoModel.updateOne({ userName, _id }, { $set: postBody }, { upsert: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Update success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    });
}

//remove todo
exports.removeTodo = (req, res) => {
    const _id = req.body["_id"];
    todoModel.remove({ _id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        }
        else {
            res.status(200).json({ status: "success", data: data })
        }
    });
}

//select todo by status
exports.selectTodoByStatus = (req, res) => {
    const userName = req.userName;
    const todoStatus = req.body['todoStatus'];

    todoModel.find({ userName, todoStatus }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    });
};

//select todo by date
exports.selectTodoByDate = (req, res) => {
    const userName = req.userName;
    let fromDate = req.body["fromDate"];
    let toDate = req.body["toDate"];

    todoModel.find({ userName, todoCreateDate: { $gte: new Date(fromDate), $lte: new Date(toDate) } }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    });
}