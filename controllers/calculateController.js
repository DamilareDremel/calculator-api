// controllers/calculateController.js

// Helper function to round to a specific place value
function roundToPlace(num, place) {
  return Math.round(num / place) * place;
}

// controllers/calculateController.js

// Helper function to find the GCD
function gcd(a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

// Simplify to lowest fraction
exports.simplifyToLowestFraction = (req, res) => {
  const { result } = req.body;
  const precision = 1000000; // Adjust for precision
  const numerator = Math.round(result * precision);
  const denominator = precision;
  const divisor = gcd(numerator, denominator);
  res.json({ simplified: `${numerator / divisor}/${denominator / divisor}` });
};

// Decimal to Scientific Notation
exports.toScientificNotation = (req, res) => {
  const { result } = req.body;
  const scientific = result.toExponential();
  res.json({ scientific });
};

// Scientific Notation to Decimal
exports.fromScientificNotation = (req, res) => {
  const { result } = req.body;
  try {
    const decimal = Number(result);
    res.json({ decimal });
  } catch (error) {
    res.status(400).json({ error: "Invalid scientific notation." });
  }
};


exports.add = (req, res) => {
  const { num1, num2 } = req.body;
  const sum = num1 + num2;
  res.json({ result: sum });
};

exports.subtract = (req, res) => {
  const { num1, num2 } = req.body;
  const difference = num1 - num2;
  res.json({ result: difference });
};

exports.multiply = (req, res) => {
  const { num1, num2 } = req.body;
  const product = num1 * num2;
  res.json({ result: product });
};

exports.divide = (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed." });
  }
  const quotient = num1 / num2;
  res.json({ result: quotient });
};

// Rounding operations
exports.roundToTens = (req, res) => {
  const { result } = req.body;
  const rounded = roundToPlace(result, 10);
  res.json({ rounded });
};

exports.roundToHundreds = (req, res) => {
  const { result } = req.body;
  const rounded = roundToPlace(result, 100);
  res.json({ rounded });
};

exports.roundToThousands = (req, res) => {
  const { result } = req.body;
  const rounded = roundToPlace(result, 1000);
  res.json({ rounded });
};

exports.roundToTenths = (req, res) => {
  const { result } = req.body;
  const rounded = Math.round(result * 10) / 10;
  res.json({ rounded });
};

exports.roundToHundredths = (req, res) => {
  const { result } = req.body;
  const rounded = Math.round(result * 100) / 100;
  res.json({ rounded });
};

exports.roundToThousandths = (req, res) => {
  const { result } = req.body;
  const rounded = Math.round(result * 1000) / 1000;
  res.json({ rounded });
};
