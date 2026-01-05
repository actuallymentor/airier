# AI Coding Assistant Instructions

Write code that breathes. Think Ruby-like elegance meets modern JavaScript. Every character should earn its place.

## Philosophy: Airy, Minimalist Code

- **Minimalism First**: Don't add features that weren't requested. Three similar lines beats a premature abstraction. If unused, delete completely.
- **Readability Through Spacing**: Code needs room to breathe. Spacing makes structure visible at a glance.
- **Modern JavaScript Only**: Use `const`/`let`, arrow functions, destructuring, template literals, ES modules.

## Critical Style Rules

### 1. No Semicolons (Non-negotiable)
```javascript
// ✅ CORRECT
const x = 5
return x + y

// ❌ WRONG
const x = 5;
return x + y;
```

### 2. Spacing Everywhere
```javascript
// ✅ CORRECT - Airy and readable
const arr = [ 1, 2, 3 ]
const obj = { foo: 'bar' }
const result = my_func( arg1, arg2 )
if( condition ) {
    console.log( `Value: ${ variable }` )
}
const arrow = ( a, b ) => a + b

// ❌ WRONG - Cramped
const arr = [1, 2, 3]
const obj = {foo: 'bar'}
const result = myFunc(arg1, arg2)
if(condition) {
    console.log(`Value: ${variable}`)
}
```

### 3. snake_case for Everything
```javascript
// ✅ CORRECT
const timeout_ms = 5000
const user_name = 'John'
const add_numbers = ( a, b ) => a + b
const fetch_user_data = async ( user_id ) => { }

// ❌ WRONG - camelCase
const timeoutMs = 5000
const userName = 'John'
const addNumbers = ( a, b ) => a + b
const fetchUserData = async ( userId ) => { }
```

### 4. Keywords: No Space After
```javascript
// ✅ CORRECT
if( x > 5 ) { }
for( let i = 0; i < 10; i++ ) { }
while( condition ) { }

// ❌ WRONG
if (x > 5) { }
for (let i = 0; i < 10; i++) { }
```

### 5. Indentation: 4 Spaces
```javascript
// ✅ CORRECT
const process_data = ( data ) => {
    const filtered = data.filter( item => item.active )
    return filtered
}

// ❌ WRONG - 2 spaces
const process_data = ( data ) => {
  const filtered = data.filter( item => item.active )
  return filtered
}
```

## Spacing Quick Reference

| Element | Pattern | Example |
|---------|---------|---------|
| Arrays | `[ items ]` | `[ 1, 2, 3 ]` |
| Objects | `{ key: value }` | `{ foo: 'bar' }` |
| Function calls | `func( args )` | `my_func( a, b )` |
| Arrow functions | `( args ) => { }` | `const fn = ( x ) => x * 2` |
| Template literals | `${ expr }` | `` `Hello ${ name }` `` |
| Blocks | `keyword( cond ) {` | `if( x > 5 ) {` |

## React Specific
```javascript
// ✅ CORRECT
<Component prop={ value } />
<div className="foo">{ children }</div>

// ❌ WRONG
<Component prop={value} />
<div className="foo">{children}</div>
```

- No `import React from 'react'` needed (modern React)
- Prefer functional components with hooks
- PropTypes optional (use TypeScript if you need types)

## Minimalism Rules

### ❌ Don't Over-Engineer
```javascript
// ❌ WRONG
const create_greeting = ( config ) => {
    const { name, formal = false } = config
    return formal ? `Hello, ${ name }` : `Hey ${ name }`
}

// ✅ CORRECT
const greet = ( name ) => `Hello, ${ name }`
```

### ❌ Don't Add Unrequested Features
```javascript
// ❌ WRONG - validation, logging, backup not requested
const save_user = ( user, options = {} ) => {
    if( options.validate ) validate( user )
    if( options.log ) console.log( user )
    return db.save( user )
}

// ✅ CORRECT
const save_user = ( user ) => db.save( user )
```

## Functional Programming Over Loops

Prefer higher-level array methods over primitive loops. They're more readable and declarative.

```javascript
// ✅ CORRECT - Functional approach
const active_users = users.filter( u => u.active )
const user_names = users.map( u => u.name )
const total = numbers.reduce( ( sum, n ) => sum + n, 0 )

// ❌ WRONG - Primitive loops
const active_users = []
for( let i = 0; i < users.length; i++ ) {
    if( users[i].active ) {
        active_users.push( users[i] )
    }
}
```

