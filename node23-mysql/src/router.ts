import express from "express";
import { authenticateJWT } from "./middleware/auth.middleware";
import { uploadFile, uploadMiddleware } from "./controllers/upload";

import { getHome } from "./controllers/home";

//USERS
import { changePassword, getAllusers, getUserbyid, updateProfile } from "./controllers/users";

//PRODUCTS
import { getProductList } from "./controllers/products";
import { getProductbyid } from "./controllers/products";
import { getProductSearch } from "./controllers/products";

//AUTHENTICATION
import { userLogin } from "./controllers/login";
import { userRegistration } from "./controllers/register";
import { activateMfa, verifyMfa } from "./controllers/mfa";

const router = express.Router();
//HOME CONTROLLER
router.get('/', getHome);

//PRODUCT CONTROLLER
router.get('/getproductid/:id', authenticateJWT, getProductbyid);
router.get('/products/list/:page', getProductList);
router.get('/products/search/:page/:key', getProductSearch);

//USER CONTROLLER
router.get('/getuserid/:id', authenticateJWT, getUserbyid);
router.get('/getallusers', authenticateJWT, getAllusers);
router.patch('/changepassword', changePassword);
router.patch('/updateprofile', updateProfile);
router.patch('/uploadpicture/:id', uploadMiddleware, uploadFile);

//LOGIN CONTROLLER
router.post('/signin', userLogin);

//REGISTER CONTROLLER
router.post('/signup', userRegistration);

//MULTI-FACTOR AUTHENTICATOR
router.patch('/mfa/activate', activateMfa);
router.patch('/mfa/verifytotp', verifyMfa);
export default router;
