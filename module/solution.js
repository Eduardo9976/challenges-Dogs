export default class Solution {
  constructor(seletor, tagImage, searchField, search, load, url) {
    this.seletor = document.querySelector(seletor)
    this.tagImage = document.querySelector(tagImage)
    this.searchField = document.querySelector(searchField)
    this.search = document.querySelector(search)
    this.load = document.querySelector(load)
    this.url = url
  }

  async fetchApi() {
    try {
      const response = await fetch(this.url)
      if (response.status != 200) {
        alert("Ops...Serviço indisponível, tente novamente em instantes!")
      }
      else {
        const responseJSON = await response.json()
        for(const dado in responseJSON.message) {
          this.createBreed(dado)
        };
      }  
    }
    catch(erro) {
      //tratar erro
    };
  }

  createBreed(breed) {
    const option = document.createElement('option')
    option.setAttribute('value', breed);
    option.innerText = `${breed}`
    this.seletor.appendChild(option)
  }

  handleChange() {
    this.seletor.addEventListener("change", () => {
      this.load.classList.add('loading')
      this.imageFetch(this.seletor.value)
    });
  }

  handleClick() {
    this.search.addEventListener('click', () => {
      this.load.classList.add('loading')
      this.imageFetch(this.searchField.value.toLowerCase().trim())
    });
  }

  async imageFetch(name) {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      if (response.status != 200) {
        alert("Ops...Algo deu errado, tente novamente!")
        this.load.classList.remove('loading')
      }
      else {
        const responseJSON = await response.json()
        this.tagImage.setAttribute('src', responseJSON.message)
        this.load.classList.remove('loading')
      }; 
    }
    catch(error) {
      // console.log(error) //tratar erros
    };
  }

  init() {
    if (this.seletor && this.tagImage && this.searchField &&
    this.search && this.url) {
      this.fetchApi()
      this.handleChange()
      this.handleClick()
    };
  }
}

