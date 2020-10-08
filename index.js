// get the inputs
const inputs = [].slice.call(document.querySelectorAll('.controls input'))

// listen for changes
inputs.forEach((input) => input.addEventListener('change', handleUpdate))

function handleUpdate(e) {
  const suffix = this.id === 'base' || this.id === 'base2' ? '' : 'px'

  document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix)
}
