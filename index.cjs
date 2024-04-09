// Import the modules using ES Module syntax
const eslint_config = require('./modules/eslint_config.cjs')
const styleguide = require('./modules/styleguide.cjs')

// Export the objects in an object literal
module.exports = { eslint_config, styleguide }