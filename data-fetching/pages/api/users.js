export default (_, res) => {
  return res.status(200).json([
    {
      email: 'email',
      id: 1,
      name: 'Stranger',
    },
  ])
}
