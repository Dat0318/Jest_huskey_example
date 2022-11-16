import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from '../../components/CheckboxWithLabel';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({adapter: new Adapter()});

// it('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

//   expect(checkbox.text()).toBe('Off');

//   checkbox.find('input').simulate('change');

//   expect(checkbox.text()).toBe('On');
// });
