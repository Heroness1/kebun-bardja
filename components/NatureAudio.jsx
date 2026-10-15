"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music2 } from "lucide-react";

const TRACK_URL = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Catrik2w-ind.ogg";
const TRACK_PAGE = "https://commons.wikimedia.org/wiki/Category:Kacapi";

export default function NatureAudio() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      setFailed(false);
      await audio.play();
      setPlaying(true);
    } catch {
      setFailed(true);
      setPlaying(false);
    }
  };

  return (
    <aside className="nature-audio" aria-label="Musik suasana kebun">
      <audio
        ref={audioRef}
        src={TRACK_URL}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => { setFailed(true); setPlaying(false); }}
      />
      <button
        className="nature-audio-toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Jeda musik Sunda" : "Putar musik Sunda"}
        aria-pressed={playing}
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
        <span>{playing ? "Musik kebun" : "Suasana Sunda"}</span>
        {playing ? <Volume2 size={15} /> : <Music2 size={15} />}
      </button>
      {failed && (
        <p className="nature-audio-error" role="status">
          Audio belum dapat diputar. <a href={TRACK_PAGE} target="_blank" rel="noreferrer">Buka referensi kacapi</a>.
        </p>
      )}
      <span className="nature-audio-credit">
        <VolumeX size={11} /> Putar sesuai keinginan
      </span>
    </aside>
  );
}