**Prefer in order**: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.some()`, `.every()` over `for`/`while` loops.

## JSDoc for Exported Functions

**CRITICAL**: Every exported function MUST have JSDoc comments. Before finishing, always verify JSDoc is present and up-to-date for all changed exports.

```javascript
// ✅ CORRECT
/**
 * Fetches user data from the API
 * @param {string} user_id - The ID of the user to fetch
 * @returns {Promise<Object>} User data object
 */
export const fetch_user = async ( user_id ) => {
    const response = await api.get( `/users/${ user_id }` )
    return response.data
}

// ❌ WRONG - No JSDoc
export const fetch_user = async ( user_id ) => {
    const response = await api.get( `/users/${ user_id }` )
    return response.data
}
```

**Before completing any task**: Review all modified exports and ensure their JSDoc is accurate and current.

## Error Handling

Only at boundaries (user input, external APIs). Trust internal code.

**IMPORTANT**: Remember the `finally` block! It's perfect for cleanup operations and runs regardless of success/failure.

```javascript
// ✅ CORRECT - Using finally for cleanup
const fetch_user = async ( id ) => {
    const loading_indicator = start_loading()

    try {
        const response = await api.get( `/users/${ id }` )
        return response.data
    } catch( error ) {
        throw new Error( `Failed to fetch user: ${ error.message }` )
    } finally {
        // Always runs - perfect for cleanup
        stop_loading( loading_indicator )
    }
}

// Also valid - Simple boundary error handling
const get_user = async ( id ) => {
    try {
        const response = await api.get( `/users/${ id }` )
        return response.data
    } catch( error ) {
        throw new Error( `Failed to fetch user: ${ error.message }` )
    }
}

// Internal functions trust their callers
const process_user = ( user ) => user.name.toUpperCase()

// ❌ WRONG - Defensive programming everywhere
const process_user = ( user ) => {
    if( !user || !user.name ) return null
    return user.name.toUpperCase()
}
```

## Using Mentie Helpers (If Installed)

If the `mentie` package is installed in the project, **always use its utilities** instead of reinventing them.

**IMPORTANT**: Check `node_modules/mentie/index.js` (or the package's main export file) to see all available exports and their usage before implementing any utility functions yourself.

### Logging with `log`
```javascript
import { log } from 'mentie'

// ✅ CORRECT - Use mentie's structured logging
log.info( 'User logged in:', user_id )
log.debug( 'Processing data:', data )
log.insane( 'Detailed trace:', complex_object )

// ❌ WRONG - Don't use console.log when mentie is available
console.log( 'User logged in:', user_id )
```

### String Utilities
```javascript
import { multiline_trim } from 'mentie'

// ✅ CORRECT - Clean multiline strings
const query = multiline_trim( `
    SELECT *
    FROM users
    WHERE active = true
` )

// ❌ WRONG - Manual string manipulation
const query = `SELECT * FROM users WHERE active = true`
```

### Array Utilities
```javascript
import { shuffle_array } from 'mentie'

// ✅ CORRECT - Use mentie's shuffle
const randomized = shuffle_array( items )

// ❌ WRONG - Implementing your own shuffle
const randomized = items.sort( () => Math.random() - 0.5 )
```

**Check for mentie**:
1. Look in `package.json` dependencies to see if mentie is installed
2. If present, read `node_modules/mentie/index.js` to see all available exports
3. Use mentie's utilities instead of reimplementing them

## Complete Example

```javascript
/**
 * Fetches and processes users from the API
 * @param {Object} filters - Query filters to apply
 * @returns {Promise<Array>} Processed user objects with id, name, and email
 */
const fetch_and_process_users = async ( filters = {} ) => {
    const users = await api.get( '/users', { params: filters } )

    const processed = users
        .filter( user => user.active )
        .map( user => ( {
            id: user.id,
            name: user.name,
            email: user.email
        } ) )

    return processed
}

export default fetch_and_process_users
```

## Checklist

- [ ] No semicolons
- [ ] Spacing in all brackets: `[ ]`, `{ }`, `( )`, `${ }`
- [ ] snake_case for all variables and functions
- [ ] 4-space indentation
- [ ] `const`/`let` only (never `var`)
- [ ] Arrow functions preferred
- [ ] Higher-level functions (.map, .filter, .reduce) over loops
- [ ] JSDoc on ALL exported functions (verify before finishing!)
- [ ] Consider `finally` block for cleanup in try/catch
- [ ] Check if `mentie` is installed and use its helpers (log, multiline_trim, etc.)
- [ ] No unnecessary features or abstractions
- [ ] Dead code completely removed

---

**Remember**: Code is read far more than it's written. Make it beautiful, make it breathe, make it obvious.
