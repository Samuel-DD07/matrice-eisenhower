exports.getCookies = (req, res) => {
    res.status(200).json({
        ...req.cookies.user_info
    })
    res.end()
}

exports.clearCookies = (req, res) => {
    res.clearCookie("user_info")
    res.end()
}