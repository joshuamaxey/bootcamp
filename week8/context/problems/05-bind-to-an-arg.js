function bindToAnArg(func, arg) {
  return func.bind(func, arg)
}

//! Done!

//^ This one was a little bit confusing. we return a NEW function (because the bind() method always returns a new function) with the context bound to that function itself and with the argument set to the argument that was provided within the bindToAnArg function.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
