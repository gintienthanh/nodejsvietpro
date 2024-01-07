const indexproduct = ( req, res)=>{
    res.send("/admin/products/");
}


const createproduct = ( req, res)=>{
    res.send("/admin/products/create");
}
const deleteproduct = ( req, res)=>{
    res.send("/admin/products/delete");
}
const editproduct = ( req, res)=>{
    res.send("/admin/products/edit");
}
module.exports = {
    indexproduct,
    createproduct,
    deleteproduct,
    editproduct
};