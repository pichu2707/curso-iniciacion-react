import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

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
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
