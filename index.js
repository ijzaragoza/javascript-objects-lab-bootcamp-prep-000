  var recipes = {
    object: 'recipes'
  }
  var newObject = Object.assign({}, object)

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
  delete newObject[key]
  return newObject
}
