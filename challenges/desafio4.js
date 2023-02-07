db.produtos.find({
  vendidos: {
    $lte: 100,
    $gte: 50, 
  }}, 
  { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });