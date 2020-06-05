### [OCLIF](oclif.io)

[Medium Post](https://medium.com/adobetech/how-to-easily-create-clis-using-oclif-and-how-we-did-it-for-the-adobe-i-o-cli-e9eb888e9ec6)

## First impressions

- [Documentation](https://oclif.io/docs) very clear
- Hello World easy to reproduce
- Very clear to add `Plugins`

## [Features](https://oclif.io/docs/features)

| Flag/Argument parsing  | Autocomplete       | Plugins                    |
| ---------------------- |-------------       | ---------------------------|
| Testing Helpers        | Auto-documentation | CLI Generator              |
| Hooks                  | TypeScript         |   Auto-updating Installers |
| Coming soon: man pages | Super Speed        |                            |


## [Plugins](https://oclif.io/docs/plugins)

### How to add a plugin

- `yarn add @oclif/plugin-name`
- Add the following to your package.json 
```
    "oclif": {
        "plugins": [
            "@oclif/plugin-help",
            "@oclif/plugin-name" <---- Here
        ]
    }
```

### How to add your own plugin

- `yarn add @oclif/plugin-plugins`
- Add the following to your package.json 
```
    "oclif": {
        "plugins": [
            "@oclif/plugin-help",
            "@oclif/plugin-plugins"  <---- Here
        ]
    }
```
Now the user can run any of the commands below to manage plugins at runtime.

### How to create a plugin


## Useful Plugins

### Autocomplete
Yarn add command: `yarn add @oclif/plugin-autocomplete`

Don't forget to add on `package.json`
<br>
<br>

![](autocomplete.png)


### Not found command plugin
Yarn add command: `yarn add @oclif/plugin-not-found`

Don't forget to add on `package.json`

<br>
<br>

![](notfound.png)

**PROBLEM**

When I tried the *command* `plugin`, he suggests another *command* that don't exist. Also, you get stuck because since this *command* don't exist he will suggest another one (that is himself).

![](notfoundproblem.png)