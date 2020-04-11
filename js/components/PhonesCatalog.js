import Component from '../Component';

export default class PhonesCatalog extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'PhoneLink', (event) => {
      const { phoneId } = event.delegateTarget.dataset;
      this.props.onPhoneSelected(phoneId);
    });

    this.on('click', 'AddButton', (event) => {
      const { phoneId } = event.delegateTarget.dataset;
      this.props.onAdd(phoneId);
    });
  }

  render() {
    this.element.innerHTML = `
      <div>
        <ul class="phones">
          ${this.props.phones.map((phone) => `
            
            <li class="thumbnail">
              <a
                data-element="PhoneLink"
                data-phone-id="${phone.id}"
                href="#!/phones/${phone.id}"
                class="thumb"
              >
                <img alt="${phone.name}" src="${phone.imageUrl}">
              </a>
  
              <div class="phones__btn-buy-wrapper">
                
                <a
                class="phone__link"
                data-element="PhoneLink"
                data-phone-id="${phone.id}"
                href="#!/phones/${phone.id}"
              >
              
                <h3>${phone.name}</h3>
              </a>
              
              <p>${phone.snippet}</p>
              <a
                  data-element="AddButton"
                  data-phone-id="${phone.id}"
                  class="btn btn-success phone__add"
                >
                  Add
                </a>
              </div>
  
              
            </li>
          
          `).join('')}
        </ul>
      </div>
    `;
  }
}
