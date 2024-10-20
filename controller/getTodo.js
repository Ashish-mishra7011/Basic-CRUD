//import the model
const Todo =require('../Model/Todo')


exports.getTodo=async(req,res)=>{
    try {
        const todos= await Todo.find();// model_name.find(), it finds all entries if you dont pass any condition
        
        //
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire data found"
        })
    } catch (error) { 
        console.log(error);
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error"
        })

        
    }
}
exports.getTodoById=async(req,res)=>{
    try {
        const id = req.params.id;
        const todo= await Todo.findById({_id:id}) //_id is the key in db so we need to put the samne

        if(!todo){
            return res.status(404).json({
                success:false,
                message:`No data found with given id: ${id}`,

            })
        }
        res.status(200).json(
             {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`
             }

        )

       
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error"
        })

        
    }
}