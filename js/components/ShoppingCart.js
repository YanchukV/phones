import Component from '../Component';

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'RemoveButton', (event) => {
      const { item } = event.delegateTarget.dataset;
      this.props.onRemove(item);
    });
  }

  render() {
    this.element.innerHTML = `
      <div>
        ${Object.keys(this.props.items).length ? '<h4>Shopping Cart</h4>' : ''}
        <ul class="shopping-cart">
          ${Object.keys(this.props.items).map((item) => `
          
            <li>
            <button type="button" class="btn btn-primary">
              ${item} - <span class="badge badge-light">${this.props.items[item]}</span>
              </button>
              <button
              class="btn btn-danger"
                data-element="RemoveButton"
                data-item="${item}"
              >X</button>
            </li> 
          
          `).join('')}
        </ul>
      </div>
    `;
  }
}
