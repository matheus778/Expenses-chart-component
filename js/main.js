const valueDays = document.querySelectorAll('.value-day');

async function getDataJson() {
  const dataFile = await fetch('../data/data.json', {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  });
  return await dataFile.json();
}

  valueDays.forEach((el, index) => {
    let detailHover  = document.createElement('div');
    detailHover.classList.add('detail-hover');

    getDataJson()
      .then(data =>{
        let amount = data[index].amount;
        detailHover.textContent = `R$ ${amount}`;

        let heightValue = amount * 2.5;
        el.style.height = `${heightValue}px`

      })

    el.addEventListener('mouseout', ()=> {
      el.parentElement.removeChild(detailHover)
    })

    el.addEventListener('mouseover', ()=> {
      
      el.parentElement.appendChild(detailHover);
    })

    el.addEventListener('click', () => {
      el.classList.toggle('clicked')
    })

  })

