#
# @author Wilhelm Behncke <behncke@sitegeist.de>
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
	@snowpack dev

build:
	@snowpack build

depcheck:
	@depcheck $$(pwd) --ignore-bin-package --ignores="@types/*,ts-loader"
