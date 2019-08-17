#
# @author Wilhelm Behncke <behncke@sitegeist.de>
#

###############################################################################
#                                VARIABLES                                    #
###############################################################################
SHELL=/bin/bash
export PATH := ./node_modules/.bin:./bin:$(PATH)
export TS_NODE_PROJECT := ./tsconfig.json
export NODE_ENV := development

###############################################################################
#                               FRONTEND BUILD                                #
###############################################################################
start:
	$(MAKE) -j 2 watch run

run:
	#electron ./dist/main.bundle.js
	nodemon --watch './dist/main.bundle.js' --exec 'electron ./dist/main.bundle.js'

watch:
	webpack --watch --mode development

build:
	webpack --mode production
	electron-builder build --project ./dist --linux --x64 -c.electronVersion 5.0.7

check:
	depcheck $$(pwd) --ignores="@types/*,@@app/*"