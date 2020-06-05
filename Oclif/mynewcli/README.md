OclifCLI
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/OclifCLI.svg)](https://npmjs.org/package/OclifCLI)
[![Downloads/week](https://img.shields.io/npm/dw/OclifCLI.svg)](https://npmjs.org/package/OclifCLI)
[![License](https://img.shields.io/npm/l/OclifCLI.svg)](https://github.com/VerasThiago/OclifCLI/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g OclifCLI
$ overas COMMAND
running command...
$ overas (-v|--version|version)
OclifCLI/0.0.0 linux-x64 node-v10.19.0
$ overas --help [COMMAND]
USAGE
  $ overas COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`overas hello [FILE]`](#overas-hello-file)
* [`overas help [COMMAND]`](#overas-help-command)

## `overas hello [FILE]`

describe the command here

```
USAGE
  $ overas hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ overas hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/VerasThiago/OclifCLI/blob/v0.0.0/src/commands/hello.ts)_

## `overas help [COMMAND]`

display help for overas

```
USAGE
  $ overas help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
