let allItem = [];
let id = 0;


function addItem (req,res){
    const {list, cost} = req.body;
    allItem.push({
        list,
        cost,
        id: id++,
        
    })
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



module.exports={
    addItem,
    showItem,
    deleteItem
}
