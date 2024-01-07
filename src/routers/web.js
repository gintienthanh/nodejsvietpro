const express = require("express");
const router = express.Router();


// const Testcontroller = require("../app/controllers/Testcontroller");
const Admincontroller = require("../app/controllers/admin");
const Authcontroller = require("../app/controllers/auth");
const Productcontroller = require("../app/controllers/product");
const Usercontroller = require("../app/controllers/user");
const Categorycontroller = require("../app/controllers/category");



router.get("/admin/login", Authcontroller.login);
router.get("/admin/logout", Authcontroller.logout);


router.get("/admin/dashboard", Admincontroller.index);


router.get("/admin/products", Productcontroller.indexproduct);
router.get("/admin/products/create", Productcontroller.createproduct);
router.get("/admin/products/delete", Productcontroller.deleteproduct);
router.get("/admin/products/edit", Productcontroller.editproduct);

router.get("/admin/user", Usercontroller.indexuser);
router.get("/admin/user/create", Usercontroller.createuser);
router.get("/admin/user/delete", Usercontroller.deleteuser);
router.get("/admin/user/edit", Usercontroller.edituser);

router.get("/admin/category", Categorycontroller.indexcategory);
router.get("/admin/category/create", Categorycontroller.createcategory);
router.get("/admin/category/delete", Categorycontroller.deletepcategory);
router.get("/admin/category/edit", Categorycontroller.editcategory);



module.exports = router;


