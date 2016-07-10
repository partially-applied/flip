

```haskell
flip :: (a -> b -> c ...... x -> y -> z) -> (z -> y -> x ...... c -> b -> a)
```
###Install

```npm install @partially-applied/flip```


###Usage
```livescript

flip = require '@partially-applied/flip'

f = (a,b,c) -> (a + b)*c # generic functions

opposite = flip f

f 1,2,3 # (1 + 2)*3 = 9

opposite 1,2,3 # (3 + 2)*1 = 5

# curried by default 

flip f,1,2,3 # (3 + 2)*1 = 5

only-a = opposite 1 # [Function]

only-a-b = only-a 2 # [Function]

only-a-b 3 # (3 + 2)*1 = 5
```


### Why

1. Ramda [`flip`](http://ramdajs.com/docs/#flip) only flips the first two arguments.

2. flip was written to bring another API change to Ramda. Ramda [`compose`](http://ramdajs.com/docs/#compose) composes a function from right to left. 

```livescript

_ = require 'ramda'

f = _.curry (x,y) -> x + y

g = _.curry (x,y) -> x*y

h = _.compose (f 1),(g 2) # h = (x) -> 2*x + 1

h 5 # 11

flip = require '@partially-applied/flip'


j = (flip _.compose) (f 1),(g 2) # j = (x) -> (1 + x)*2 

j 5  # 12

```

**why would we need to shift the order of compose ?**

good question, it is to assist in using `livescript` do syntax:


```livescript

_ = require 'ramda'

flip = requre '@partially-applied/flip'

compose = flip _.compose

add = _.curry (x,y) -> x + y

multiply = _.curry (x,y) -> x*y

h = compose do
    add 1
    multiply 2
    add 2
    multiply 4
    add 3


h # h = (x) -> ((1 + x)*2 + 2)*4 + 3

```



For more information about why use `compose` or `ramda` I suggest reading 
[Chapter 5:Coding by Compose](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md)














