# dooy

dooy is a tiny desktop automation tool to emulate keyboard and mouse events.

dooy was born out of the need to emulate keyboard(and mouse) events in end to end testing scenarios. Since our current library stopped working in the latest macOS version, we were looking for a solution. That's were I found (cliclick)[https://github.com/BlueM/cliclick] a "Command-line tool for emulating mouse and keyboard events". So I decided to write a little JavaScript wrapper around that tool.

Currently it only supports keyboard events on macOS. More features will be added as needed, maybe even another OS.

## Installation

Install dooy with

`npm install dooy`

or

`yarn install dooy`

dooy expects `cliclick` to be installed on your system, it might be added as a binary one day, we'll see.

To install cliclick using homebrew just type `brew install cliclick` in your terminal. For other ways to install cliclick, see the (cliclick's website)[https://github.com/BlueM/cliclick].

## Usage

```
import { press } from 'dooy'; // const press = require('dooy').press


press('cmd', 'q'); // quit app
```

## API

The API strives to be simple, all the following commands are valid:

```
press('a'); // press key 'a'
press('abc'); // press keys 'a', 'b' and 'c'
press('cmd', 'c'); // press 'cmd' and 'c'
press('cmd,shift', 'arrow-up,arrow-down'); // press 'cmd'&'shift' and 'arrow-up'&'arrow-down'
press('cmd+c'); // press 'cmd' and 'c'
```

so the function `press` takes a comma seperated list of keys to press.

You can use any of the following 'special keys', besides the normal alphabet or numerical keys (or any other key with it's own symbol):

- arrow-down
- arrow-left
- arrow-right
- arrow-up
- brightness-down
- brightness-up
- delete
- end
- enter
- esc
- f1
- f2
- f3
- f4
- f5
- f6
- f7
- f8
- f9
- f10
- f11
- f12
- f13
- f14
- f15
- f16
- fwd-delete
- home
- keys-light-down
- keys-light-toggle
- keys-light-up
- mute
- num-0
- num-1
- num-2
- num-3
- num-4
- num-5
- num-6
- num-7
- num-8
- num-9
- num-clear
- num-divide
- num-enter
- num-equals
- num-minus
- num-multiply
- num-plus
- page-down
- page-up
- play-next
- play-pause
- play-previous
- return
- space
- tab
- volume-down
- volume-up

You can also prepend a comma seperated list of modifier keys, it is also possible to prepend the modifier keys with a '+' (see last example).

Possible modifier are:

- alt
- cmd
- ctrl
- fn
- shift

Since `+` is used to seperate modifier keys, it's a good idea to use `num-plus` if you want to press the plus sign. Also if you want to type any of the above 'special keys' e.g. you want to to type `space`, you can just add a comma like `s,pace` which would type 'space' as expected and not transform it to a ' '.

press() (and any other upcoming command) will returns a promise, so it is very useful in tests and you can chain it and do all the other nasty stuff you otherwise do with promises, e.g.:

```
press('cmd', 'c').then(()=> press('cmd', v))
  .catch((error) => console.log('catching the failure'));
```

or

```
await press('cmd', 'c');
await press('cmd', 'v');
```

Have fun!
