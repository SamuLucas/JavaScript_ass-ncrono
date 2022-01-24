const BASE_URL = ' https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat-4');

const getcCats = async() => {
    try {
        const data = fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};
const loadImg = async() => {
    catImg.src = await getcCats();
}
catBtn.addEventListener('click', loadImg);

loadImg();