const adminAuth = (req,res,next) => {
    const token = "xyz-typ";
    const isAdminAuthorized = token==="xyz-typ";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized Admin Request");
    } else {
        next();
    }
}
const userAuth = (req,res,next) => {
    const token = "xyz";
    const isUserAuthorized = token === "xyz";
    if(!isUserAuthorized) {
        res.status(401).send("Unauthorized user access");
    } else {
        next();
    }
}
module.exports = {
    adminAuth,
    userAuth
}