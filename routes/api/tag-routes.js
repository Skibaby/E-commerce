const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  //do i make it singleTagData????
  try{ 
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    if(!tagData) {
      res.status(404).json({message: 'No category found with that id'});
    }
    res.status(200).json(tagData);
  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
 
    const { tag_name } = req.body
    try{
      const tag = await Tag.create({
        tag_name: tag_name
      })
      res.json(tag)
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tag = await Tag.update({
      tag_name: req.body.tag_name
    },{
      where: {
        id: req.params.id
      }
    });
    res.json(tag)
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({ message: 'Tag has been deleted' })
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;