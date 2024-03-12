export const globalException = (req, res, status = 500, message) => {
    console.log('in global');
    res.status(status).json({
        error: true,
        message,
        path: req.path
    })
}