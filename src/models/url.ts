import { Schema, model } from 'mongoose';

interface IUrl {
  longUrl: string;
  shortUrl: string;
  urlCode: string;
  date: { type: string; default: Date };
}

const urlSchema = new Schema<IUrl>({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  urlCode: { type: String, required: true, unique: true },
  date: { type: String, default: Date.now }
});

export default model<IUrl>('Url', urlSchema);
