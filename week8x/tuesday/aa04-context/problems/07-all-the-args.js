function allTheArgs(func, ...args) {

  return func.bind(func, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
