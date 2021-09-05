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
#                                  TASKS                                      #
###############################################################################
depcheck:
	@depcheck $$(pwd) --ignore-bin-package --ignores="@types/*"

healthcheck:
	@tsc --noEmit && echo "Typecheck: ✓"
