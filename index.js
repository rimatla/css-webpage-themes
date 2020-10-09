const options = document.querySelector('#colors-dropdown').addEventListener('change', function() {
  let greet = document.querySelector('.greet')
  let color = document.documentElement.style
  // input  changes
  if (this.value === 'BARCELONA') {
    color.setProperty('--primary', '#004D98')
    color.setProperty('--secondary', '#A50044')
    greet.innerHTML = 'Benvingut!'
  }

  if (this.value === 'CITY') {
    color.setProperty('--primary', '#6caddf')
    color.setProperty('--secondary', '#FFFFFF')
    greet.innerHTML = 'Welcome!'
  }

  if (this.value === 'BORUSSIA') {
    color.setProperty('--primary', '#FDE100')
    color.setProperty('--secondary', '#000000')
    greet.innerHTML = 'Welcome!'
  }

  if (this.value === 'MADRID') {
    color.setProperty('--primary', '#00519e')
    color.setProperty('--secondary', '#FFFFFF')
    greet.innerHTML = 'Bienvenido!'
  }

  if (this.value === 'PALMEIRAS') {
    color.setProperty('--primary', '#1e5b3c')
    color.setProperty('--secondary', '#FFFFFF')
    greet.innerHTML = 'Seja Bem Vindo!'
  }

  if (this.value === 'INTER') {
    color.setProperty('--primary', '#1063a6')
    color.setProperty('--secondary', '#040707')
    greet.innerHTML = 'Benvenuto!'
  }

  if (this.value === 'GUAN') {
    color.setProperty('--primary', '#930111')
    color.setProperty('--secondary', '#efae26')
    greet.innerHTML = 'Huānyíng!'
  }

  if (this.value === 'PSG') {
    color.setProperty('--primary', '#1a2b4c')
    color.setProperty('--secondary', '#c7201a')
    greet.innerHTML = 'Bienvenu!'
  }

  if (this.value === 'BENFICA') {
    color.setProperty('--primary', '#c00001')
    color.setProperty('--secondary', '#FFFFFF')
    greet.innerHTML = 'Bem Vindo!'
  }
})
