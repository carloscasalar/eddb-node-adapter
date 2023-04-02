import { PricesLoader } from '../prices/PricesLoader'

const pricesLoader = new PricesLoader()

const time = process.hrtime()
const loadStream = pricesLoader.stream()

loadStream.on('data', (price) =>
  console.dir(price, { depth: null, colors: true })
)
loadStream.on('error', (err) => console.log('unexpected error', err))
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time)
  console.log(
    'Stream finished in %d seconds and %d nanoseconds',
    seconds,
    nanoseconds
  )
})
