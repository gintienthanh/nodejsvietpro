const indexuser = ( req, res)=>{
    res.send("/admin/user/");
}


const createuser = ( req, res)=>{
    res.send("/admin/user/create");
}
const deleteuser = ( req, res)=>{
    res.send("/admin/user/delete");
}
const edituser = ( req, res)=>{
    res.send("/admin/user/edit");
}
module.exports = {
    indexuser,
    createuser,
    deleteuser,
    edituser
};