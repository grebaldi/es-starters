import { logger } from "./logger";
import  chalk from "chalk";
import minimist from "minimist";
import inquirer from "inquirer";
import figlet from "figlet";

const { who } = minimist(process.argv.slice(2), {
    string: ['who'],
    default: { who: 'World' }
})


async function main() {
    console.log(figlet.textSync('CLI Program'));
    console.log();
    console.log(chalk.green(`Hello ${who}!`));

    const { whoelse } = await inquirer.prompt([{
        name: 'whoelse',
        type: 'input',
        message: 'Would you like to greet somebody else?'
    }]);

    console.log();
    console.log(chalk.green(`Hello ${whoelse}!`));

    logger.info('Done greeting.');
}

main();
