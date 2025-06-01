// работает но без Фнимации
import './collapse1.css';

// const divBody = document.querySelector('body');// console.log(divBody);
const titleDz1 = document.querySelector('#titeDz1');// console.log(titleDz1);

function collapse1() {
  const divCollapse1 = document.createElement('div');
  divCollapse1.id = 'divCollapse1';

  divCollapse1.innerHTML = '<button type="button" id="btnCollapse1">Collapse1</button>';

  // divBody.appendChild(divCollapse); // вставляет в конец body
  titleDz1.after(divCollapse1); // вставляет в конец body

  const btnCollapse1 = document.querySelector('#btnCollapse1');
  // console.log(btnCollapse1);
  btnCollapse1.addEventListener('click', () => {
    // const btnCollapse = document.querySelector('#btnCollapse');    // console.log(btnCollapse);
    if (document.querySelector('.divTextCollapse1')) { // console.log('элемент divTextCollapse существует');
      document.querySelector('.divTextCollapse1').remove();
    } else { // console.log('элемент divTextCollapse НЕ существует');
      const divTextCollapse1 = document.createElement('div');
      divTextCollapse1.classList.add('divTextCollapse1');
      divTextCollapse1.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';
      btnCollapse1.after(divTextCollapse1);
    }
  });
}

collapse1();
