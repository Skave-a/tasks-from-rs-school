export class Article {
    constructor({ name, img, type, breed, description, age, inoculations, diseases, parasites, ...rest }) {
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'pop-up__body';
        article.setAttribute('data-id', this.name);

        this.img &&
            (template += `<img class="pop-up__img" src=${this.img} alt="pet">`)

        this.name &&
            (template += `<h3 class="pop-up__name>${this.name}</h3>`)

        this.breed &&
            (template += `<h4 class="pop-up__breed">${this.type} - ${this.breed}</h4>`)

        this.description &&
            (template += `<p class="pop-up__description">${this.description}</p>`)

        template += `<ol class="pop-up__list">`

        this.age &&
            (template += `<li class="pop-up__age"><b>Age:</b> ${this.age}</li>`)

        this.inoculations &&
            (template += `<li class="pop-up__inoculations"><b>Inoculations:</b> ${this.inoculations}</li>`)

        this.diseases &&
            (template += `<li class="pop-up__diseases"><b>Diseases:</b> ${this.diseases}</li>`)

        this.parasites &&
            (template += `<li class="pop-up__parasites"><b>Parasites:</b> ${this.parasites}</li>`)

        template += `</ol>`
    }
    /*article.innerHTML = template;
    return article;*/
}
