export default class Controls {
  constructor(controles, tag, buttonSave, onSave) {
    this.controles = document.getElementById(controles);
    this.seletor = document.querySelector(tag);
    this.buttonSave = document.querySelector(buttonSave)
    this.onSave = document.querySelector(onSave)
    this.styles = new Object()

    this.handleChange = this.handleChange.bind(this);
    this.handleClickStyle = this.handleClickStyle.bind(this)
  }
  changeControls() {
    this.controles.addEventListener('change', this.handleChange);
    this.buttonSave.addEventListener('click', this.handleClickStyle)
  }

  handleChange(event) {
    this.handleStyle(event.target.name, event.target.value) 
    let name = event.target.name
    let value = event.target.value
    this.styles[`${name}`] = value
    this.styles.temps = new Date().toLocaleString();
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

  handleClickStyle(event) {
    event.preventDefault()
    this.onSave.classList.add('on')
    window.localStorage.dogs = JSON.stringify(this.styles)
    setTimeout(() =>{
      this.onSave.classList.remove('on')
    }, 3000)
  }

  setValues() {
    if (window.localStorage.dogs){
      this.styles = JSON.parse(window.localStorage.dogs)
      const dogsStyles = JSON.parse(localStorage.getItem("dogs"))
    
      for (let prop in dogsStyles) {
        this.handleStyle(prop, dogsStyles[prop])
      };
    }
  }

  init() {
    if (this.controles && this.seletor && this.buttonSave && this.onSave) {
      this.changeControls()
      this.setValues()
    };
  }
}

