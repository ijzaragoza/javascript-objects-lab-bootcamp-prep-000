  var recipes = {
    object: 'recipes'
  }
  var newRecipe = {
    newObject: Object.assign({}, object)
  }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({object}, {[key]: value})
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

function deleteFromObjectByKey(object, key) {
  delete Object.assign({}, object[key])
  return object
}
