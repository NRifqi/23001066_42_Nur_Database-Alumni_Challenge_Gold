const { allAlumni, findByIdAlumni, createAlumni, deleteAlumni, updateAlumni } = require("../models/alumniModel");

const  getAlumni = async (req, res) => {
    try {
        const alumni = await allAlumni();
        res.render("alumni", {alumni})
        console.log(alumni);
    } catch (error) {
        res.status(500).json({
        message: "internal server error",
        });
    }
  }

const getByIdAlumni = async(req, res) => {
    try {
        const id = req.params.id
        const detailAlumni = await findByIdAlumni(id);
        res.render('detail-alumni', {detailAlumni})
        console.log(detailAlumni)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
  }

const postAlumni = async (req, res) => {
    try {
      console.log(req.body)
      const {nama, alamat, nis, angkatan, pekerjaan, perusahaan, kesan} = req.body
      const addAlumni = {
        nama, 
        nis:  Number(nis), 
        alamat, 
        angkatan: Number(angkatan), 
        pekerjaan, 
        perusahaan, 
        kesan
      }
  
      await createAlumni(addAlumni)
  
      res.redirect("/alumni")
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "internal server error",
      });
    }
  }

const patchAlumni = async (req, res) => {
    try {
      console.log(req.body)
      const id = req.params.id
      const {nama, alamat, nis, angkatan, pekerjaan, perusahaan, kesan} = req.body
      const addAlumni = {
        nama, 
        nis:  Number(nis), 
        alamat, 
        angkatan: Number(angkatan), 
        pekerjaan, 
        perusahaan, 
        kesan
      }
  
      await updateAlumni(id, addAlumni)
  
      res.redirect("/alumni")
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "internal server error",
      });
    }
  }
  
const getEdit = async (req,res) => {
    const id = req.params.id

    const alumni = await findByIdAlumni(id)
    res.render("edit-alumni", {alumni})
  }


const delAlumni = async (req,res) => {
    const id = req.params.id

    const alumni = await deleteAlumni (id)
    res.redirect("/alumni")
  }

module.exports = {getAlumni, getByIdAlumni, postAlumni, patchAlumni, getEdit, delAlumni}