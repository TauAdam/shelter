import './footer.scss';
import iconEmail from './icon-email.svg';
import iconMarker from './icon-marker.svg';
import iconPhone from './icon-phone.svg';

export const Footer = `<footer class="footer" id="footer">
  <div class="footer__container">
    <div class="contacts">
      <h2 class="footer__title">For questions and suggestions</h2>
      <p>
        <a class="footer__link" href="mailto:email@shelter.com"
          ><img src="${iconEmail}" alt="" />
          email@shelter.com</a
        >
      </p>
      <p>
        <a class="footer__link" href="tel:+13 674 567 75 54"
          ><img src="${iconPhone}" alt="" /> +13 674 567
          75 54</a
        >
      </p>
    </div>
    <div class="locations">
      <h2 class="footer__title">We are waiting for your visit</h2>
      <p>
        <a
          class="footer__link"
          target="_blank"
          href="https://goo.gl/maps/s1EiUJRU2Q5vTTG89"
          ><img src="${iconMarker}" alt="" /> 1 Central
          Street, Boston (entrance from the store)</a
        >
      </p>
      <p>
        <a
          class="footer__link"
          target="_blank"
          href="https://goo.gl/maps/6mFBGXfDjzBPDF87A"
          ><img src="${iconMarker}" alt="" /> 18 South
          Park, London
        </a>
      </p>
    </div>
    <div class="footer-puppy"></div>
  </div>
</footer>
`;
