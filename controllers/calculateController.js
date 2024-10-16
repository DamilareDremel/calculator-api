const calculate = (req, res) => {
  const { operation } = req.params;
  const { num1, num2 } = req.body;

  let result;

  try {
      switch (operation) {
          case 'add':
              result = num1 + num2;
              break;
          case 'subtract':
              result = num1 - num2;
              break;
          case 'multiply':
              result = num1 * num2;
              break;
          case 'divide':
              if (num2 === 0) {
                  return res.status(400).json({ error: 'Cannot divide by zero' });
              }
              result = num1 / num2;
              break;
          case 'nearest-10s':
              const avg10s = (num1 + num2) / 2;
              result = Math.round(avg10s / 10) * 10;
              break;
          case 'nearest-100s':
              const avg100s = (num1 + num2) / 2;
              result = Math.round(avg100s / 100) * 100;
              break;
          case 'nearest-1000s':
              const avg1000s = (num1 + num2) / 2;
              result = Math.round(avg1000s / 1000) * 1000;
              break;
          case 'nearest-10th':
              result = Math.round((num1 + num2) / 2 * 10) / 10;
              break;
          case 'nearest-100th':
              result = Math.round((num1 + num2) / 2 * 100) / 100;
              break;
          case 'nearest-1000th':
              result = Math.round((num1 + num2) / 2 * 1000) / 1000;
              break;
          default:
              return res.status(400).json({ error: 'Invalid operation' });
      }

      res.json({ result });
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = calculate;
