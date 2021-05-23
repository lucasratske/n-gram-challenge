const ngramUtils = require('../utils/ngram-utils');

class NGramController {
  getNGram(req, res) {
    const { phrase } = req.query;
    if (phrase === undefined)
      return res
        .status(500)
        .send({ error: 'Please send the parameter "phrase"' });

    return res.json(ngramUtils.getNGrams(phrase));
  }
}

module.exports = new NGramController();
