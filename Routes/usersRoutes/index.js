import { Router } from 'express';
import 'dotenv/config';
import passport from 'passport';
import * as controller from '../../Controllers/index.js';

const router = Router();

//*GET
router.get('/', controller.indexGet);
router.get('/coordinates', controller.CoordinatesGet);
router.get('/records', controller.RecordsGet);
//*POST
// router.get('/:map', controller.mapGet);
router.post('/recordUsernamePost', controller.RecordUsernameUpdate);
//*Delete

//*Update
const array = [];
router.get('/test', (req, res) => res.json({ array }));

router.post('/test', (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

export default router;
