const URL = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
const fact = document.querySelector('.fact');
const btn = document.querySelector('button');

const getFact = () => {
    axios.get(URL)
        .then((res) => {
            console.log(res.data);
            const catFact = res.data.text;
            document.querySelector('.fact').innerText = catFact;
        })
}

getFact();
btn.addEventListener('click', getFact);