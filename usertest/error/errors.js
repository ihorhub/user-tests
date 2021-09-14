const {
  BAD_REQUEST,
  FORBIDDEN,
  CREATED,
  DELETE,
  NOT_FOUND,
  UNAUTHORIZED,
  NO_CONTENT
} = require('../configs/errorsCode')

module.exports = {
  UPDATE: {
    message: 'User is updated OK',
    code: OK
  },
  NOT_VALID_ID: {
    message: 'User ID must be grater than 0',
    code: BAD_REQUEST
  },

  NOT_VALID_BODY: {
    message: 'Request is not valid',
    code: FORBIDDEN
  },

  DELETE_BODY: {
    message: 'delete',
    code: DELETE
  },

  CREATE_BODY: {
    message: 'Created',
    code: CREATED
  },

  NOT_VALID_TOKEN: {
    message: 'Unauthorized access',
    code: UNAUTHORIZED
  },

  NOT_FOUND_BODY: {
    message: 'This resource not_found',
    code: NOT_FOUND
  },
  WRONG_EMAIL_OR_PASS: {
    message: 'Email or password is not valid',
    code: BAD_REQUEST
  },
  PERMISSION_DENIED: {
    message: 'Permission denied',
    code: FORBIDDEN
  },
  NO_CONTENTS: {
    message: 'empty content',
    code: NO_CONTENT
  }
}
