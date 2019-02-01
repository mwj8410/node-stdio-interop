const child_process = require('child_process')
const { promisify } = require('util')

const sub = child_process.spawn('go', ['run', './child/respond.go'])

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let open = true

sub.stdout.on('data', (data) => {
  console.log('stdout: ' + data)
})

sub.stdout.on('end', (data) => {
  console.log('stdout: closed')
  open = false
})


async function run () {
  let count = 0

  while (count < 10) {
    sub.stdin.write(`hello ${count}\n`, 'utf8')
    await sleep(1000)
    count++
  }

  console.log('Node Finished')
  sub.kill()
  console.log('Child Process Killed')
  process.exit(0)
}

run()

