const indexcategory = ( req, res)=>{
    res.send("/admin/category/");
}


const createcategory = ( req, res)=>{
    res.send("/admin/category/create");
}
const deletepcategory = ( req, res)=>{
    res.send("/admin/category/delete");
}
const editcategory = ( req, res)=>{
    res.send("/admin/category/edit");
}
module.exports = {
    indexcategory,
    createcategory,
    deletepcategory,
    editcategory
};