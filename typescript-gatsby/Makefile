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
#                               APPLICATION                                   #
###############################################################################
build:
	@gatsby build

run:
	@gatsby develop

depcheck:
	@depcheck $$(pwd) --ignore-bin-package --ignores="@babel/core,@types/*,gatsby-plugin-*" --ignore-dirs=".cache,public"