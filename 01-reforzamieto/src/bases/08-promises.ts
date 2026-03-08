const myPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero!!
    //	resolve(100);
    reject("Mi amigo se perdió");
  }, 2000); // 2 segundos
});

myPromises
  .then((myMoney) => {
    console.log(`tengo mi dinero ${myMoney}`);
    i;
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Ha seguir con mi vida");
  });
