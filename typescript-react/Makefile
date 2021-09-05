#
# @author Wilhelm Behncke <wilhelm.behncke@openformation.io>
#

###############################################################################
#                                VARIABLES                                    #
###############################################################################
SHELL=/bin/bash
export PATH := ./node_modules/.bin:./bin:$(PATH)
export TS_NODE_PROJECT := ./tsconfig.json

###############################################################################
#                               FRONTEND BUILD                                #
###############################################################################
start:
	@vite

build:
	@vite build

depcheck:
	@depcheck $$(pwd) --ignore-bin-package --ignores="@types/*,ts-loader"
