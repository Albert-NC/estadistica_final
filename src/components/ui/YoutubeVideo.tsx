import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YoutubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
  start?: number;
}

export function YoutubeVideo({ videoId, title, className = '', start = 0 }: YoutubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgUrl, setImgUrl] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  const handleImgError = () => {
    if (imgUrl.includes('maxresdefault')) {
      setImgUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  if (isPlaying) {
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${start}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={`group absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center cursor-pointer ${className}`}
      aria-label={`Reproducir video: ${title}`}
    >
      {/* Miniatura del video */}
      <img
        src={imgUrl}
        alt={title}
        decoding="async"
        onError={handleImgError}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Capa de oscurecimiento en hover */}
      <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />

      {/* Botón de Play flotante animado */}
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-gold text-blue-deep rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(230,172,9,0.6)]">
        <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
      </div>
    </button>
  );
}
