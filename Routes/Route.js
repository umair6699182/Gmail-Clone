import express from 'express'
import { emailFunction , getEmails , moveEmailToBin , toggleStarredEmails , deleteEmails } from '../Controllers/EmailController.js';

const Router = express.Router();


Router.post('/save' , emailFunction);
Router.get('/emails/:type' , getEmails)
Router.post('/save-draft' , emailFunction);
Router.post('/bin' , moveEmailToBin);
Router.post('/starred' , toggleStarredEmails);
Router.delete('/delete', deleteEmails)

export default Router;