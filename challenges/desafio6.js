db.produtos.find({
  curtidas: { $lte: 100, $gte: 10 },
}, 
  { _id: 0, nome: 1, curtidas: 1 });