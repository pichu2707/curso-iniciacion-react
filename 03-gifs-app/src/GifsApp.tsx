import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [PreviousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if (query.length === 0) return;
    if (PreviousTerms.includes(query)) return;
    setPreviousTerms([query, ...PreviousTerms].splice(0, 8));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif"
      />
      {/* Search */}
      <SearchBar placeholder="Buscar gif" onQuery={handleSearch} />
      {/* Busquedas previas */}
      <PreviousSearch
        title="Búsquedas previas"
        searches={PreviousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
