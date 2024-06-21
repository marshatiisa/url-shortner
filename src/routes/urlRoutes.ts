import { Router } from 'express';
import { shortenUrl, redirectUrl } from '../controllers/url-controller';

const router = Router();

router.post('/shorten', shortenUrl);
router.get('/:urlCode', redirectUrl);

export default router;
