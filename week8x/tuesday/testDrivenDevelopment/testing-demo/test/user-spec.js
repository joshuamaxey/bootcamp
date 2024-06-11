// const { expect } = require('chai')

const { expect } = import('chai')

//^ Notice that here, we threw an error because the 'require' keyword is no longer supported for the chai import. The incorrect code is commented out above the correct import, which is on line 3 above.

const User = require('../class/user')
