/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  error: {
    id: `${scope}.header`,
    defaultMessage: '404',
  },
  oops_you_are_lost: {
    id: `${scope}.header`,
    defaultMessage: "Oops! You're lost.",
  },
  the_page_you_are_looking_for_was_not_found: {
    id: `${scope}.header`,
    defaultMessage: 'The page you are looking for was not found.',
  },
  search: {
    id: `${scope}.header`,
    defaultMessage: 'Search',
  },
  what_are_you_looking_for: {
    id: `${scope}.header`,
    defaultMessage: 'What are you looking for',
  },
});
