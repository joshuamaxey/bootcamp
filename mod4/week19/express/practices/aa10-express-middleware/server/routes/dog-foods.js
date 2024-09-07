// ------------------------------  SERVER DATA ------------------------------

const express = require('express');
const router = express.Router({ mergeParams: true });

let nextFoodId = 1;
function getNewFoodId() {
  const newFoodId = nextFoodId;
  nextFoodId++;
  return newFoodId;
}

const foods = [
  {
    foodId: getNewFoodId(),
    name: "Kibble",
    dogId: 1
  },
  {
    foodId: getNewFoodId(),
    name: "Bone",
    dogId: 1
  },
  {
    foodId: getNewFoodId(),
    name: "Biscuit",
    dogId: 2
  }
];

// ------------------------------  MIDDLEWARES ------------------------------

const validateFoodInfo = (req, res, next) => {
  if (!req.body || !req.body.name) {
    const err = new Error("Food must have a name");
    err.statusCode = 400;
    next(err);
  }
  next();
};

// ------------------------------  ROUTE HANDLERS ------------------------------

// GET /dogs/:dogId/foods
const getFoodsByDogId = (req, res, next) => {
  const { dogId } = req.params;

  res.json(foods.filter(food => food.dogId == dogId));
};

// POST /dogs/:dogId/foods
const createFood = (req, res) => {
  const { name } = req.body;
  const { dogId } = req.params;
  const newFood = {
    foodId: getNewFoodId(),
    name,
    dogId
  };
  foods.push(newFood);
  res.json(newFood);
};

// ------------------------------  ROUTER ------------------------------

// const validateDogId = (req, res, next) => {
//   const { dogId } = req.params;
//   const dog = dogs.find(dog => dog.dogId == dogId);
//   if (!dog) {
//     const err = new Error("Couldn't find dog with that dogId")
//     err.statusCode = 404;
//     // throw err;
//     return next(err); // alternative to throwing it
//   }
//   next();
// }

router.get("/:dogId/foods", getFoodsByDogId)

router.post("/:dogId/foods", validateFoodInfo, createFood)

module.exports = router;
