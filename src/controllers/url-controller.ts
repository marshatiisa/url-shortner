import { Request, Response } from 'express';
import shortid from 'shortid';
import Url from '../models/url';

export const shortenUrl = async (req: Request, res: Response) => {
  const { longUrl } = req.body;
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  if (!longUrl) {
    return res.status(400).json('Invalid URL');
  }

  const urlCode = shortid.generate();

  try {
    let url = await Url.findOne({ longUrl });
    if (url) {
      res.json(url);
    } else {
      const shortUrl = `${baseUrl}/${urlCode}`;
      url = new Url({ longUrl, shortUrl, urlCode });
      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

export const redirectUrl = async (req: Request, res: Response) => {
  const { urlCode } = req.params;
  try {
    const url = await Url.findOne({ urlCode });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};
