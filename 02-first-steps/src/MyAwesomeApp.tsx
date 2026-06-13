export const MyAwesomeApp = () => {
  const name = "Javier";
  const apellido = "Lázaro";
  const favoriteGames = ["metal gear", "Street Fighter", "Killer Instint"];
  const isActive = true;
  const address = {
    zipCode: "1234",
    Country: "Spain",
  };
  return (
    <>
      <h1 data-testid="first-name-title">{name}</h1>
      <h3>{apellido}</h3>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>

      {/* Valor booleano no tiene representacion en pantalla */}
      <h1>{isActive ? "Activo" : "No activo"}</h1>
      <p style={{ backgroundColor: "red", borderRadius: 50, padding: 10 }}>
        Dirección: {JSON.stringify(address)}
      </p>
    </>
  );
};
