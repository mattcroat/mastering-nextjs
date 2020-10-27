export default (req, res) => {
  const { query: { id } } = req

  res.status(200).json({
    email: 'email',
    id,
    name: 'Stranger'
  })
}
