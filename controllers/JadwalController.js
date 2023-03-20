import Jadwal from "../models/JadwalModel.js";

export const getJadwal = async(req, res) =>{
    try {
        const response = await Jadwal.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getJadwalById = async(req, res) =>{
    try {
        const response = await Jadwal.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createJadwal = async(req, res) =>{
    try {
        await Jadwal.create(req.body);
        res.status(201).json({msg: "Jadwal Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateJadwal = async(req, res) =>{
    try {
        await Jadwal.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Jadwal Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteJadwal = async(req, res) =>{
    try {
        await Jadwal.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Jadwal Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}