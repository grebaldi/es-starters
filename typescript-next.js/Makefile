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
#                               APPLICATION                                   #
###############################################################################
dev:
	@next

build:
	@next build

run:
	@next start

depcheck:
	@depcheck $$(pwd) --ignore-bin-package --ignores="@types/*,react-dom" --ignore-dirs="dist"

healthcheck:
	@tsc --noEmit && echo "Typecheck: ✓"
	@$(MAKE) build
