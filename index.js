const goodbye = (jmeno) => {
  document.querySelector('.email__closing').innerHTML = `Na shledanou, <br> ${jmeno}`;
}

goodbye('Pavel Ovesný');
