import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ForgotPasswordPage from '../index';
import messages from '../messages';

describe('<ForgotPasswordPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<ForgotPasswordPage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
