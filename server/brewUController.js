let allItem = [{
    id: '',
    list: '',
    cost: ''
}];
let id = 0;
let allCost = [];

function searchFoodPair (req, res){
    
   
}


function addItem (req,res){
    const {list, cost} = req.body;
    allItem.push({
        list,
        cost,
        id: id++,
        
    });
    console.log(allItem);
    res.status(200).json(allItem)
}

function showItem(req,res){
    res.status(200).json(allItem);
}

function deleteItem(req, res) {
    const deleteID= req.params.id;
    itemIndex = allItem.findIndex(allItem => allItem.id == deleteID);
    allItem.splice(itemIndex, 1);
    res.status(200).send(allItem);
}

function update (req, res) {
    const {allItem} = req.body;
    const updateCostId = req.params.id;
    const costIndex = allItem.findIndex(cost => cost.id == updateCostId);
    let allCosts = allItem[costIndex];
    console.log(allItem);
    console.log(allCost)
    allItem[costIndex] = {
       list: allItems.list,
       cost: allItem.cost
    }
    res.status(200).send(allItem);
};



module.exports={
    addItem,
    showItem,
    deleteItem,
    update
}
