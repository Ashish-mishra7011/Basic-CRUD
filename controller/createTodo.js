

const Todo=require('../Model/Todo')

//route handler


exports.createTodo=async(req,res)=>{
    try {
        //extract title and description from request body
        const {title,description}=req.body;
        // .create is an inbuilt method to make a new entry in database
        //create a new Todo obj and insert in DB
        const response =await Todo.create({title,description })
        //send a json response  with a success flag 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry cleared Successfully'

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