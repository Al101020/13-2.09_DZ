import './collapse.css';

const titleDz = document.querySelector('#titeDz');// console.log(titleDz);

function collapse() {
  const divCollapse = document.createElement('div');
  divCollapse.id = 'divCollapse';

  divCollapse.innerHTML = '<button type="button" id="btnCollapse">Collapse</button>';

  titleDz.after(divCollapse);

  const btnCollapse = document.querySelector('#btnCollapse'); // console.log(btnCollapse);

  const divTextCollapse = document.createElement('div');
  divTextCollapse.id = 'divTextCollapse';

  divTextCollapse.classList.add('divTextCollapseDisplayNone');
  divTextCollapse.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';
  btnCollapse.after(divTextCollapse);

  btnCollapse.addEventListener('click', () => {
    if (divTextCollapse.classList.contains('divTextCollapseOpacity0')) { // если этот класс есть
      divTextCollapse.classList.remove('divTextCollapseOpacity0');// удаляем класс Display: none
      divTextCollapse.classList.add('divTextCollapseDisplayBlock');// добовляем класс Display: block
    } else {
      divTextCollapse.classList.remove('divTextCollapseDisplayBlock');// удаляем класс Display: block
      divTextCollapse.classList.add('divTextCollapseOpacity0');// добовляем класс Display: none
    }
  });
}

collapse();
