import './collapse.css';

const divBody = document.querySelector('body');
// console.log(divBody);

function collapse() {
  const divCollapse = document.createElement('div');
  divCollapse.id = 'collapse';

  divCollapse.innerHTML = '<button type="button" id="btnCollapse">Collapse</button>';

  divBody.appendChild(divCollapse);
}

collapse();
