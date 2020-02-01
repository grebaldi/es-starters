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
	@$(MAKE) -j 2 watch run

run:
	@nodemon --watch './dist/main.bundle.js' --exec 'electron ./dist/main.bundle.js'

watch:
	@webpack --watch --mode development

.PHONY: build
build:
	@webpack --mode production
	@cp package.json build/package.json
	@electron-builder

depcheck:
	@depcheck $$(pwd) --ignores="@types/*,@@app/*,ts-loader" --ignore-bin-package