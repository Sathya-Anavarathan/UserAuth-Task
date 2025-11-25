export const getInfo=async(req,res)=>{

res.status(200).json({
    status:"success",
    message:"Info accessed successfully",
    data:{
        info:"This is some protected information"
    },
    requestedBy: req.userId

    })
}

export default getInfo;