const task = require('../models/task');
const Tasks = require ('../models/task')

//get all task
const getAlltask = async (req, res)=>{
try {
    const tasks = await Tasks.find();
    res.staus(200).json({success: true, tasks})
} catch (error) {
    console.log(error);
}
}

//get a single task
const getAtask = async (req, res)=>{
    const {taskId} = req.params
  try {
    const task = await Tasks.findById();
    res.status(200).json({success: true, taskId})
  } catch (error) {
    console.log(error);
  }
}

//creat a task
const createTask = async (req, res)=>{
    const {title, description, tags} = req.body
    console.log(req.body);
    if (!title || !description || !tags){
       return res.status(404).json({success: false, msg:'Plese fill out all inputs'})
    }
try {
    const task = await Tasks.create({...req.body});
    res.status(200).json({success: true, task})
} catch (error) {
    res.json(error)
}
}
//update a task
const updateTask = async (req, res) =>{
    const {taskId} = req.params
    const task = await Tasks.findByIdAndUpdate({taskId}, req.body, {
        new: true,
        runvalidators: true,});
        res.status(200).json({success: true, task})
}
//delete a task
const deleteTask = async (req, res) =>{
    const {taskId} = req.params
    const task = await Tasks.findByIdAndDelete({taskId})
res.status(200).json({success: true, msg:'Task Deleted'})
}

module.exports = {getAlltask, getAtask, createTask, updateTask, deleteTask}