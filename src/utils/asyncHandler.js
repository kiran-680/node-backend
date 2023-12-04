
// const asyncHandler =(fn)=>async(request,response,next)=>{
//     try {
//         await fn(request,response,next)

        
//     } catch (error) {
//         response.status(err.code || 500).json({
//             "success":false,
//             "message":err.message,
//         })
        
//     }

// }




// promise way -

const asyncHandler=(requestHandler)=>{
    (request,response,next)=>{
        Promise.resolve(requestHandler(request,response,next)).catch((err)=>next(err))
    }
}





export {asyncHandler}