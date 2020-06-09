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
* [`overas autocomplete [SHELL]`](#overas-autocomplete-shell)
* [`overas hello [FILE]`](#overas-hello-file)
* [`overas help [COMMAND]`](#overas-help-command)
* [`overas plugins`](#overas-plugins)
* [`overas plugins:install PLUGIN...`](#overas-pluginsinstall-plugin)
* [`overas plugins:link PLUGIN`](#overas-pluginslink-plugin)
* [`overas plugins:uninstall PLUGIN...`](#overas-pluginsuninstall-plugin)
* [`overas plugins:update`](#overas-pluginsupdate)
* [`overas time`](#overas-time)

## `overas autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ overas autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ overas autocomplete
  $ overas autocomplete bash
  $ overas autocomplete zsh
  $ overas autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

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
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [veras-time](https://github.com/verasthiago/OclifTimePlugin/blob/v0.0.1/src/commands/hello.ts)_

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

## `overas plugins`

list installed plugins

```
USAGE
  $ overas plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ overas plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/index.ts)_

## `overas plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ overas plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ overas plugins:add

EXAMPLES
  $ overas plugins:install myplugin 
  $ overas plugins:install https://github.com/someuser/someplugin
  $ overas plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/install.ts)_

## `overas plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ overas plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ overas plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/link.ts)_

## `overas plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ overas plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ overas plugins:unlink
  $ overas plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/uninstall.ts)_

## `overas plugins:update`

update installed plugins

```
USAGE
  $ overas plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/update.ts)_

## `overas time`

Show current time

```
USAGE
  $ overas time

OPTIONS
  -d, --date  show time with date
  -h, --help  show CLI help

EXAMPLES
  $ overas time
  $ overas time --date
```

_See code: [veras-time](https://github.com/verasthiago/OclifTimePlugin/blob/v0.0.1/src/commands/time.ts)_
<!-- commandsstop -->
