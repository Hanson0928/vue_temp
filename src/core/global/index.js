class Global {
    

    setUrl(item) {
        //   console.log(item);
          let path = "https://res.bestcake.com/m-images/ww";
          if (item.SupplyNo.indexOf("NS") != -1) {
            return path + `/ns/${item.Name}.jpg`;
          } else if (item.SupplyNo.indexOf("KSK") != -1) {
            return path + `/jd/${item.Name}.png`;
          } else if (item.SupplyNo.indexOf("RP") != -1) {
            return path + `/rp/${item.Name}.jpg`;
          } else if (item.SupplyNo.indexOf("JZ") != -1) {
            return path + `/jz/${item.Name}.png`;
          }
        }
          
}
export default new Global();