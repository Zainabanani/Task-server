
const express = require ('express')
const router = express.Router();
const {
    getAlltask,
    getAtask,
    createTask, 
    updateTask, 
    deleteTask
} = require ("../controller/taskController")


router.route("/").get(getAlltask).post(createTask)
router.route("/:taskId").patch(updateTask).delete(deleteTask).get(getAtask);

module.exports = router
