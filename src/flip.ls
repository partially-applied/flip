

inner-flip = (argv,f) -> ->

	[(argv.push I) for I in [...arguments]]

	core-flip f,argv


core-flip = (f,argv) ->

	if f.length is argv.length

		f.apply null,argv.reverse!

	else

		inner-flip argv,f


flip = (f) -> 

	argv = []

	if arguments.length > 1

		argv = [...arguments][1 to (arguments.length - 1)]

	core-flip f,argv 


module.exports = flip





