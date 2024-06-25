const filterinput = document.querySelector('#filterinput');
filterinput.addEventListener('keyup', filternames);

function filternames(){
    const filtervalue = filterinput.value.toUpperCase();
    const ul = document.querySelector('#names');
    const li = document.querySelectorAll('li.collection-item');

    for (let i = 0; i < li.length; i++) {
        const a= li[i].querySelector('a');

        if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
            li[i].style.display = '';
        }

        else {
            li[i].style.display = 'none';
        }
    }
}