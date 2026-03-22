export const MyAwesomeApp = () => {
  const name = "Javier";
  const apellido = "Lázaro";
  const favoriteGames = ["metal gear", "Street Fighter", "Killer Instint"];
  return (
    <>
      <h1>{name}</h1>
      <h3>{apellido}</h3>
      <p>{favoriteGames.join(', ')}</p>
    </>
  );
};
