  var recipes = {
    object: 'recipes'
  }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({object}, {[key]: value})
}
