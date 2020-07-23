export default class Controls {
  constructor(controles, tag) {
    this.controles = document.getElementById(controles);
    this.seletor = document.querySelector(tag)

    this.handleChange = this.handleChange.bind(this);
    this.handleStyle = this.handleStyle.bind(this)
  }
  changeControls() {
    this.controles.addEventListener('change', this.handleChange);
  }

  handleChange(event) {
    this.handleStyle(event.target.name, event.target.value)
    this.saveValues(event.target.name, event.target.value)
  }

  handleStyle(name, value) {
    this.seletor.style.name = value;
    if (name === 'color') {
      this.seletor.style.color = value
    } else if (name === 'backgroundColor') {
      this.seletor.style.backgroundColor = value
    } else {
      this.seletor.style.fontFamily = value
    };
  }

  saveValues(name, value) {
    localStorage.setItem(name, value)
  }

  setValues() {
    const keys = ["color", "backgroundColor", "fontFamily"]
    keys.forEach((item) => {
      this.handleStyle(item, localStorage.getItem(`${item}`))
    })
  }

  init() {
    if (this.controles && this.seletor) {
      this.changeControls()
      this.setValues()
    };
  }
  
}