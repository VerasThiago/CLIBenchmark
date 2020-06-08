import {Command, flags} from '@oclif/command'

export default class Time extends Command {
  static description = 'Show current time'

  static examples = [
    `$ overas time`,
    `$ overas time --date`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --second)
    date: flags.boolean({char: 'd', description: 'show time with date', default: false}),
  }

  async run() {
    const {args, flags} = this.parse(Time)

    let dateTime = new Date()
    if (flags.date) {
        this.log(`Current time: ${dateTime.toLocaleTimeString()} ${dateTime.toLocaleDateString()}`)
    } else{
        this.log(`Current time: ${dateTime.toLocaleTimeString()}`)
    }
  }
}
