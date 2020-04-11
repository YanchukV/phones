import Component from '../Component';

export default class Filter extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('input', 'Query', _.debounce((event) => {
      props.onQueryChange(event.target.value);
    }, 500));

    this.on('change', 'Order', (event) => {
      props.onOrderChange(event.target.value);
    });
  }

  render() {
    this.element.innerHTML = `
      <div class="Filter">
        <p>
          Search:
          <input data-element="Query" class="form-control" type="text">
        </p>
  
        <p>
          Sort by:
          <select data-element="Order" class="form-control">
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </div>
    `;
  }
}
