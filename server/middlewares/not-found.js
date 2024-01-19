const notFound = (req, res) => {
    res.status(404).send('Route not found handled by middleware');
}

module.exports = notFound;