import React, { useState } from 'react';
import { shortenUrl } from '../api';

const UrlShortenerForm: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await shortenUrl(longUrl);
      setShortUrl(result.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
      alert('Failed to shorten URL');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default UrlShortenerForm;
