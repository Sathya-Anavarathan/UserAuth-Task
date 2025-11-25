const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status||5000)
    .json({
        status:"error",
        message:"err.mess|| internal server error"

    })
}
export default errorHandler