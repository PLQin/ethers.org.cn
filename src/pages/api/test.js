export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    let data = { id }
    switch (id) {
      case '1':
        data.name = 'Tom'
        data.age = 21
        data.favorite = 'reading,sport'
        break
      case '2':
        data.name = 'Jerry'
        data.age = 22
        data.favorite = 'art,music'
        break
      case '3':
        data.name = "Bill"
        data.age = 23
        data.favorite = 'comic,movie'
        break
      default:
        break
    }
    res.status(200).json({ message: 'OK', data })
  } else {
    res.status(200).json({ message: 'OK', data })
  }
}