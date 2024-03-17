const knexfile = require("../knexfile")
const knex = require("knex")(knexfile.development)


const allAlumni = () => {
    return knex("alumni").select(
        "alumni.id", 
        "alumni.nama", 
        "alumni.nis",
        "alumni.alamat",
        "alumni.angkatan",
        "alumni.pekerjaan",
        "alumni.perusahaan",
        "alumni.kesan")
    .orderBy("nis", 'asc')
    
}

const findByIdAlumni = (id) => {
    
    return knex("alumni").select(
        "alumni.id", 
        "alumni.nama", 
        "alumni.nis",
        "alumni.alamat",
        "alumni.angkatan",
        "alumni.pekerjaan",
        "alumni.perusahaan",
        "alumni.kesan")
    .where("alumni.id", id).first();
}

const createAlumni = (alumni) => {
    return knex("alumni").insert(alumni)
}

const updateAlumni = (id, alumni) => {
    return knex("alumni").where("id", id).update(alumni)
}

const deleteAlumni = (id, alumni) => {
    return knex("alumni").where("id", id).del(alumni)
}

module.exports = {allAlumni, findByIdAlumni, createAlumni, updateAlumni, deleteAlumni}