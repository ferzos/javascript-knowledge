// keep only digits and hyphens:
console.log('asdf---"#&$&*zxc-vqw6er4345yu12oihk<?,ljnm'.replace(/[^\d-]/g, ''))

// remove (latin) letters from your string
console.log('asdf---"#&$&*zxc-vqw6er4345yu12oihk<?,ljnm'.replace(/[a-z]/gi, ''))