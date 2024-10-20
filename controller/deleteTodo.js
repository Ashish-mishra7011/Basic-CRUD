

const Todo=require('../Model/Todo')

//route handler


exports.deleteTodo=async(req,res)=>{
    try {
        // const id=req.params.id;
        const {id}=req.params;

        const todo = await Todo.findByIdAndDelete({_id:id});
            

        res.status(200).json(
            {
               success:true,
               data:todo,
               message:`Todo ${id} data successfully deleted`
            }

       );


       
        
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
}