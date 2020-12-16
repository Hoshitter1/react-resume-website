# Website's URL

> https://hoshito-resume.com/

# start

```shell
npm start
```

# build

```shell
npm run build
```

# deploy folder

```shell
./build
```

# Design Pattern

> ## Atomic Design <br>
>
> ### Atoms
>
> These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional. <br>
>
> ### Molecules
>
> Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule. <br>
>
> ### Organisms
>
> Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface. <br>
>
> ### Templates
>
> Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. <br>
>
> ### Pages
>
> Pages are specific instances of templates that show what a UI looks like with real representative content in place.
> <br><br>

> Note: This project does not follow the complete design pattern since there is only one page and not a lot of components are reused.

> Ref: https://atomicdesign.bradfrost.com/chapter-2/
