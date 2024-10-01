import express from 'express';
import { completeText } from '../controllers/groqController.js';

const router = express.Router();

router.post('/', completeText);

export default router;
