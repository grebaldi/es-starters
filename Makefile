cleanup:
	@rm -rf ./**/node_modules

all:
	@for path in ./typescript-*; do \
		cd $$path && pwd && echo && $(command); echo && echo && cd ..; \
	done

install:
	@$(MAKE) -s all command="yarn"

audit:
	@$(MAKE) -s all command="yarn audit"

outdated:
	@$(MAKE) -s all command="yarn outdated"

upgrade:
	@$(MAKE) -s all command="yarn upgrade --all --latest"

build:
	@$(MAKE) -s all command="make build"

depcheck:
	@$(MAKE) -s all command="make depcheck"

healthcheck:
	@$(MAKE) -s all command="make healthcheck"
