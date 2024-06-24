import { Router } from 'express';
import 'dotenv/config';
import passport from 'passport';
import * as controller from '../../Controllers/index.js';

const router = Router();
//todo: rewrite routes naming
//*GET
router.get('/', controller.indexGet);
router.get('/coordinates', controller.CoordinatesGet);
router.get('/records', controller.RecordsGet);
//*POST

router.post(
  '/startRecord',

  controller.startRecordPost
);

//*Delete
router.delete('/IncompleteRecords', controller.deleteIncompleteRecords);

//*Update
router.put('/usernameRecord', controller.usernameRecordUpdate);
router.put('/endRecord', controller.endRecordUpdate);

const array = [];
router.get('/test', (req, res) => res.json({ array }));
router.post('/test', (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

export default router;
