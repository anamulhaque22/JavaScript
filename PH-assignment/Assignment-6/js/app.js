// https://openapi.programming-hero.com/api/phones?search=${searchText}
const btn = document.querySelector('#button-addon1');

//Taking input value
function inputValue() {
    const inputField = document.querySelector('#input-field');
    const inputText = inputField.value;
    inputField.value = '';
    return inputText

}

const findPhone = (inputText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    const response = fetch(url).then(response => response.json());
    return response;

}
const phoneReleseDate = function (id) {
    const phoneDetailUrl = `https://openapi.programming-hero.com/api/phone/${id}`;
    const response = fetch(phoneDetailUrl).then(response => response.json());
    return response;
}


const displeyPhone = async () => {
    const cardArea = document.querySelector('#inner-card-area');
    const invalidInput = document.querySelector('#error');
    cardArea.textContent = '';
    let phoneData;
    const searchText = inputValue();
    if (searchText == "") {
        invalidInput.innerText = 'Enter a phone name.'
    } else {
        invalidInput.innerText = '';
        phoneData = await findPhone(searchText);
        for (const phone of phoneData.data) {
            const singlePhonecontainer = document.createElement('div');
            singlePhonecontainer.classList = 'col';
            const releaseDate = await phoneReleseDate(phone.slug);
            singlePhonecontainer.innerHTML = `
                <div class="card">
                    <img src="${phone.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Brand: ${phone.brand}</h4>
                        <h5>Model: ${phone.phone_name}</h5>
                        <p>Release Date: ${releaseDate.data.releaseDate}</p>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content.
                            This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            `;
            cardArea.appendChild(singlePhonecontainer);
        }
    }

}

btn.addEventListener('click', displeyPhone);