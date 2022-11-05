const mapWrapper = document.querySelector('.advantages__map');

function createElementOffice(e) {
  document.querySelector('.advantages__map').innerHTML += 
    `<div class="office">
      <select class="office__select">
        <option value="#">Kyiv, Ukraine</option>
      </select>
      <div class="office__placeholder-map"></div>
      <ul class="list-reset office-contacts">
        <li class="office-contacts__item office-contacts__item_address"><span class="office-contacts__inner">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
        <li class="office-contacts__item office-contacts__item_tel"><a class="office-contacts__inner office-contacts__inner_link" href="tel:+37052409650">+370 5 240 9650</a></li>
        <li class="office-contacts__item office-contacts__item_email"><a class="office-contacts__inner office-contacts__inner_link" href="mailto:info@teltonika.lt">info@teltonika.lt</a></li>
      </ul>
      <a class="btn office__btn" href="#">Связаться</a>
    </div>`

    let posX = +e.target.closest('.sprite-flags').getAttribute('x') + (document.querySelector('.office').clientWidth / 2 + 50);
    let posY = e.target.closest('.sprite-flags').getAttribute('y');

    if (posX > document.body.clientWidth / 2) {
      posX = +e.target.closest('.sprite-flags').getAttribute('x') - (document.querySelector('.office').clientWidth / 2 + 50);
    }

    document.querySelector('.office').style.left = `${posX}px`;
    document.querySelector('.office').style.top = `${posY}px`;
}

function deleteElementOffice() {
  mapWrapper.removeChild(document.querySelector('.office'));
}

function discolorFlags(e) {
  const activeFlagId = e.target.closest('.marker').id;

  document.querySelectorAll('.marker').forEach(el => {
    if (el.id !== activeFlagId) {
      el.querySelector('.sprite-flags').classList.add('grayscale')
    }
  });
}

function colorFlags() {
  document.querySelectorAll('.marker').forEach(el => {
    el.querySelector('.sprite-flags').classList.remove('grayscale')
  });
}

function showNameCounntry() {
  document.querySelectorAll('.marker').forEach(el => {
    el.addEventListener('mouseover', function() {
      el.querySelector('svg:last-child').innerHTML = 
      `
      <text fill="#373F41" xml:space="preserve" font-family="Open Sans" font-size="14" font-weight="bold" letter-spacing="0.1px" text-anchor="end" style="white-space: pre;"><tspan x="-5" y="15">Ukraine</tspan></text>
      `
    })
  
    el.addEventListener('mouseout', function() {
      el.querySelector('svg:last-child').innerHTML = '<!---->'
    })
  })
}

document.addEventListener("click", function(e) {
  if (e.target.closest('.marker') && document.querySelector('.office')) {
    deleteElementOffice();
    createElementOffice(e);
    colorFlags();
    discolorFlags(e);
    showNameCounntry();
  }
  
  if (e.target.closest('.marker') && !document.querySelector('.office')) {
    createElementOffice(e);
    discolorFlags(e);
    showNameCounntry();
  }

  if (!e.target.closest('.marker') && !e.target.closest('.office') && document.querySelector('.office')) {
    deleteElementOffice();
    colorFlags();
  }
})

showNameCounntry();