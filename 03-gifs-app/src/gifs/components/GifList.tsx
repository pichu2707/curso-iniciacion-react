import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
}

export const GifList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <p>
            {gif.width}x{gif.height}
          </p>
        </div>
      ))}
    </div>
  );
};
