cleanup:
	@rm -rf ./**/node_modules

all:
	@for path in ./typescript-*; do \
		cd $$path && pwd && echo && $(command); echo && echo && cd ..; \
	done

install:
	@$(MAKE) -s all command="yarn"

oudated:
	@$(MAKE) -s all command="yarn outdated"

upgrade:
	@$(MAKE) -s all command="yarn upgrade --all --lates"

build:
	@$(MAKE) -s all command="make build"
